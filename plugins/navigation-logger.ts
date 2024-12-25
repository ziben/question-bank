import { useRuntimeConfig } from '#imports'
import type { LogModule } from '~/types/log'
import { LOG_MODULES } from '~/server/config/logger'

// 路由到模块的映射
const ROUTE_MODULE_MAP: Record<string, LogModule> = {
  '/auth': 'AUTH',
  '/admin/users': 'USER',
  '/admin/roles': 'ROLE',
  '/admin/permissions': 'PERMISSION',
  '/admin/questions': 'QUESTION',
  '/admin/exams': 'EXAM',
  '/admin/tags': 'TAG',
  '/tests': 'TEST'
}

const getModuleFromRoute = (route: string): LogModule => {
  const matchedKey = Object.keys(ROUTE_MODULE_MAP).find(key => route.includes(key))
  return matchedKey ? ROUTE_MODULE_MAP[matchedKey] : 'SYSTEM' as LogModule
}

export default defineNuxtPlugin((nuxtApp) => {
  if (!process.client) return

  const config = useRuntimeConfig()
  let navigationStart = 0

  // 导航开始时
  nuxtApp.hook('app:beforeMount', () => {
    navigationStart = performance.now()
    if (config.public.debug) {
      console.debug(`[应用] 开始挂载`)
    }
  })

  // 页面更新前
  nuxtApp.hook('page:start', () => {
    navigationStart = performance.now()
    if (config.public.debug) {
      console.debug(`[页面] 开始加载`)
    }
  })

  // 页面更新后
  nuxtApp.hook('page:finish', () => {
    const duration = Math.round(performance.now() - navigationStart)
    const route = useRoute()
    const module = getModuleFromRoute(route.path)

    // 记录导航日志
    console.log({
      module,
      level: 'INFO' as const,
      message: `页面加载完成: ${route.path}`,
      metadata: {
        path: route.path,
        duration: `${duration}ms`,
        query: route.query,
        timestamp: new Date().toISOString(),
        userAgent: window.navigator.userAgent
      }
    })

    if (config.public.debug) {
      console.debug(`[页面] 加载完成 (${duration}ms)`, {
        module,
        path: route.path,
        query: route.query
      })
    }
  })

  // 页面加载出错
  nuxtApp.hook('page:error', (error) => {
    const duration = Math.round(performance.now() - navigationStart)
    const route = useRoute()
    const module = getModuleFromRoute(route.path)

    console.error({
      module,
      level: 'ERROR' as const,
      message: `页面加载失败: ${route.path}`,
      metadata: {
        path: route.path,
        duration: `${duration}ms`,
        error: error instanceof Error ? error.message : '未知错误',
        timestamp: new Date().toISOString(),
        userAgent: window.navigator.userAgent
      }
    })
  })

  // Vue 应用错误
  nuxtApp.hook('vue:error', (error) => {
    const route = useRoute()
    const module = getModuleFromRoute(route.path)

    console.error({
      module,
      level: 'ERROR' as const,
      message: `Vue错误: ${route.path}`,
      metadata: {
        path: route.path,
        error: error instanceof Error ? error.message : '未知错误',
        timestamp: new Date().toISOString(),
        userAgent: window.navigator.userAgent
      }
    })
  })
})
