<script setup lang="ts">
interface Alert {
  id: number
  type: 'success' | 'error' | 'warning' | 'info'
  title?: string
  message: string
  duration?: number
}

const alerts = ref<Alert[]>([])
let nextId = 0

const addAlert = (alert: Omit<Alert, 'id'>) => {
  const id = nextId++
  alerts.value.push({ ...alert, id })
  return id
}

const removeAlert = (id: number) => {
  const index = alerts.value.findIndex(alert => alert.id === id)
  if (index > -1) {
    alerts.value.splice(index, 1)
  }
}

// 提供全局方法
provide('addAlert', addAlert)
provide('removeAlert', removeAlert)
</script>

<template>
  <div aria-live="polite" class="fixed top-4 right-4 z-50 flex flex-col gap-2 w-96 pointer-events-none">
    <Alert
      v-for="alert in alerts"
      :key="alert.id"
      v-bind="alert"
      class="pointer-events-auto"
      @close="removeAlert(alert.id)"
    />
    <slot />
  </div>
</template>
