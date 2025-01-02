<script setup lang="ts">
import type { Row } from '@tanstack/vue-table'
import { Button } from '@/components/shadcn/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/shadcn/dropdown-menu'

interface DataTableRowActionsProps {
  row: Row<any>
}
const props = defineProps<DataTableRowActionsProps>()

</script>

<template>
  <DropdownMenu onclick="console.log('click')">
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
        <Icon name="radix-icons:dots-horizontal" class="h-4 w-4" />
        <span class="sr-only">Open menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-[160px]">
      <DropdownMenuItem @click="$emit('action', 'edit', row.original)">编辑</DropdownMenuItem>
      <DropdownMenuItem @click="$emit('action', 'toggle', row.original)">切换</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="$emit('action', 'delete', row.original)">
        删除
        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
