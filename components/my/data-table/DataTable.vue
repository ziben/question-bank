<template>
  <div class="w-full">
    <div class="flex items-center py-4">
      <Input
        v-model="searchQuery"
        placeholder="搜索..."
        class="max-w-sm"
      >
        <template #prefix>
          <NuxtIcon name="search" class="h-4 w-4 text-muted-foreground" />
        </template>
      </Input>
      <slot name="actions" />
    </div>

    <div class="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead v-for="column in columns" :key="column.key" :class="column.className">
              {{ column.title || column.label }}
            </TableHead>
            <TableHead v-if="$slots['row-actions']">操作</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="(row, index) in data" :key="index">
            <TableCell v-for="column in columns" :key="column.key" :class="column.className">
              <slot :name="column.key" :value="row[column.key]" :row="row">
                {{ row[column.key] }}
              </slot>
            </TableCell>
            <TableCell v-if="$slots['row-actions']">
              <slot name="row-actions" :row="row" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <div v-if="showPagination" class="flex items-center justify-between px-2 py-4">
      <div class="flex-1 text-sm text-muted-foreground">
        {{ paginationText }}
      </div>
      <div class="flex items-center space-x-6 lg:space-x-8">
        <div class="flex items-center space-x-2">
          <p class="text-sm font-medium">每页显示</p>
          <Select
            :model-value="String(localPageSize)"
            @update:model-value="localPageSize = Number($event)"
            class="h-8 w-[70px]"
          >
            <SelectTrigger>
              <SelectValue :placeholder="String(localPageSize)" :value="localPageSize" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem v-for="size in pageSizes" :key="size" :value="String(size)">
                {{ size }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div class="flex w-[100px] items-center justify-center text-sm font-medium">
          第 {{ currentPage }} / {{ totalPages }} 页
        </div>
        <div class="flex items-center space-x-2">
          <Button
            variant="outline"
            class="h-8 w-8 p-0"
            :disabled="currentPage === 1"
            @click="emit('page-change', currentPage - 1)"
          >
            <ChevronLeftIcon class="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            class="h-8 w-8 p-0"
            :disabled="currentPage === totalPages"
            @click="emit('page-change', currentPage + 1)"
          >
            <ChevronRightIcon class="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import { Input } from '@/components/shadcn/input'
import { Button } from '@/components/shadcn/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/shadcn/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn/select'

interface Column {
  key: string
  title?: string
  label?: string
  className?: string
}

interface Props {
  columns: Column[]
  data: any[]
  total: number
  currentPage: number
  pageSize: number
  showPagination?: boolean
  pageSizes?: number[]
}

const props = withDefaults(defineProps<Props>(), {
  showPagination: true,
  pageSizes: () => [10, 20, 30, 50, 100]
})

const emit = defineEmits<{
  (e: 'page-change', page: number): void
  (e: 'page-size-change', size: number): void
  (e: 'search', query: string): void
}>()

const searchQuery = ref('')
const localPageSize = ref(props.pageSize)

watch(searchQuery, (newValue) => {
  emit('search', newValue)
})

watch(localPageSize, (newValue) => {
  emit('page-size-change', newValue)
})

const totalPages = computed(() => Math.ceil(props.total / props.pageSize))

const paginationText = computed(() => {
  const start = (props.currentPage - 1) * props.pageSize + 1
  const end = Math.min(props.currentPage * props.pageSize, props.total)
  return `第 ${start}-${end} 条，共 ${props.total} 条`
})
</script>
