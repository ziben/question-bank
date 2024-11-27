import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware(async (to) => {
  // 在服务端渲染时跳过认证检查
  if (process.server) return

  const authStore = useAuthStore()
  const publicPages = ['/login']
  const adminPages = ['/admin']
  
  // 检查是否需要认证
  const requiresAuth = !publicPages.includes(to.path)
  
  // 已登录用户访问登录页时重定向到首页
  if (to.path === '/login' && authStore.isAuthenticated) {
    return navigateTo('/')
  }

  // 检查认证状态
  const isAuthenticated = await authStore.checkAuth()

  // 需要认证但未登录时重定向到登录页
  if (requiresAuth && !isAuthenticated) {
    return navigateTo('/login')
  }

  // 检查管理员权限
  if (adminPages.some(page => to.path.startsWith(page)) && !authStore.isAdmin) {
    return navigateTo('/')
  }
})
