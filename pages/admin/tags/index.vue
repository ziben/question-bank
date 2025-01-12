<template>
  <div class="hidden h-full flex-1 flex-col space-y-8 p-1 md:flex">
    <div class="flex items-center justify-between space-y-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          标签管理
        </h2>
        <p class="text-muted-foreground">
          管理系统中的标签及其分类
        </p>
      </div>
    </div>
    <MyNewDataTable :data="filteredTags" :columns="columns" :filter_column="'name'" @action="handleAction" />
    <!-- 标签表单对话框 -->
    <Dialog :open="dialog.isOpen" @update:open="dialog.onToggle">
      <DialogContent class="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{{ editingTag ? '编辑标签（ID:' + editingTag.id + '）' : '新建标签' }}</DialogTitle>
          <DialogDescription>
            {{ editingTag ? '修改标签信息' : '创建新的标签并设置基本信息' }}
          </DialogDescription>
        </DialogHeader>
        <form @submit="onSubmit" class="space-y-4 py-4">
          <FormField v-slot="{ componentField }" name="categoryId">
            <FormItem>
              <FormLabel required>所属分类</FormLabel>
              <FormControl>
                <Select v-bind="componentField" :options="categoryOptions" placeholder="选择标签分类" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          
          <FormField v-slot="{ componentField }" name="parentId">
            <FormItem>
              <FormLabel>父标签</FormLabel>
              <FormControl>
                <Select v-bind="componentField" :options="tagOptions" placeholder="选择父标签" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="code">
            <FormItem>
              <FormLabel required>标签代码</FormLabel>
              <FormControl>
                <Input v-bind="componentField" placeholder="输入标签代码" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>          
          
          <FormField v-slot="{ componentField }" name="name">
            <FormItem>
              <FormLabel required>标签名称</FormLabel>
              <FormControl>
                <Input v-bind="componentField" placeholder="输入标签名称" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="description">
            <FormItem>
              <FormLabel>标签描述</FormLabel>
              <FormControl>
                <Textarea v-bind="componentField" placeholder="输入标签描述信息" :rows="3" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="sortOrder">
            <FormItem>
              <FormLabel>排序顺序</FormLabel>
              <FormControl>
                <Input v-bind="componentField" type="number" placeholder="输入排序顺序" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <DialogFooter>
            <Button type="button" variant="outline" @click="dialog.onClose">
              取消
            </Button>
            <Button type="submit" :loading="saving">
              {{ editingTag ? '保存' : '创建' }}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { useTagManagement } from '~/composables/useTagManagement'
import { useDialog } from '@/components/shadcn/dialog/use-dialog'
import { useToast } from '@/components/shadcn/toast/use-toast'
import { useConfirm } from '@/composables/useConfirm'
import type { Tag, TagCategory } from '@prisma/client'
import { useForm } from 'vee-validate'
import { computed, onMounted, ref } from 'vue'
import * as z from 'zod'

interface TagWithRelations extends Tag {
  category: TagCategory
  parent: Tag | null
  children: Tag[]
}

// 标签管理
const {
  loading,
  currentPage,
  pageSize,
  total,
  filters,
  filteredTags,
  handlePagination,
  handlePageSizeChange,
  handleFilterChange,
  createTag,
  updateTag,
  deleteTag,
  refetchTags
} = useTagManagement()

// 对话框状态
const dialog = useDialog()
const confirm = useConfirm()
const { toast } = useToast()

// Tag form schema
const tagFormSchema = z.object({
  code: z.string()
    .min(1, { message: '请输入标签代码' })
    .max(50, { message: '标签代码不能超过50个字符' }),
  name: z.string()
    .min(1, { message: '请输入标签名称' })
    .max(50, { message: '标签名称不能超过50个字符' }),
  description: z.string()
    .max(500, { message: '描述不能超过500个字符' })
    .optional(),
  sortOrder: z.number().int().min(0).default(0),
  categoryId: z.number(),
  parentId: z.number().nullable()
})

type TagFormValues = z.infer<typeof tagFormSchema>

const form = useForm<TagFormValues>({
  validationSchema: tagFormSchema,
})

// 分类列表
const categories = ref<TagCategory[]>([])

// 编辑的标签
const editingTag = ref<TagWithRelations | null>(null)

// 表格列定义
const columns = [
  {
    accessorKey: 'code',
    header: '标签代码'
  },
  {
    accessorKey: 'name',
    header: '标签名称'
  },
  {
    accessorKey: 'category.name',
    header: '所属分类'
  },
  {
    accessorKey: 'parent.name',
    header: '父标签'
  },
  {
    accessorKey: 'description',
    header: '描述'
  },
  {
    accessorKey: 'sortOrder',
    header: '排序'
  },
  {
    id: 'actions',
    cell: ({ row }: any) => {
      const tag = row.original
      return (
        <div class="flex items-center">
          <Button variant="ghost" size="icon" onClick={() => handleAction('edit', tag)}>
            <PencilIcon class="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => handleAction('delete', tag)}>
            <TrashIcon class="h-4 w-4" />
          </Button>
        </div>
      )
    }
  }
]

// 处理表格操作
const handleAction = async (action: string, tag: TagWithRelations) => {
  switch (action) {
    case 'edit':
      openTagDialog(tag)
      break
    case 'delete':
      await deleteTagConfirm(tag)
      break
  }
}

// 打开标签对话框
const openTagDialog = (tag: TagWithRelations | null = null) => {
  editingTag.value = tag
  if (tag) {
    form.setValues({
      code: tag.code,
      name: tag.name,
      description: tag.description || '',
      sortOrder: tag.sortOrder,
      categoryId: tag.categoryId,
      parentId: tag.parentId
    })
  } else {
    form.resetForm()
  }
  dialog.onOpen()
}

// 获取分类列表
const fetchCategories = async () => {
  try {
    const response = await $fetch('/api/categories')
    categories.value = response
  } catch (error: any) {
    toast({
      title: '获取分类列表失败',
      description: error.message,
      variant: 'destructive'
    })
  }
}

// 删除标签确认
const deleteTagConfirm = async (tag: Tag) => {
  const confirmed = await confirm.open({
    title: '确认删除',
    description: `确定要删除标签 "${tag.name}" 吗？`
  })

  if (confirmed) {
    try {
      await deleteTag(tag.id)
      await refetchTags()
    } catch (error) {
      // 错误已在 deleteTag 中处理
    }
  }
}

// 表单提交处理
const onSubmit = (values: TagFormValues) => {
  saveTag(values)
}

// 保存标签
const saveTag = async (values: TagFormValues) => {
  try {
    if (editingTag.value) {
      await updateTag({
        where: { id: editingTag.value.id },
        data: values
      })
    } else {
      await createTag({
        data: values
      })
    }
    
    dialog.onClose()
    await refetchTags()
  } catch (error) {
    // 错误已在 createTag/updateTag 中处理
  }
}

onMounted(() => {
  fetchCategories()
})
</script>
