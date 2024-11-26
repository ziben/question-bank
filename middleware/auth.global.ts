import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware(async (to) => {
  const authStore = useAuthStore()
  const publicPages = ['/login']
  const adminPages = ['/admin']
  
  // 检查是否需要认证
  const requiresAuth = !publicPages.includes(to.path)
  
  // 检查是否需要管理员权限
  const requiresAdmin = adminPages.some(page => to.path.startsWith(page))

  // 如果用户未登录且访问需要认证的页面，重定向到登录页
  if (requiresAuth && !authStore.isAuthenticated) {
    return navigateTo('/login')
  }

  // 如果用户已登录但访问登录页，重定向到首页
  if (authStore.isAuthenticated && to.path === '/login') {
    return navigateTo('/')
  }

  // 如果页面需要管理员权限但用户不是管理员，重定向到首页
  if (requiresAdmin && !authStore.isAdmin) {
    return navigateTo('/')
  }
})
