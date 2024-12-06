import { defineEventHandler, createError } from 'h3'
import { getUserFromEvent } from '~/server/utils/auth'

// 定义管理员角色常量
const ADMIN_ROLES = ['超级管理员', '管理员']

export default defineEventHandler(async (event) => {
  // 检查是否是管理路由
  if (event.path?.startsWith('/api/admin')) {
    const user = await getUserFromEvent(event)
    
    if (!user) {
      throw createError({
        statusCode: 401,
        message: '未登录或登录已过期'
      })
    }

    // 检查用户是否有权限访问管理接口
    const hasAdminAccess = user.roleNames.some(role => ADMIN_ROLES.includes(role))

    if (!hasAdminAccess) {
      throw createError({
        statusCode: 403,
        message: '无权访问管理接口'
      })
    }

    // 将用户信息添加到事件上下文中
    event.context.user = user
  }
})
