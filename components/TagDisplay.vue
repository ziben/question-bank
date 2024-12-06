<template>
  <div class="flex flex-wrap gap-2">
    <Badge
      v-for="tag in tags"
      :key="tag.id"
      :variant="getVariantByCategory(tag.category.code)"
      class="text-xs"
    >
      {{ tag.name }}
      <span v-if="showCategory" class="text-xs opacity-70">
        ({{ tag.category.name }})
      </span>
    </Badge>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Badge } from '~/components/shadcn/badge'

interface Tag {
  id: number
  name: string
  category: {
    id: number
    name: string
    code: string
  }
}

const props = defineProps<{
  tags: Tag[]
  showCategory?: boolean
}>()

// 根据标签类别返回不同的样式
function getVariantByCategory(categoryCode: string) {
  const variants: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
    'source': 'default',
    'difficulty': 'destructive',
    'type': 'secondary',
    'province': 'outline',
    'year': 'default',
    'literacy': 'secondary',
    'feature': 'outline'
  }
  return variants[categoryCode] || 'default'
}
</script>
