<template>
  <div class="fixed top-4 right-4 z-50 space-y-2">
    <TransitionGroup name="message">
      <div
        v-for="message in messages"
        :key="message.id"
        :class="[
          'px-4 py-2 rounded-lg shadow-lg max-w-sm',
          {
            'bg-green-500 text-white': message.type === 'success',
            'bg-red-500 text-white': message.type === 'error',
            'bg-blue-500 text-white': message.type === 'info',
            'bg-yellow-500 text-white': message.type === 'warning'
          }
        ]"
      >
        {{ message.content }}
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { useMessage } from '@/composables/useMessage'

const { messages } = useMessage()
</script>

<style scoped>
.message-enter-active,
.message-leave-active {
  transition: all 0.3s ease;
}

.message-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.message-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
