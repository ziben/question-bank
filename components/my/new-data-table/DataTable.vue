<script setup lang="ts">
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from '@tanstack/vue-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/shadcn/table'
import {
  FlexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
} from '@tanstack/vue-table'
import { ref, computed } from 'vue'
import { valueUpdater } from '~/lib/utils'
import DataTablePagination from './DataTablePagination.vue'
import DataTableToolbar from './DataTableToolbar.vue'

interface DataTableProps<T> {
  columns: ColumnDef<T, any>[]
  data: T[]
  toolbar?: any
  filter_column?: string | 'title'
  pagination?: {
    page: number
    pageSize: number
    total: number
    onPageChange: (page: number) => void
    onPageSizeChange: (pageSize: number) => void
  }
}
const props = defineProps<DataTableProps<any>>()
const emit = defineEmits<{
  (e: 'action', ...args: any[]): void
}>()

const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})
const rowSelection = ref({})

// 计算当前页码（tanstack table 使用 0-based 索引）
const pageIndex = computed(() => props.pagination ? props.pagination.page - 1 : 0)
const pageSize = computed(() => props.pagination?.pageSize || 10)
const pageCount = computed(() => props.pagination
  ? Math.ceil(props.pagination.total / props.pagination.pageSize)
  : Math.ceil(props.data.length / pageSize.value)
)
const tatal = computed(() => props.pagination?.total || props.data.length)

const table = useVueTable({
  get data() { return props.data },
  get columns() { return props.columns },
  state: {
    get sorting() { return sorting.value },
    get columnFilters() { return columnFilters.value },
    get columnVisibility() { return columnVisibility.value },
    get rowSelection() { return rowSelection.value },
    pagination: {
      get pageIndex() { return pageIndex.value },
      get pageSize() { return pageSize.value }
    }
  },
  get pageCount() { return pageCount.value },
  enableRowSelection: true,
  manualPagination: !!props.pagination,
  onSortingChange: updaterOrValue => valueUpdater(updaterOrValue, sorting),
  onColumnFiltersChange: updaterOrValue => valueUpdater(updaterOrValue, columnFilters),
  onColumnVisibilityChange: updaterOrValue => valueUpdater(updaterOrValue, columnVisibility),
  onRowSelectionChange: updaterOrValue => valueUpdater(updaterOrValue, rowSelection),
  onPaginationChange: (updaterOrValue) => {
    if (props.pagination) {
      if (typeof updaterOrValue === 'function') {
        const newState = updaterOrValue(table.getState().pagination)
        props.pagination.onPageChange(newState.pageIndex + 1)
        if (newState.pageSize !== props.pagination.pageSize) {
          props.pagination.onPageSizeChange(newState.pageSize)
        }
      } else {
        props.pagination.onPageChange(updaterOrValue.pageIndex + 1)
        if (updaterOrValue.pageSize !== props.pagination.pageSize) {
          props.pagination.onPageSizeChange(updaterOrValue.pageSize)
        }
      }
    }
  },
  getCoreRowModel: getCoreRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFacetedRowModel: getFacetedRowModel(),
  getFacetedUniqueValues: getFacetedUniqueValues(),
})

</script>

<template>
  <div class="space-y-4">
    <Component :is="toolbar" :table="table" />
    <DataTableToolbar v-if="!toolbar" :table="table" :filter_column="filter_column"
      @action="(...args) => $emit('action', ...args)" />
    <div class="rounded-md border">
      <Table class="[&_td]:border [&_th]:border border-collapse">
        <TableHeader>
          <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
            <TableHead v-for="header in headerGroup.headers" :key="header.id">
              <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.header"
                :props="header.getContext()" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <template v-if="table.getRowModel().rows?.length">
            <TableRow v-for="row in table.getRowModel().rows" :key="row.id"
              :data-state="row.getIsSelected() && 'selected'">
              <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()"
                  @action="(...args) => $emit('action', ...args)" />
              </TableCell>
            </TableRow>
          </template>

          <TableRow v-else>
            <TableCell :colspan="columns.length" class="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <DataTablePagination :table="table" :total="tatal" />
  </div>
</template>
