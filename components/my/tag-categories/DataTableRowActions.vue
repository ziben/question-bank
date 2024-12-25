<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="h-8 w-8 p-0">
        <span class="sr-only">打开菜单</span>
        <MoreHorizontal class="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="emit('action', 'edit', row.original)">
        <Pen class="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
        编辑
      </DropdownMenuItem>
      <DropdownMenuItem @click="emit('action', 'delete', row.original)">
        <Trash class="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
        删除
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup lang="ts">
import type { Row } from '@tanstack/vue-table'
import { MoreHorizontal, Pen, Trash } from 'lucide-vue-next'
import type { TagCategory } from '~/types/tag'

const props = defineProps<{
  row: Row<TagCategory>
}>()

const emit = defineEmits<{
  (e: 'action', action: string, category: TagCategory): void
}>()
</script>
