<template>
  <div>
    <div class="fixed top-4 right-4 z-50 space-y-2">
      <TransitionGroup name="alert">
        <div
          v-for="alert in alerts"
          :key="alert.id"
          class="rounded-lg border-l-4 p-4 shadow-md"
          :class="{
            'bg-green-100 border-green-500 text-green-700': alert.type === 'success',
            'bg-red-100 border-red-500 text-red-700': alert.type === 'error',
            'bg-yellow-100 border-yellow-500 text-yellow-700': alert.type === 'warning',
            'bg-blue-100 border-blue-500 text-blue-700': alert.type === 'info'
          }"
        >
          <div class="flex items-start">
            <div class="flex-1">
              <p v-if="alert.title" class="font-bold">{{ alert.title }}</p>
              <p>{{ alert.message }}</p>
            </div>
            <button
              @click="removeAlert(alert.id)"
              class="ml-4 text-gray-400 hover:text-gray-600"
            >
              <span class="sr-only">Close</span>
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </TransitionGroup>
    </div>
    <slot></slot>
  </div>
</template>

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
  const newAlert = { ...alert, id }
  alerts.value.push(newAlert)

  if (alert.duration !== 0) {
    setTimeout(() => {
      removeAlert(id)
    }, alert.duration || 5000)
  }

  return id
}

const removeAlert = (id: number) => {
  const index = alerts.value.findIndex(alert => alert.id === id)
  if (index !== -1) {
    alerts.value.splice(index, 1)
  }
}

provide('addAlert', addAlert)
provide('removeAlert', removeAlert)
</script>

<style scoped>
.alert-enter-active,
.alert-leave-active {
  transition: all 0.3s ease;
}

.alert-enter-from,
.alert-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
