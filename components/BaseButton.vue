<script setup lang="ts">
// 使用 VueUse 的 useMediaQuery 实现响应式设计
import { useMediaQuery } from '@vueuse/core'

const props = withDefaults(defineProps<{
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary'
}>(), {
  size: 'md',
  variant: 'primary'
})

const isMobile = useMediaQuery('(max-width: 768px)')
</script>

<template>
  <button
    :class="[
      'rounded-lg transition-colors',
      {
        'px-4 py-2': size === 'md',
        'bg-primary-500': variant === 'primary',
        'text-sm': isMobile
      }
    ]"
  >
    <slot />
  </button>
</template> 