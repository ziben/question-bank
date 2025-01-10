<template>
  <div class="flex items-center gap-2">
    <!-- 查看详情按钮 -->
    <Button variant="ghost" size="icon" class="h-8 w-8" @click="$emit('action', 'view', row.original)">
      <Icon name="material-symbols:info-outline" class="h-4 w-4" />
    </Button>

    <!-- 删除按钮 -->
    <Button variant="ghost" size="icon" class="h-8 w-8 text-destructive"
      @click="$emit('action', 'delete', row.original)">
      <Icon name="material-symbols:delete-outline" class="h-4 w-4" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import type { Row } from '@tanstack/vue-table'
import type { SystemLogWithRelations } from '~/prisma/generated/zod'

const props = defineProps<{
  row: Row<SystemLogWithRelations>
}>()
</script>
