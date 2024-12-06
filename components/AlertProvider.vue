<script setup lang="ts">
import { ref, provide } from 'vue'
import { Alert, AlertTitle, AlertDescription } from '@/components/shadcn/alert'
import type { AlertVariants } from '@/components/shadcn/alert'

interface AlertItem {
    id: number
    type: 'success' | 'error' | 'warning' | 'info'
    title?: string
    message: string
    duration?: number
}

const alerts = ref<AlertItem[]>([])
let nextId = 1

const addAlert = (alert: Omit<AlertItem, 'id'>) => {
    const id = nextId++
    const newAlert = {
        id,
        ...alert,
        duration: alert.duration ?? 5000
    }
    alerts.value.push(newAlert)

    if (newAlert.duration > 0) {
        setTimeout(() => {
            removeAlert(id)
        }, newAlert.duration)
    }

    return id
}

const removeAlert = (id: number) => {
    const index = alerts.value.findIndex(alert => alert.id === id)
    if (index > -1) {
        alerts.value.splice(index, 1)
    }
}

provide('addAlert', addAlert)
provide('removeAlert', removeAlert)

const getAlertVariant = (type: AlertItem['type']): AlertVariants['variant'] => {
    switch (type) {
        case 'success':
            return 'default'
        case 'error':
            return 'destructive'
        default:
            return 'default'
    }
}
</script>

<template>
    <div aria-live="polite" class="fixed right-4 top-4 z-50 flex flex-col gap-2">
        <TransitionGroup enter-active-class="transition duration-300 ease-out"
            enter-from-class="transform translate-x-full opacity-0" enter-to-class="transform translate-x-0 opacity-100"
            leave-active-class="transition duration-200 ease-in" leave-from-class="transform translate-x-0 opacity-100"
            leave-to-class="transform translate-x-full opacity-0">
            <Alert v-for="alert in alerts" :key="alert.id" :variant="getAlertVariant(alert.type)"
                class="w-[400px] shadow-lg">
                <AlertTitle v-if="alert.title">
                    {{ alert.title }}
                </AlertTitle>
                <AlertDescription>
                    {{ alert.message }}
                </AlertDescription>
                <button
                    class="absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    @click="() => removeAlert(alert.id)">
                    <Icon name="heroicons:x-mark" class="h-4 w-4" />
                    <span class="sr-only">关闭</span>
                </button>
            </Alert>
        </TransitionGroup>
    </div>
    <slot />
</template>