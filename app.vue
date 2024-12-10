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

// 全局 toast 实例
const { toast } = useToast()
provide('toast', toast)

// 主题设置
const { isDark } = storeToRefs(useAppStore())
const colorMode = useColorMode()
watchEffect(() => {
  colorMode.preference = isDark.value ? 'dark' : 'dark'
})

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