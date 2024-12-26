<template>
  <AlertProvider>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </AlertProvider>
  <Toaster />
</template>

<script setup lang="ts">
import { useToast } from '@/components/shadcn/toast/use-toast'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import { provideHooksContext } from './lib/hooks'

// 全局 toast 实例
const { toast } = useToast()
provide('toast', toast)

// Provide tanstack-query context
// Use an absolute endpoint so server-side fetch works too
provideHooksContext({
    endpoint: 'http://localhost:3000/api/model',
});

// 错误处理
onErrorCaptured((error) => {
  console.error('Captured error:', error)
  toast({
    variant: 'destructive',
    title: '请求失败',
    description: `${error}`
  })
  return false
})

// 页面配置
useHead({
  titleTemplate: '%s - 题库管理系统',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: '一个现代化的题库管理系统' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' }
  ]
})
</script>