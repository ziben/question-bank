<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Plus, Search, Pencil, Trash, Loader2, AlertCircle } from 'lucide-vue-next'
import { debouncedRef } from '@vueuse/core'
import { getErrorMessage } from '~/utils/error'
import { validateSubject } from '~/utils/validation'

interface Subject {
  id: number
  name: string
  description: string
  createdAt: string
  updatedAt: string
}

const route = useRoute()
const router = useRouter()
const alert = useAlert()

// 状态管理
const loading = ref(false)
const showDialog = ref(false)
const showDeleteDialog = ref(false)
const isEditing = ref(false)
const currentSubject = ref<Partial<Subject>>({
  name: '',
  description: ''
})
const selectedSubjectId = ref<number | null>(null)

// 搜索相关
const searchQuery = ref('')
const debouncedSearch = debouncedRef(searchQuery, 300)

// 获取科目列表
const { data: subjects, pending, error, refresh } = await useFetch<Subject[]>('/api/subjects', {
  query: computed(() => ({
    search: debouncedSearch.value
  }))
})

// 过滤科目列表
const filteredSubjects = computed(() => {
  if (!subjects.value) return []
  if (!searchQuery.value) return subjects.value

  const query = searchQuery.value.toLowerCase()
  return subjects.value.filter(subject => 
    subject.name.toLowerCase().includes(query) || 
    subject.description?.toLowerCase().includes(query)
  )
})

// 重置表单
function resetForm() {
  currentSubject.value = {
    name: '',
    description: ''
  }
  isEditing.value = false
  showDialog.value = false
  loading.value = false
}

// 打开编辑对话框
function openEditDialog(subject: Subject) {
  currentSubject.value = { ...subject }
  isEditing.value = true
  showDialog.value = true
}

// 提交表单
async function handleSubmit() {
  try {
    // 表单验证
    const validationErrors = validateSubject(currentSubject.value)
    if (validationErrors.length > 0) {
      alert.error(validationErrors.join('\n'))
      return
    }

    loading.value = true
    if (isEditing.value && currentSubject.value.id) {
      // 更新科目
      await $fetch(`/api/subjects/${currentSubject.value.id}`, {
        method: 'PUT',
        body: currentSubject.value
      })
      alert.success('科目更新成功')
    } else {
      // 创建科目
      await $fetch('/api/subjects', {
        method: 'POST',
        body: currentSubject.value
      })
      alert.success('科目创建成功')
    }

    resetForm()
    refresh()
  } catch (error) {
    alert.error(getErrorMessage(error))
  } finally {
    loading.value = false
  }
}

// 确认删除
function confirmDelete(subject: Subject) {
  selectedSubjectId.value = subject.id
  showDeleteDialog.value = true
}

// 删除科目
async function handleDelete() {
  if (!selectedSubjectId.value) return

  try {
    loading.value = true
    await $fetch(`/api/subjects/${selectedSubjectId.value}`, {
      method: 'DELETE'
    })
    alert.success('科目删除成功')
    showDeleteDialog.value = false
    selectedSubjectId.value = null
    refresh()
  } catch (error) {
    alert.error(getErrorMessage(error))
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <!-- 页面标题和新增按钮 -->
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">科目管理</h1>
      <Dialog v-model:open="showDialog" @close="resetForm">
        <DialogTrigger asChild>
          <Button>
            <Plus class="h-4 w-4 mr-2" />
            新增科目
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{{ isEditing ? '编辑科目' : '新增科目' }}</DialogTitle>
            <DialogDescription>
              填写科目信息，包括名称和描述。
            </DialogDescription>
          </DialogHeader>
          <div class="space-y-4">
            <div class="space-y-2">
              <label class="text-sm font-medium">名称 <span class="text-red-500">*</span></label>
              <Input 
                v-model="currentSubject.name" 
                placeholder="输入科目名称" 
                :disabled="loading"
                required
              />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium">描述</label>
              <Textarea
                v-model="currentSubject.description"
                placeholder="输入科目描述"
                :disabled="loading"
                rows="3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" @click="showDialog = false" :disabled="loading">
              取消
            </Button>
            <Button @click="handleSubmit" :disabled="loading">
              <Loader2 v-if="loading" class="h-4 w-4 mr-2 animate-spin" />
              {{ isEditing ? '保存' : '创建' }}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>

    <!-- 搜索框 -->
    <div class="flex items-center space-x-2 mb-4">
      <div class="relative flex-1 max-w-sm">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          v-model="searchQuery"
          placeholder="搜索科目..."
          class="pl-9"
        />
      </div>
    </div>

    <!-- 科目列表 -->
    <div class="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead class="w-[100px]">ID</TableHead>
            <TableHead>名称</TableHead>
            <TableHead>描述</TableHead>
            <TableHead class="w-[200px]">创建时间</TableHead>
            <TableHead class="w-[100px] text-right">操作</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-if="pending" class="relative">
            <TableCell colspan="5" class="h-24 text-center text-muted-foreground">
              <div class="flex items-center justify-center">
                <Loader2 class="h-6 w-6 animate-spin mr-2" />
                加载中...
              </div>
            </TableCell>
          </TableRow>
          <TableRow v-else-if="error" class="relative">
            <TableCell colspan="5" class="h-24 text-center text-muted-foreground">
              <div class="flex items-center justify-center text-red-500">
                <AlertCircle class="h-6 w-6 mr-2" />
                加载失败，请刷新页面重试
              </div>
            </TableCell>
          </TableRow>
          <TableRow v-else-if="!filteredSubjects.length" class="relative">
            <TableCell colspan="5" class="h-24 text-center text-muted-foreground">
              {{ searchQuery ? '未找到匹配的科目' : '暂无科目数据' }}
            </TableCell>
          </TableRow>
          <TableRow v-for="subject in filteredSubjects" :key="subject.id">
            <TableCell>{{ subject.id }}</TableCell>
            <TableCell>{{ subject.name }}</TableCell>
            <TableCell>{{ subject.description || '-' }}</TableCell>
            <TableCell>{{ new Date(subject.createdAt).toLocaleString('zh-CN') }}</TableCell>
            <TableCell class="text-right">
              <div class="flex items-center justify-end gap-2">
                <Button 
                  variant="ghost" 
                  size="icon"
                  title="编辑"
                  :disabled="loading"
                  @click="openEditDialog(subject)"
                >
                  <Pencil class="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  title="删除"
                  :disabled="loading"
                  class="text-red-500 hover:text-red-600"
                  @click="confirmDelete(subject)"
                >
                  <Trash class="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <!-- 删除确认对话框 -->
    <Dialog v-model:open="showDeleteDialog">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>删除科目</DialogTitle>
          <DialogDescription>
            确定要删除这个科目吗？此操作不可恢复。
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" @click="showDeleteDialog = false" :disabled="loading">
            取消
          </Button>
          <Button 
            variant="destructive" 
            @click="handleDelete"
            :disabled="loading"
          >
            <Loader2 v-if="loading" class="h-4 w-4 mr-2 animate-spin" />
            确认删除
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>
