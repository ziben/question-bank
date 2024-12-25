<script setup lang="ts">
import { Button } from '@/components/shadcn/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn/select';
import type { Table } from '@tanstack/vue-table';

interface DataTablePaginationProps {
  table: Table<any>
  total: number
}
defineProps<DataTablePaginationProps>()
</script>

<template>
  <div class="flex items-center justify-between px-2">
    <div class="flex-1 text-sm text-muted-foreground">
      {{ table.getFilteredSelectedRowModel().rows.length > 0
        ? `选中 ${table.getFilteredSelectedRowModel().rows.length} 行，`
        : ''
      }}共 {{ total }} 行
    </div>
    <div class="flex items-center space-x-6 lg:space-x-8">
      <div class="flex items-center space-x-2">
        <p class="text-sm font-medium">每页</p>
        <Select :model-value="`${table.getState().pagination.pageSize}`"
          @update:model-value="(value) => table.setPageSize(Number(value))">
          <SelectTrigger class="h-8 w-[70px]">
            <SelectValue :placeholder="`${table.getState().pagination.pageSize}`" />
          </SelectTrigger>
          <SelectContent side="top">
            <SelectItem v-for="size in [10, 20, 30, 50, 100]" :key="size" :value="`${size}`">
              {{ size }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div class="flex w-[100px] items-center justify-center text-sm font-medium">
        第 {{ table.getState().pagination.pageIndex + 1 }} / {{ table.getPageCount() }} 页
      </div>
      <div class="flex items-center space-x-2">
        <Button variant="outline" class="hidden h-8 w-8 p-0 lg:flex" :disabled="!table.getCanPreviousPage()"
          @click="table.setPageIndex(0)">
          <span class="sr-only">转到第一页</span>
          <Icon name="material-symbols:keyboard-double-arrow-left" class="h-4 w-4" />
        </Button>
        <Button variant="outline" class="h-8 w-8 p-0" :disabled="!table.getCanPreviousPage()"
          @click="table.previousPage()">
          <span class="sr-only">转到上一页</span>
          <Icon name="material-symbols:chevron-left" class="h-4 w-4" />
        </Button>
        <Button variant="outline" class="h-8 w-8 p-0" :disabled="!table.getCanNextPage()" @click="table.nextPage()">
          <span class="sr-only">转到下一页</span>
          <Icon name="material-symbols:chevron-right" class="h-4 w-4" />
        </Button>
        <Button variant="outline" class="hidden h-8 w-8 p-0 lg:flex" :disabled="!table.getCanNextPage()"
          @click="table.setPageIndex(table.getPageCount() - 1)">
          <span class="sr-only">转到最后一页</span>
          <Icon name="material-symbols:keyboard-double-arrow-right" class="h-4 w-4" />
        </Button>
      </div>
    </div>
  </div>
</template>
