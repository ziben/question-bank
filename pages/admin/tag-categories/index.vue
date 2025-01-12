<template>
  <div class="hidden h-full flex-1 flex-col space-y-8 p-1 md:flex">
    <div class="flex items-center justify-between space-y-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          标签分类管理
        </h2>
        <p class="text-muted-foreground">
          管理系统中的标签分类，用于对标签进行分类和组织
        </p>
      </div>
      <Button @click="openCategoryDialog()">新建分类</Button>
    </div>

    <MyNewDataTable 
      :data="filteredTagCategories" 
      :columns="columns" 
      :filter_column="'name'" 
      @action="handleAction"
      :loading="loading"
      :pagination="{
        page: currentPage,
        pageSize: pageSize,
        total: total || 0,
      }"
      @page-change="handlePagination"
      @page-size-change="handlePageSizeChange"
    />

    <!-- 分类表单对话框 -->
    <Dialog :open="dialog.isOpen" @update:open="dialog.onToggle">
      <DialogContent class="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{{ editingCategory ? '编辑分类' : '新建分类' }}</DialogTitle>
          <DialogDescription>
            {{ editingCategory ? '修改分类信息' : '创建新的标签分类' }}
          </DialogDescription>
        </DialogHeader>
        <form @submit="onSubmit" class="space-y-4 py-4">
          <FormField v-slot="{ componentField }" name="code">
            <FormItem>
              <FormLabel required>分类代码</FormLabel>
              <FormControl>
                <Input v-bind="componentField" placeholder="输入分类代码" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="name">
            <FormItem>
              <FormLabel required>分类名称</FormLabel>
              <FormControl>
                <Input v-bind="componentField" placeholder="输入分类名称" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="description">
            <FormItem>
              <FormLabel>分类描述</FormLabel>
              <FormControl>
                <Textarea v-bind="componentField" placeholder="输入分类描述信息" :rows="3" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="allowMultiple">
            <FormItem class="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox v-bind="componentField" />
              </FormControl>
              <div class="space-y-1 leading-none">
                <FormLabel>允许多选</FormLabel>
                <FormDescription>
                  允许在同一个标签分类下选择多个标签
                </FormDescription>
              </div>
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="sortOrder">
            <FormItem>
              <FormLabel>排序顺序</FormLabel>
              <FormControl>
                <Input v-bind="componentField" type="number" placeholder="输入排序顺序" />
              </FormControl>
              <FormDescription>
                数字越小排序越靠前
              </FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>

          <DialogFooter>
            <Button type="button" variant="outline" @click="dialog.onClose">
              取消
            </Button>
            <Button type="submit" :loading="loading">
              {{ editingCategory ? '保存' : '创建' }}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { useTagCategoryManagement } from '~/composables/useTagCategoryManagement'
import { useToast } from '@/components/shadcn/toast/use-toast'
import { useConfirm } from '@/composables/useConfirm'
import type { TagCategory } from '@prisma/client'
import { useForm } from 'vee-validate'
import { computed, onMounted, ref } from 'vue'
import * as z from 'zod'

// 标签分类管理
const {
  loading,
  currentPage,
  pageSize,
  total,
  filters,
  filteredTagCategories,
  handlePagination,
  handlePageSizeChange,
  handleFilterChange,
  createTagCategory,
  updateTagCategory,
  deleteTagCategory,
  refetchTagCategories
} = useTagCategoryManagement()

// 对话框状态
const dialog = useDialog()
const confirm = useConfirm()
const { toast } = useToast()

// 表单验证schema
const categoryFormSchema = z.object({
  code: z.string()
    .min(1, { message: '请输入分类代码' })
    .max(50, { message: '分类代码不能超过50个字符' }),
  name: z.string()
    .min(1, { message: '请输入分类名称' })
    .max(50, { message: '分类名称不能超过50个字符' }),
  description: z.string()
    .max(500, { message: '描述不能超过500个字符' })
    .optional(),
  allowMultiple: z.boolean().default(false),
  sortOrder: z.number().int().min(0).default(0)
})

type CategoryFormValues = z.infer<typeof categoryFormSchema>

const form = useForm<CategoryFormValues>({
  validationSchema: categoryFormSchema
})

// 编辑的分类
const editingCategory = ref<TagCategory | null>(null)

// 表格列定义
const columns = [
  {
    accessorKey: 'code',
    header: '分类代码'
  },
  {
    accessorKey: 'name',
    header: '分类名称'
  },
  {
    accessorKey: 'description',
    header: '描述'
  },
  {
    accessorKey: 'allowMultiple',
    header: '允许多选',
    cell: ({ row }: any) => row.original.allowMultiple ? '是' : '否'
  },
  {
    accessorKey: 'sortOrder',
    header: '排序'
  },
  {
    id: 'actions',
    cell: ({ row }: any) => {
      const category = row.original
      return (
        <div class="flex items-center">
          <Button variant="ghost" size="icon" onClick={() => handleAction('edit', category)}>
            <PencilIcon class="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => handleAction('delete', category)}>
            <TrashIcon class="h-4 w-4" />
          </Button>
        </div>
      )
    }
  }
]

// 处理表格操作
const handleAction = async (action: string, category: TagCategory) => {
  switch (action) {
    case 'edit':
      openCategoryDialog(category)
      break
    case 'delete':
      await deleteCategoryConfirm(category)
      break
  }
}

// 打开分类对话框
const openCategoryDialog = (category: TagCategory | null = null) => {
  editingCategory.value = category
  if (category) {
    form.setValues({
      code: category.code,
      name: category.name,
      description: category.description || '',
      allowMultiple: category.allowMultiple,
      sortOrder: category.sortOrder
    })
  } else {
    form.resetForm()
  }
  dialog.onOpen()
}

// 删除分类确认
const deleteCategoryConfirm = async (category: TagCategory) => {
  const confirmed = await confirm.open({
    title: '确认删除',
    description: `确定要删除分类 "${category.name}" 吗？`
  })

  if (confirmed) {
    try {
      await deleteTagCategory(category.id)
      await refetchTagCategories()
    } catch (error) {
      // 错误已在 deleteTagCategory 中处理
    }
  }
}

// 表单提交处理
const onSubmit = (values: CategoryFormValues) => {
  saveCategory(values)
}

// 保存分类
const saveCategory = async (values: CategoryFormValues) => {
  try {
    if (editingCategory.value) {
      await updateTagCategory({
        where: { id: editingCategory.value.id },
        data: values
      })
    } else {
      await createTagCategory({
        data: values
      })
    }
    
    dialog.onClose()
    await refetchTagCategories()
  } catch (error) {
    // 错误已在 createTagCategory/updateTagCategory 中处理
  }
}
</script>
