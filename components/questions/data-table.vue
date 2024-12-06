<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/shadcn/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/shadcn/dropdown-menu'
import { Button } from '@/components/shadcn/button'
import { Input } from '@/components/shadcn/input'
import { Checkbox } from '@/components/shadcn/checkbox'
import {
  MoreHorizontal,
  ChevronDown,
  Plus,
  Search,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-vue-next'
import { type Question, type PaginatedResponse, DifficultyLevelLabels, type DifficultyLevel } from '~/types'

const props = defineProps<{
  questions: Question[]
  pagination?: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}>()

const emit = defineEmits<{
  (e: 'delete', id: number): void
  (e: 'batch-delete', ids: number[]): void
  (e: 'edit', id: number): void
  (e: 'preview', question: Question): void
  (e: 'refresh'): void
  (e: 'query-change', query: Record<string, any>): void
}>()

const router = useRouter()
const route = useRoute()

const searchQuery = ref('')
const selectedIds = ref<Set<number>>(new Set())
const sortBy = ref<keyof Question>('createdAt')
const sortDirection = ref<'asc' | 'desc'>('desc')

const toggleSort = (column: keyof Question) => {
  if (sortBy.value === column) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortBy.value = column
    sortDirection.value = 'asc'
  }

  emit('query-change', {
    sort: column,
    order: sortDirection.value
  })
}

const toggleSelect = (id: number) => {
  if (selectedIds.value.has(id)) {
    selectedIds.value.delete(id)
  } else {
    selectedIds.value.add(id)
  }
}

const selectAll = () => {
  if (selectedIds.value.size === props.questions.length) {
    selectedIds.value.clear()
  } else {
    selectedIds.value = new Set(props.questions.map(q => q.id))
  }
}

const handleSearch = () => {
  emit('query-change', {
    search: searchQuery.value,
    page: 1
  })
}

const formatType = (type: string) => {
  const typeMap: Record<string, string> = {
    multiple_choice: '选择题',
    true_false: '判断题',
    essay: '问答题'
  }
  return typeMap[type] || type
}

const formatDifficulty = (difficulty: DifficultyLevel) => {
  return DifficultyLevelLabels[difficulty] || difficulty
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}

const getDifficultyColor = (difficulty: number) => {
  switch (difficulty) {
    case 1: return 'text-green-600'
    case 2: return 'text-yellow-600'
    case 3: return 'text-red-600'
    default: return ''
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'multiple_choice': return 'text-blue-600'
    case 'true_false': return 'text-green-600'
    case 'essay': return 'text-purple-600'
    default: return ''
  }
}

const goToPage = (page: number) => {
  emit('query-change', { page })
}

const handleLimitChange = (event: Event) => {
  const limit = parseInt((event.target as HTMLSelectElement).value)
  emit('query-change', { limit, page: 1 })
}
</script>

<template>
  <div class="w-full">
    <div class="flex items-center justify-between py-4">
      <div class="flex items-center gap-4">
        <Button variant="outline" @click="selectAll">
          {{ selectedIds.size === questions.length ? '取消全选' : '全选' }}
          <span class="text-sm text-gray-500 ml-2">
            ({{ selectedIds.size }}/{{ questions.length }})
          </span>
        </Button>
        <Button v-if="selectedIds.size > 0" variant="destructive"
          @click="$emit('batch-delete', Array.from(selectedIds))">
          批量删除
        </Button>
      </div>
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <Input v-model="searchQuery" placeholder="搜索题目..." class="w-[200px]" @keyup.enter="handleSearch" />
          <Button variant="outline" @click="handleSearch">
            <Search class="h-4 w-4" />
          </Button>
        </div>
        <Button variant="default" @click="router.push('/questions/new')">
          <Plus class="h-4 w-4 mr-2" />
          新建题目
        </Button>
      </div>
    </div>

    <div class="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead class="w-[40px]">
              <Checkbox :checked="selectedIds.size === questions.length"
                :indeterminate="selectedIds.size > 0 && selectedIds.size < questions.length"
                @update:checked="selectAll" />
            </TableHead>
            <TableHead @click="toggleSort('title')" class="cursor-pointer">
              标题
              <ArrowUpDown class="ml-2 h-4 w-4" />
            </TableHead>
            <TableHead @click="toggleSort('type')" class="cursor-pointer">
              类型
              <ArrowUpDown class="ml-2 h-4 w-4" />
            </TableHead>
            <TableHead @click="toggleSort('difficulty')" class="cursor-pointer">
              难度
              <ArrowUpDown class="ml-2 h-4 w-4" />
            </TableHead>
            <TableHead @click="toggleSort('category')" class="cursor-pointer">
              分类
              <ArrowUpDown class="ml-2 h-4 w-4" />
            </TableHead>
            <TableHead @click="toggleSort('createdAt')" class="cursor-pointer">
              创建时间
              <ArrowUpDown class="ml-2 h-4 w-4" />
            </TableHead>
            <TableHead class="text-right">操作</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="question in questions" :key="question.id">
            <TableCell>
              <Checkbox :checked="selectedIds.has(question.id)" @update:checked="toggleSelect(question.id)" />
            </TableCell>
            <TableCell>{{ question.title }}</TableCell>
            <TableCell>
              <span :class="[getTypeColor(question.type)]">
                {{ formatType(question.type) }}
              </span>
            </TableCell>
            <TableCell>
              <span :class="[getDifficultyColor(question.difficulty)]">
                {{ formatDifficulty(question.difficulty) }}
              </span>
            </TableCell>
            <TableCell>{{ question.category?.name }}</TableCell>
            <TableCell>{{ formatDate(question.createdAt) }}</TableCell>
            <TableCell class="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" class="h-8 w-8 p-0">
                    <span class="sr-only">打开菜单</span>
                    <MoreHorizontal class="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>操作</DropdownMenuLabel>
                  <DropdownMenuItem @click="$emit('preview', question)">
                    预览
                  </DropdownMenuItem>
                  <DropdownMenuItem @click="$emit('edit', question.id)">
                    编辑
                  </DropdownMenuItem>
                  <DropdownMenuItem @click="$emit('delete', question.id)" class="text-red-600">
                    删除
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <!-- 分页 -->
    <div v-if="pagination" class="flex items-center justify-between px-2 py-4">
      <div class="text-sm text-gray-700">
        共 {{ pagination.total }} 条记录
      </div>
      <div class="flex items-center space-x-6 lg:space-x-8">
        <div class="flex items-center space-x-2">
          <p class="text-sm font-medium">每页</p>
          <select
            class="h-8 w-[70px] rounded-md border border-input bg-transparent px-2 py-1 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
            :value="pagination.limit" @change="handleLimitChange">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </div>
        <div class="flex w-[100px] items-center justify-center text-sm font-medium">
          第 {{ pagination.page }}/{{ pagination.totalPages }} 页
        </div>
        <div class="flex items-center space-x-2">
          <Button variant="outline" class="h-8 w-8 p-0" :disabled="pagination.page <= 1"
            @click="goToPage(pagination.page - 1)">
            <span class="sr-only">上一页</span>
            <ChevronLeft class="h-4 w-4" />
          </Button>
          <Button variant="outline" class="h-8 w-8 p-0" :disabled="pagination.page >= pagination.totalPages"
            @click="goToPage(pagination.page + 1)">
            <span class="sr-only">下一页</span>
            <ChevronRight class="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
