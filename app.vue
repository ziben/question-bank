<template>
  <AlertProvider>
    <NuxtLayout>
      <v-app>
        <NuxtPage />
      </v-app>
    </NuxtLayout>
  </AlertProvider>
  <Toaster />
</template>

<script setup lang="ts">
import { useToast } from '@/components/shadcn/toast/use-toast'
// 全局 toast 实例
const { toast } = useToast()
provide('toast', toast)

const colorMode = useColorMode()
colorMode.preference = 'dark'

// 错误处理
onErrorCaptured((error) => {
  console.error('Captured error:', error)
  toast({ title: '请求失败', description: `${error}` })
  return false
})

// 页面配置
useHead({
  titleTemplate: '%s - 题库管理系统',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: '一个现代化的题库管理系统' },
    // { name: 'theme-color', content: '#ffffff' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' }
  ]
})
</script>

<style>
html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  @apply m-0 p-0 min-h-screen;
  /* color: rgba(0, 0, 0, 0.85); */
  /* line-height: 1.5; */
  /* background-color: #f0f2f5; */
}

#__nuxt {
  @apply h-full;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.15s ease-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
