<template>
  <div class="hidden h-full flex-1 flex-col space-y-8 p-1 md:flex">
    <div class="flex items-center justify-between space-y-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          标签分类管理
        </h2>
        <p class="text-muted-foreground">
          管理系统中的标签分类
        </p>
      </div>
      <Button @click="openCategoryDialog()">新建分类</Button>
    </div>
    <MyNewDataTable :data="categories" :columns="columns" :filter_column="'name'" @action="handleAction" />

    <!-- 分类表单对话框 -->
    <Dialog :open="showDialog" @update:open="showDialog = $event">
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
            <Button type="button" variant="outline" @click="showDialog = false">
              取消
            </Button>
            <Button type="submit" :loading="saving">
              {{ editingCategory ? '保存' : '创建' }}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TagCategory } from '~/types/tag'
import { useTagCategories } from '~/composables/useTagCategories'
import { z } from 'zod'
import { columns } from '~/components/my/tag-categories/columns'

// 表单验证schema
const categoryFormSchema = z.object({
  code: z.string().min(1, '请输入分类代码'),
  name: z.string().min(1, '请输入分类名称'),
  description: z.string().optional(),
  sortOrder: z.number().optional()
})

type CategoryFormValues = z.infer<typeof categoryFormSchema>

// 状态定义
const showDialog = ref(false)
const saving = ref(false)
const editingCategory = ref<TagCategory | null>(null)

// 使用分类管理composable
const {
  categories,
  createCategory,
  updateCategory,
  deleteCategory,
  fetchCategories
} = useTagCategories()

// 表单处理
const form = useForm<CategoryFormValues>({
  validationSchema: categoryFormSchema,
  initialValues: {
    code: '',
    name: '',
    description: '',
    sortOrder: 0
  }
})

// 打开对话框
const openCategoryDialog = (category: TagCategory | null = null) => {
  editingCategory.value = category
  if (category) {
    form.setValues({
      code: category.code,
      name: category.name,
      description: category.description || '',
      sortOrder: category.sortOrder || 0
    })
  } else {
    form.resetForm()
  }
  showDialog.value = true
}

// 处理表格操作
const handleAction = async (action: string, category: TagCategory) => {
  if (action === 'edit') {
    openCategoryDialog(category)
  } else if (action === 'delete') {
    if (await confirm.require({
      title: '确认删除',
      content: `确定要删除分类"${category.name}"吗？`
    })) {
      try {
        await deleteCategory(category.id)
        toast.success('删除成功')
        await fetchCategories()
      } catch (error) {
        toast.error('删除失败')
      }
    }
  }
}

// 表单提交
const onSubmit = async (e: Event) => {
  e.preventDefault()
  if (await form.validate()) {
    saveCategory(form.values)
  }
}

// 保存分类
const saveCategory = async (values: CategoryFormValues) => {
  saving.value = true
  try {
    if (editingCategory.value) {
      await updateCategory(editingCategory.value.id, values)
      toast.success('更新成功')
    } else {
      await createCategory(values)
      toast.success('创建成功')
    }
    showDialog.value = false
    await fetchCategories()
  } catch (error) {
    toast.error(editingCategory.value ? '更新失败' : '创建失败')
  } finally {
    saving.value = false
  }
}

// 初始化
onMounted(() => {
  fetchCategories()
})
</script>
