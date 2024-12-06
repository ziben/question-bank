<template>
  <div class="container mx-auto p-4 space-y-4">
    <!-- 标题和操作按钮 -->
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold">标签管理</h1>
      <Button @click="openCreateDialog()">新建标签</Button>
    </div>

    <!-- 标签类别列表 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card v-for="category in categories" :key="category.id" class="relative">
        <CardHeader>
          <div class="flex items-center justify-between">
            <div>
              <CardTitle>{{ category.name }}</CardTitle>
              <CardDescription>{{ category.description || '暂无描述' }}</CardDescription>
            </div>
            <div class="flex items-center gap-2">
              <Button variant="ghost" size="icon" @click="editCategory(category)">
                <PencilIcon class="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" @click="deleteCategory(category)">
                <TrashIcon class="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Badge variant="secondary" class="mt-2">{{ category.code }}</Badge>
          <Badge variant="outline" class="mt-2 ml-2">
            {{ category.allowMultiple ? '可多选' : '单选' }}
          </Badge>
        </CardHeader>
        <CardContent>
          <div class="space-y-2">
            <div class="flex justify-between items-center">
              <h3 class="text-sm font-medium">标签列表</h3>
              <Button variant="ghost" size="sm" @click="openCreateTagDialog(category)">
                添加标签
              </Button>
            </div>
            <div class="flex flex-wrap gap-2">
              <Badge
                v-for="tag in categoryTags[category.id]"
                :key="tag.id"
                variant="secondary"
                class="cursor-pointer hover:bg-secondary/80"
                @click="editTag(tag)"
              >
                {{ tag.name }}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- 标签类别对话框 -->
    <Dialog :open="showCategoryDialog" @update:open="showCategoryDialog = $event">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{{ isEditing ? '编辑标签类别' : '新建标签类别' }}</DialogTitle>
        </DialogHeader>
        <form @submit.prevent="submitCategory" class="space-y-4">
          <div class="space-y-2">
            <Label>名称</Label>
            <Input v-model="categoryForm.name" required />
          </div>
          <div class="space-y-2">
            <Label>代码</Label>
            <Input v-model="categoryForm.code" required />
          </div>
          <div class="space-y-2">
            <Label>描述</Label>
            <Textarea v-model="categoryForm.description" />
          </div>
          <div class="flex items-center space-x-2">
            <Checkbox v-model="categoryForm.allowMultiple" id="allowMultiple" />
            <Label for="allowMultiple">允许多选</Label>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" @click="showCategoryDialog = false">
              取消
            </Button>
            <Button type="submit">确定</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>

    <!-- 标签对话框 -->
    <Dialog :open="showTagDialog" @update:open="showTagDialog = $event">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{{ isEditingTag ? '编辑标签' : '新建标签' }}</DialogTitle>
        </DialogHeader>
        <form @submit.prevent="submitTag" class="space-y-4">
          <div class="space-y-2">
            <Label>名称</Label>
            <Input v-model="tagForm.name" required />
          </div>
          <div class="space-y-2">
            <Label>代码</Label>
            <Input v-model="tagForm.code" required />
          </div>
          <div class="space-y-2">
            <Label>描述</Label>
            <Textarea v-model="tagForm.description" />
          </div>
          <div class="space-y-2">
            <Label>排序</Label>
            <Input v-model="tagForm.sortOrder" type="number" />
          </div>
          <div class="space-y-2">
            <Label>父标签</Label>
            <Select v-model="tagForm.parentId">
              <SelectTrigger>
                <SelectValue placeholder="选择父标签" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">无</SelectItem>
                <SelectItem
                  v-for="tag in categoryTags[selectedCategory?.id || 0]"
                  :key="tag.id"
                  :value="tag.id"
                >
                  {{ tag.name }}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" @click="showTagDialog = false">
              取消
            </Button>
            <Button type="submit">确定</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>

    <!-- 删除确认对话框 -->
    <AlertDialog :open="showDeleteDialog" @update:open="showDeleteDialog = $event">
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>确认删除</AlertDialogTitle>
          <AlertDialogDescription>
            {{ deleteMessage }}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>取消</AlertDialogCancel>
          <AlertDialogAction @click="confirmDelete">确定删除</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useMessage } from '@/composables/useMessage'
import { useAuth } from '@/composables/useAuth'
import { PencilIcon, TrashIcon } from 'lucide-vue-next'
import { Button } from '@/components/shadcn/button'
import { Input } from '@/components/shadcn/input'
import { Label } from '@/components/shadcn/label'
import { Textarea } from '@/components/shadcn/textarea'
import { Checkbox } from '@/components/shadcn/checkbox'
import { Badge } from '@/components/shadcn/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/shadcn/dialog'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/shadcn/alert-dialog'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/shadcn/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn/select'

const { showMessage } = useMessage()
const { user } = useAuth()

// 状态管理
const categories = ref<any[]>([])
const categoryTags = ref<Record<number, any[]>>({})
const showCategoryDialog = ref(false)
const showTagDialog = ref(false)
const showDeleteDialog = ref(false)
const isEditing = ref(false)
const isEditingTag = ref(false)
const selectedCategory = ref<any>(null)
const selectedItem = ref<any>(null)
const deleteMessage = ref('')

// 表单数据
const categoryForm = ref({
  id: null as number | null,
  name: '',
  code: '',
  description: '',
  allowMultiple: false,
})

const tagForm = ref({
  id: null as number | null,
  name: '',
  code: '',
  description: '',
  sortOrder: 0,
  parentId: null as number | null,
  categoryId: null as number | null,
})

// 初始化数据
onMounted(async () => {
  if (!user.value) {
    showMessage('请先登录', 'error')
    return
  }
  await loadCategories()
})

// 加载标签类别
async function loadCategories() {
  try {
    const response = await useFetch('/api/admin/tags/categories')
    categories.value = response.data.value || []
    await loadTagsByCategories()
  } catch (error) {
    showMessage('加载标签类别失败', 'error')
  }
}

// 加载所有类别的标签
async function loadTagsByCategories() {
  try {
    for (const category of categories.value) {
      const response = await useFetch(`/api/admin/tags/${category.id}`)
      categoryTags.value[category.id] = response.data.value || []
    }
  } catch (error) {
    showMessage('加载标签失败', 'error')
  }
}

// 打开创建标签类别对话框
function openCreateDialog() {
  isEditing.value = false
  categoryForm.value = {
    id: null,
    name: '',
    code: '',
    description: '',
    allowMultiple: false,
  }
  showCategoryDialog.value = true
}

// 打开编辑标签类别对话框
function editCategory(category: any) {
  isEditing.value = true
  categoryForm.value = { ...category }
  showCategoryDialog.value = true
}

// 打开创建标签对话框
function openCreateTagDialog(category: any) {
  isEditingTag.value = false
  selectedCategory.value = category
  tagForm.value = {
    id: null,
    name: '',
    code: '',
    description: '',
    sortOrder: 0,
    parentId: null,
    categoryId: category.id,
  }
  showTagDialog.value = true
}

// 打开编辑标签对话框
function editTag(tag: any) {
  isEditingTag.value = true
  selectedCategory.value = categories.value.find(c => c.id === tag.categoryId)
  tagForm.value = { ...tag }
  showTagDialog.value = true
}

// 提交标签类别
async function submitCategory() {
  try {
    const url = isEditing.value
      ? `/api/admin/tags/categories/${categoryForm.value.id}`
      : '/api/admin/tags/categories'
    const method = isEditing.value ? 'PUT' : 'POST'

    await $fetch(url, {
      method,
      body: {
        ...categoryForm.value,
        createdById: isEditing.value ? undefined : user.value?.id,
        updatedById: user.value?.id,
      },
    })

    showMessage(
      `${isEditing.value ? '更新' : '创建'}标签类别成功`,
      'success'
    )
    showCategoryDialog.value = false
    await loadCategories()
  } catch (error) {
    showMessage(
      `${isEditing.value ? '更新' : '创建'}标签类别失败`,
      'error'
    )
  }
}

// 提交标签
async function submitTag() {
  try {
    const url = isEditingTag.value
      ? `/api/admin/tags/${tagForm.value.id}`
      : '/api/admin/tags'
    const method = isEditingTag.value ? 'PUT' : 'POST'

    await $fetch(url, {
      method,
      body: {
        ...tagForm.value,
        createdById: isEditingTag.value ? undefined : user.value?.id,
        updatedById: user.value?.id,
      },
    })

    showMessage(
      `${isEditingTag.value ? '更新' : '创建'}标签成功`,
      'success'
    )
    showTagDialog.value = false
    await loadTagsByCategories()
  } catch (error) {
    showMessage(
      `${isEditingTag.value ? '更新' : '创建'}标签失败`,
      'error'
    )
  }
}

// 删除标签类别
function deleteCategory(category: any) {
  selectedItem.value = category
  deleteMessage.value = `确定要删除标签类别"${category.name}"吗？删除后无法恢复，且该类别下的所有标签都将被删除。`
  showDeleteDialog.value = true
}

// 删除标签
function deleteTag(tag: any) {
  selectedItem.value = tag
  deleteMessage.value = `确定要删除标签"${tag.name}"吗？删除后无法恢复。`
  showDeleteDialog.value = true
}

// 确认删除
async function confirmDelete() {
  try {
    if (selectedItem.value.code) {
      // 删除标签
      await $fetch(`/api/admin/tags/${selectedItem.value.id}`, {
        method: 'DELETE',
      })
      await loadTagsByCategories()
      showMessage('删除标签成功', 'success')
    } else {
      // 删除标签类别
      await $fetch(`/api/admin/tags/categories/${selectedItem.value.id}`, {
        method: 'DELETE',
      })
      await loadCategories()
      showMessage('删除标签类别成功', 'success')
    }
    showDeleteDialog.value = false
  } catch (error) {
    showMessage('删除失败', 'error')
  }
}
</script>
