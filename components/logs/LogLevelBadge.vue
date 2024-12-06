<template>
  <span
    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
    :class="levelConfig.class"
  >
    {{ levelConfig.label }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  level: number
}>()

const levelConfig = computed(() => {
  switch (props.level) {
    case 0:
      return { label: 'DEBUG', class: 'bg-gray-100 text-gray-800' }
    case 1:
      return { label: 'INFO', class: 'bg-blue-100 text-blue-800' }
    case 2:
      return { label: 'WARN', class: 'bg-yellow-100 text-yellow-800' }
    case 3:
      return { label: 'ERROR', class: 'bg-red-100 text-red-800' }
    case 4:
      return { label: 'SECURITY', class: 'bg-purple-100 text-purple-800' }
    default:
      return { label: 'UNKNOWN', class: 'bg-gray-100 text-gray-800' }
  }
})
</script>
