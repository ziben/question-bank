import { getUserFromEvent, hasPermission, hasAnyRole } from '~/server/utils/auth'

// 权限映射表
const PERMISSION_MAP: { [key: string]: string } = {
  // 用户管理
  'GET:/api/admin/users': 'user.read',
  'POST:/api/admin/users': 'user.create',
  'PUT:/api/admin/users': 'user.update',
  'DELETE:/api/admin/users': 'user.delete',
  
  // 角色管理
  'GET:/api/admin/roles': 'role.read',
  'POST:/api/admin/roles': 'role.create',
  'PUT:/api/admin/roles': 'role.update',
  'DELETE:/api/admin/roles': 'role.delete',
  
  // 权限管理
  'GET:/api/admin/permissions': 'permission.read',
  'POST:/api/admin/permissions': 'permission.create',
  'PUT:/api/admin/permissions': 'permission.update',
  'DELETE:/api/admin/permissions': 'permission.delete',
}

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

  // 检查权限
  if (event.path.startsWith('/api/admin/')) {
    // 检查用户是否拥有任何管理员角色
    const hasAdminRole = user.roleNames.some(role => 
      ['ADMIN', 'SUPER_ADMIN'].includes(role)
    )

    if (hasAdminRole) {
      return
    }

    // 获取用户所有权限
    const userPermissions = user.permissionNames

    const method = event.method
    const path = event.path.replace(/\/\d+$/, '') // 移除路径中的 ID
    const permissionKey = `${method}:${path}`
    const requiredPermission = PERMISSION_MAP[permissionKey]

    // 如果找到了权限映射且用户没有该权限
    if (requiredPermission && !userPermissions.includes(requiredPermission)) {
      throw createError({
        statusCode: 403,
        message: '没有权限访问此资源'
      })
    }
  }
})
