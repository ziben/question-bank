import { getUserFromEvent, checkPermission } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
  // 跳过登录和注册路由的认证
  if (event.path.startsWith('/api/auth/')) {
    return
  }

  const user = await getUserFromEvent(event)
  
  if (!user) {
    throw createError({
      statusCode: 401,
      message: '请先登录'
    })
  }

  // 将用户信息添加到事件上下文中
  event.context.user = user

  // 检查特定路由的权限
  if (event.path.startsWith('/api/admin/')) {
    if (!checkPermission(['ADMIN'], user.role)) {
      throw createError({
        statusCode: 403,
        message: '没有权限访问此资源'
      })
    }
  }
})
