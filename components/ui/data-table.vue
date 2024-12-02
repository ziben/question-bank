<template>
  <div>
    <!-- 筛选器 -->
    <div v-if="showFilters" class="mb-4 p-4 bg-white rounded-lg shadow">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <slot name="filters">
          <!-- 默认筛选器 -->
          <div v-for="filter in defaultFilters" :key="filter.key">
            <label class="block text-sm font-medium text-gray-700">{{ filter.label }}</label>
            <component
              :is="filter.component"
              v-model="filterValues[filter.key]"
              v-bind="filter.props"
              class="mt-1"
            />
          </div>
        </slot>
      </div>
      <div class="mt-4 flex justify-end space-x-2">
        <Button variant="outline" @click="resetFilters">重置</Button>
        <Button @click="applyFilters">应用筛选</Button>
      </div>
    </div>

    <!-- 工具栏 -->
    <div class="mb-4 flex justify-between items-center">
      <!-- 批量操作 -->
      <div v-if="showBatchActions && selectedItems.length > 0" class="flex items-center space-x-2">
        <span class="text-sm text-gray-500">
          已选择 {{ selectedItems.length }} 项
        </span>
        <template v-for="action in batchActions" :key="action.label">
          <Button
            v-if="!action.permission || hasPermission(action.permission as Permission)"
            :variant="action.variant"
            @click="action.action"
          >
            {{ action.label }}
          </Button>
        </template>
      </div>

      <!-- 右侧工具栏 -->
      <div class="flex items-center space-x-2">
        <Button variant="outline" @click="showFilters = !showFilters">
          <Filter class="h-4 w-4 mr-2" />
          筛选
        </Button>
        <slot name="toolbar"></slot>
      </div>
    </div>

    <!-- 数据表格 -->
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead v-if="selectable" class="w-[40px]">
              <Checkbox
                :checked="isAllSelected"
                :indeterminate="isIndeterminate"
                @update:checked="toggleSelectAll"
              />
            </TableHead>
            <TableHead
              v-for="column in columns"
              :key="column.key"
              :class="{ 'cursor-pointer': column.sortable }"
              @click="column.sortable && handleSort(column.key)"
            >
              {{ column.title }}
              <ArrowUpDown v-if="column.sortable" class="ml-2 h-4 w-4 inline" />
            </TableHead>
            <TableHead v-if="$slots.actions">操作</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            v-for="item in data"
            :key="getItemKey(item)"
            :class="{ 'bg-gray-50': selectedItems.includes(item) }"
          >
            <TableCell v-if="selectable">
              <Checkbox
                :checked="selectedItems.includes(item)"
                @update:checked="(checked) => toggleSelect(item, checked)"
              />
            </TableCell>
            <TableCell v-for="column in columns" :key="column.key">
              <slot :name="column.key" :item="item">
                {{ getItemValue(item, column) }}
              </slot>
            </TableCell>
            <TableCell v-if="$slots.actions">
              <slot name="actions" :item="item"></slot>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <!-- 分页 -->
    <div v-if="pagination" class="mt-4 flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <span class="text-sm text-gray-500">
          每页显示
        </span>
        <Select
          v-model="pageSize"
          :options="[10, 20, 50, 100]"
          @update:modelValue="handlePageSizeChange"
        />
        <span class="text-sm text-gray-500">
          条，共 {{ pagination.total }} 条
        </span>
      </div>
      <div class="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          :disabled="currentPage === 1"
          @click="handlePageChange(currentPage - 1)"
        >
          <ChevronLeft class="h-4 w-4" />
        </Button>
        <span class="text-sm">
          第 {{ currentPage }}/{{ pagination.totalPages }} 页
        </span>
        <Button
          variant="outline"
          size="sm"
          :disabled="currentPage === pagination.totalPages"
          @click="handlePageChange(currentPage + 1)"
        >
          <ChevronRight class="h-4 w-4" />
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
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
import { Select } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Filter,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-vue-next'

import { usePermission } from '@/composables/usePermission' // adjust path as needed
import type { Permission } from '~/types/permission'

const { hasPermission } = usePermission()

interface Column {
  key: string
  title: string
  sortable?: boolean
  format?: (value: any) => string
}

export interface BatchAction {
  label: string
  action: () => void
  permission?: string
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
}

interface Props {
  columns: Column[]
  data: any[]
  selectable?: boolean
  selectedItems?: any[]
  showBatchActions?: boolean
  batchActions?: BatchAction[]
  loading?: boolean
  pagination?: {
    total: number
    totalPages: number
  }
  defaultFilters?: {
    key: string
    label: string
    component: string
    props?: Record<string, any>
  }[]
}

const props = withDefaults(defineProps<Props>(), {
  selectable: true,
  selectedItems: () => [],
  showBatchActions: true,
  batchActions: () => [],
  loading: false,
  defaultFilters: () => []
})

const emit = defineEmits<{
  (e: 'update:selectedItems', items: any[]): void
  (e: 'sort', key: string, order: 'asc' | 'desc'): void
  (e: 'page-change', page: number): void
  (e: 'page-size-change', size: string): void
  (e: 'filter-change', filters: Record<string, any>): void
  (e: 'apply-filters'): void
  (e: 'reset-filters'): void
}>()

// 状态管理
const showFilters = ref(false)
const filterValues = ref<Record<string, any>>({})
const currentPage = ref(1)
const pageSize = ref('10')
const sortKey = ref('')
const sortOrder = ref<'asc' | 'desc'>('asc')

// 计算属性
const isAllSelected = computed(() => 
  props.data.length > 0 && props.selectedItems.length === props.data.length
)

const isIndeterminate = computed(() =>
  props.selectedItems.length > 0 && props.selectedItems.length < props.data.length
)

// 方法
const getItemKey = (item: any) => {
  return item.id || JSON.stringify(item)
}

const getItemValue = (item: any, column: Column) => {
  const value = item[column.key]
  return column.format ? column.format(value) : value
}

const toggleSelectAll = (checked: boolean) => {
  emit('update:selectedItems', checked ? [...props.data] : [])
}

const toggleSelect = (item: any, checked: boolean) => {
  const newSelection = checked
    ? [...props.selectedItems, item]
    : props.selectedItems.filter(i => i !== item)
  emit('update:selectedItems', newSelection)
}

const handleSort = (key: string) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortOrder.value = 'asc'
  }
  emit('sort', key, sortOrder.value)
}

const handlePageChange = (page: number) => {
  currentPage.value = page
  emit('page-change', page)
}

const handlePageSizeChange = (size: string) => {
  pageSize.value = size
  currentPage.value = 1
  emit('page-size-change', size)
}

const applyFilters = () => {
  emit('filter-change', filterValues.value)
  emit('apply-filters')
}

const resetFilters = () => {
  filterValues.value = {}
  emit('reset-filters')
}
</script>
