<script setup lang="ts">
import DataTable from '@/components/my/data-table/DataTable.vue'
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
} from '@/components/shadcn/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/shadcn/select'
import { Plus, Search, Pencil, Trash } from 'lucide-vue-next'

definePageMeta({
  auth: true,
})

interface Source {
  id: number
  name: string
  type: string
  description: string
  createdAt: string
  updatedAt: string
}

const route = useRoute()
const router = useRouter()
const alert = useAlert()

// 获取数据
const { data: sources, refresh } = await useFetch<Source[]>('/api/sources')

// 搜索
const searchQuery = ref('')
const filteredSources = computed(() => (sources.value || []).filter(source =>
  source.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
  source.description?.toLowerCase().includes(searchQuery.value.toLowerCase())
))

// 分页
const pageSize = ref(10)
const currentPage = ref(1)
const total = computed(() => filteredSources.value.length)
const paginatedSources = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return filteredSources.value.slice(start, end)
})

const handlePageChange = (page: number) => {
  currentPage.value = page
}

// 新增/编辑对话框
const showDialog = ref(false)
const isEditing = ref(false)
const currentSource = ref<Partial<Source>>({
  name: '',
  type: 'SCHOOL',
  description: ''
})

const sourceTypes = [
  { value: 'SCHOOL', label: '学校' },
  { value: 'INSTITUTION', label: '机构' },
  { value: 'EXAM', label: '考试' }
]

const resetForm = () => {
  currentSource.value = {
    name: '',
    type: 'SCHOOL',
    description: ''
  }
  isEditing.value = false
}

const openEditDialog = (source: Source) => {
  currentSource.value = { ...source }
  isEditing.value = true
  showDialog.value = true
}

const handleSubmit = async () => {
  try {
    if (isEditing.value) {
      await $fetch(`/api/sources/${currentSource.value.id}`, {
        method: 'PUT',
        body: currentSource.value
      })
      alert.success('更新成功')
    } else {
      await $fetch('/api/sources', {
        method: 'POST',
        body: currentSource.value
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
  if (!window.confirm('确定要删除这个来源吗？')) return

  try {
    await $fetch(`/api/sources/${id}`, {
      method: 'DELETE'
    })
    alert.success('删除成功')
    refresh()
  } catch (error) {
    console.error('删除失败:', error)
    alert.error('删除失败，请稍后重试')
  }
}

const getSourceTypeLabel = (type: string) => {
  return sourceTypes.find(t => t.value === type)?.label || type
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">题目来源管理</h1>
      <Dialog v-model:open="showDialog" @close="resetForm">
        <DialogTrigger asChild>
          <Button>
            <Plus class="h-4 w-4 mr-2" />
            新增来源
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{{ isEditing ? '编辑来源' : '新增来源' }}</DialogTitle>
            <DialogDescription>
              填写来源信息，包括名称、类型和描述。
            </DialogDescription>
          </DialogHeader>
          <div class="space-y-4">
            <div class="space-y-2">
              <label class="text-sm font-medium">名称</label>
              <Input v-model="currentSource.name" placeholder="输入来源名称" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium">类型</label>
              <Select v-model="currentSource.type">
                <SelectTrigger>
                  <SelectValue placeholder="选择来源类型" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem v-for="type in sourceTypes" :key="type.value" :value="type.value">
                    {{ type.label }}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium">描述</label>
              <Input v-model="currentSource.description" placeholder="输入来源描述" />
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
      <Input v-model="searchQuery" placeholder="搜索来源..." class="max-w-sm">
      <template #prefix>
        <Search class="h-4 w-4 text-gray-400" />
      </template>
      </Input>
    </div>

    <div class="rounded-md border">
      <DataTable :columns="[
        { key: 'name', title: '名称' },
        { key: 'type', title: '类型' },
        { key: 'description', title: '描述' },
        { key: 'createdAt', title: '创建时间' }
      ]" :data="paginatedSources" :total="total" :current-page="currentPage" :page-size="pageSize"
        @page-change="handlePageChange">
        <template #type="{ value }">
          {{ getSourceTypeLabel(value) }}
        </template>
        <template #createdAt="{ value }">
          {{ new Date(value).toLocaleString() }}
        </template>
        <template #row-actions="{ row }">
          <Button variant="ghost" size="icon" @click="openEditDialog(row)">
            <Pencil class="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" @click="handleDelete(row.id)">
            <Trash class="h-4 w-4" />
          </Button>
        </template>
      </DataTable>
    </div>
  </div>
</template>
