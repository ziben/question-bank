<script setup lang="ts">
import DataTableViewOptions from '@/components/my/new-data-table/DataTableViewOptions.vue'
import { Button } from '@/components/shadcn/button'
import { Input } from '@/components/shadcn/input'
import type { Table } from '@tanstack/vue-table'
import { computed } from 'vue'

interface DataTableToolbarProps {
  table: Table<any>,
  filter_column?: string
}

const props = defineProps<DataTableToolbarProps>()

const isFiltered = computed(() => props.table.getState().columnFilters.length > 0)
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex flex-1 items-center space-x-2">
      <Input placeholder="过滤..."
        :model-value="(table.getColumn(filter_column ?? 'title')?.getFilterValue() as string) ?? ''"
        class="h-8 w-[150px] lg:w-[250px]"
        @input="table.getColumn(filter_column ?? 'title')?.setFilterValue($event.target.value)" />

      <Button v-if="isFiltered" variant="ghost" class="h-8 px-2 lg:px-3" @click="table.resetColumnFilters()">
        重置
        <Icon name="radix-icons:cross-2" class="ml-2 h-4 w-4" />
      </Button>
      <Button variant="default" size="sm" class="mr-2" @click="$emit('action', 'add')">新增</Button>
    </div>
    <DataTableViewOptions :table="table" />
  </div>
</template>
