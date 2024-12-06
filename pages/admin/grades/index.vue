<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/shadcn/table'
import { Button } from '@/components/shadcn/button'
import { Input } from '@/components/shadcn/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/shadcn/dialog'
import { Plus, Search, Pencil, Trash } from 'lucide-vue-next'

interface Grade {
  id: number
  name: string
  description: string
  createdAt: string
  updatedAt: string
}

const route = useRoute()
const router = useRouter()
const alert = useAlert()

// 获取数据
const { data: grades, refresh } = await useFetch<Grade[]>('/api/grades')

// 搜索
const searchQuery = ref('')
const filteredGrades = computed(() => {
  if (!searchQuery.value) return grades.value
  const query = searchQuery.value.toLowerCase()
  return grades.value?.filter(grade => 
    grade.name.toLowerCase().includes(query) ||
    grade.description?.toLowerCase().includes(query)
  )
})

// 新增/编辑对话框
const showDialog = ref(false)
const isEditing = ref(false)
const currentGrade = ref<Partial<Grade>>({
  name: '',
  description: ''
})

const resetForm = () => {
  currentGrade.value = {
    name: '',
    description: ''
  }
  isEditing.value = false
}

const openEditDialog = (grade: Grade) => {
  currentGrade.value = { ...grade }
  isEditing.value = true
  showDialog.value = true
}

const handleSubmit = async () => {
  try {
    if (isEditing.value) {
      await $fetch(`/api/grades/${currentGrade.value.id}`, {
        method: 'PUT',
        body: currentGrade.value
      })
      alert.success('更新成功')
    } else {
      await $fetch('/api/grades', {
        method: 'POST',
        body: currentGrade.value
      })
      alert.success('创建成功')
    }
    showDialog.value = false
    resetForm()
    refresh()
  } catch (error) {
    console.error('保存失败:', error)
    alert.error('保存失败，请稍后重试')
  }
}

const handleDelete = async (id: number) => {
  if (!window.confirm('确定要删除这个年级吗？')) return

  try {
    await $fetch(`/api/grades/${id}`, {
      method: 'DELETE'
    })
    alert.success('删除成功')
    refresh()
  } catch (error) {
    console.error('删除失败:', error)
    alert.error('删除失败，请稍后重试')
  }
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">年级管理</h1>
      <Dialog v-model:open="showDialog" @close="resetForm">
        <DialogTrigger asChild>
          <Button>
            <Plus class="h-4 w-4 mr-2" />
            新增年级
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{{ isEditing ? '编辑年级' : '新增年级' }}</DialogTitle>
            <DialogDescription>
              填写年级信息，包括名称和描述。
            </DialogDescription>
          </DialogHeader>
          <div class="space-y-4">
            <div class="space-y-2">
              <label class="text-sm font-medium">名称</label>
              <Input v-model="currentGrade.name" placeholder="输入年级名称" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium">描述</label>
              <Input v-model="currentGrade.description" placeholder="输入年级描述" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" @click="showDialog = false">取消</Button>
            <Button @click="handleSubmit">保存</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>

    <div class="flex items-center space-x-2 mb-4">
      <Input
        v-model="searchQuery"
        placeholder="搜索年级..."
        class="max-w-sm"
      >
        <template #prefix>
          <Search class="h-4 w-4 text-gray-400" />
        </template>
      </Input>
    </div>

    <div class="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>名称</TableHead>
            <TableHead>描述</TableHead>
            <TableHead>创建时间</TableHead>
            <TableHead class="text-right">操作</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="grade in filteredGrades" :key="grade.id">
            <TableCell>{{ grade.name }}</TableCell>
            <TableCell>{{ grade.description }}</TableCell>
            <TableCell>{{ new Date(grade.createdAt).toLocaleString() }}</TableCell>
            <TableCell class="text-right">
              <Button variant="ghost" size="icon" @click="openEditDialog(grade)">
                <Pencil class="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" @click="handleDelete(grade.id)">
                <Trash class="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>
