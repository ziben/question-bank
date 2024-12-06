import { useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin((nuxtApp) => {
  const authStore = useAuthStore()

  // 全局拦截器配置
  nuxtApp.hooks.hook('app:created', () => {
    console.log('api plugin initialized')
  })

  // 配置全局默认值
  const defaultOptions = {
    headers: {} as HeadersInit
  }

  globalThis.$fetch = $fetch.create({
    ...defaultOptions,
    onRequest({ options }) {
      // 合并认证头
      options.headers = {
        ...options.headers,
        ...authStore.authHeader
      }
      console.log('Request interceptor:', options)
    },
    onResponseError({ response }) {
      // 处理认证错误
      if (response.status === 401) {
        // token过期或无效，清除认证状态
        authStore.resetState()
        // 重定向到登录页
        navigateTo('/login')
      }
    }
  })
})