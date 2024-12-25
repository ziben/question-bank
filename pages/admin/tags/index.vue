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
    <MyNewDataTable :data="tags" :columns="columns" :filter_column="'name'" @action="handleAction" />
    <!-- 标签表单对话框 -->
    <Dialog :open="showTagDialog" @update:open="showTagDialog = $event">
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
            <Button type="button" variant="outline" @click="showTagDialog = false">
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/shadcn/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/shadcn/form'
import { ScrollArea } from '@/components/shadcn/scroll-area'
import { Separator } from '@/components/shadcn/separator'
import { useToast } from '@/components/shadcn/toast/use-toast'
import { useConfirm } from '@/composables/useConfirm'
import type { Tag, TagCategory } from '@prisma/client'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { computed, onMounted, ref, watch } from 'vue'
import * as z from 'zod'

import { columns } from '@/components/my/tags/columns'
import { TagOptionalDefaultsSchema, type TagWithRelations } from '~/prisma/generated/zod'
import type { Row } from '@tanstack/vue-table'

definePageMeta({
  middleware: ['logger']
})

// 状态管理
const loading = ref(false)
const saving = ref(false)
const showTagDialog = ref(false)
const editingTag = ref<TagWithRelations | null>(null)
const tags = ref<TagWithRelations[]>([])
const categories = ref<TagCategory[]>([])
const total = ref(0)
const currentPage = ref(1)
const pageSize = ref(10)
const searchQuery = ref('')

const confirm = useConfirm()
const { toast } = useToast()

// Tag form schema
const tagFormSchema = toTypedSchema(
  z.object({
    categoryId: z.number({
      required_error: '请选择所属分类'
    }),
    parentId: z.number().nullable(),
    code: z.string().min(1, {
      message: '请输入标签代码'
    }).max(50, {
      message: '标签代码不能超过50个字符'
    }),
    name: z.string().min(1, {
      message: '请输入标签名称'
    }).max(50, {
      message: '标签名称不能超过50个字符'
    }),
    description: z.string().max(500, {
      message: '描述不能超过500个字符'
    }).optional(),
    sortOrder: z.number().int().min(0).default(0)
  })
)

type TagFormValues = z.infer<typeof tagFormSchema>

const form = useForm<TagFormValues>({
  validationSchema: tagFormSchema,
  initialValues: {
    categoryId: 0,
    parentId: null,
    code: '',
    name: '',
    description: '',
    sortOrder: 0
  }
})

// 分类选项
const categoryOptions = computed(() => {
  return categories.value.map(category => ({
    label: category.name,
    value: category.id
  }))
})

// 标签选项(父标签)
const tagOptions = computed(() => {
  return tags.value
    .filter(tag => tag.id !== editingTag.value?.id)
    .map(tag => ({
      label: tag.name,
      value: tag.id
    }))
})

// 处理表格操作
const handleAction = async (action: string, ...args: any[]) => {
  switch (action) {
    case 'edit':
      openTagDialog(args[0])
      break
    case 'delete':
      await deleteTag(args[0])
      break
  }
}

// 打开标签对话框
const openTagDialog = (tag: TagWithRelations | null = null) => {
  editingTag.value = tag
  if (tag) {
    form.setValues({
      categoryId: tag.categoryId,
      parentId: tag.parentId,
      code: tag.code,
      name: tag.name,
      description: tag.description || '',
      sortOrder: tag.sortOrder
    })
  } else {
    form.resetForm()
  }
  showTagDialog.value = true
}

// 获取标签列表
const fetchTags = async () => {
  try {
    loading.value = true
    const response = await $fetch('/api/admin/tags', {
      params: {
        page: currentPage.value,
        pageSize: pageSize.value,
        search: searchQuery.value
      }
    })
    tags.value = response.data
    total.value = response.pagination.total
  } catch (error) {
    toast({
      title: '错误',
      description: '获取标签列表失败',
      variant: 'destructive'
    })
    console.error('获取标签列表失败:', error)
  } finally {
    loading.value = false
  }
}

// 获取分类列表
const fetchCategories = async () => {
  try {
    const response = await $fetch('/api/admin/tag-categories')
    categories.value = response.data
  } catch (error) {
    toast({
      title: '错误',
      description: '获取分类列表失败',
      variant: 'destructive'
    })
    console.error('获取分类列表失败:', error)
  }
}

// 删除标签
const deleteTag = async (tag: Tag) => {
  const confirmed = await confirm.open({
    title: '确认删除',
    description: `是否确认删除标签 "${tag.name}"？此操作不可恢复。`
  })

  if (!confirmed) return

  try {
    await $fetch(`/api/admin/tags/${tag.id}`, {
      method: 'DELETE'
    })
    toast({
      title: '成功',
      description: '删除标签成功'
    })
    await fetchTags()
  } catch (error) {
    toast({
      title: '错误',
      description: '删除标签失败',
      variant: 'destructive'
    })
    console.error('删除标签失败:', error)
  }
}

// 表单提交处理
const onSubmit = async (e: Event) => {
  e.preventDefault()
  await saveTag(form.values)
}

// 保存标签
const saveTag = async (values: TagFormValues) => {
  saving.value = true
  try {
    if (editingTag.value) {
      await $fetch(`/api/admin/tags/${editingTag.value.id}`, {
        method: 'PUT',
        body: values
      })
      toast({
        title: '成功',
        description: '更新标签成功'
      })
    } else {
      await $fetch('/api/admin/tags', {
        method: 'POST',
        body: values
      })
      toast({
        title: '成功',
        description: '创建标签成功'
      })
    }
    showTagDialog.value = false
    await fetchTags()
  } catch (error) {
    toast({
      title: '错误',
      description: editingTag.value ? '更新标签失败' : '创建标签失败',
      variant: 'destructive'
    })
    console.error('保存标签失败:', error)
  } finally {
    saving.value = false
  }
}

// 分页处理
const onPageChange = (page: number) => {
  currentPage.value = page
}

const onPageSizeChange = (size: number) => {
  pageSize.value = size
  currentPage.value = 1
}

// 监听分页和搜索变化
watch([currentPage, pageSize, searchQuery], () => {
  fetchTags()
})

// 初始化
onMounted(() => {
  fetchTags()
  fetchCategories()
})
</script>
