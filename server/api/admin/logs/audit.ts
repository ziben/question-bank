import { defineEventHandler, getQuery } from 'h3'
import { hasPermission } from '~/server/utils/auth'
import { Logger } from '~/server/utils/logger'

export default defineEventHandler(async (event) => {
  // 验证权限
  const user = event.context.user
  if (!user || !hasPermission(user, 'VIEW_LOGS')) {
    throw createError({
      statusCode: 403,
      message: '没有权限查看审计日志'
    })
  }

  // 获取查询参数
  const query = getQuery(event)
  const { module, targetId } = query

  // 验证必要参数
  if (!module || !targetId) {
    throw createError({
      statusCode: 400,
      message: '缺少必要参数'
    })
  }

  try {
    // 设置超时
    const timeout = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('查询超时')), 15000)
    })

    // 获取审计记录
    const auditTrail = await Promise.race([
      Logger.getAuditTrail(
        targetId as string,
        module as any
      ),
      timeout
    ])

    return auditTrail
  } catch (error) {
    console.error('Failed to get audit trail:', error)
    throw createError({
      statusCode: isNuxtError(error) ? error.message === '查询超时' ? 504 : 500 : 500,
      message: isNuxtError(error) ? error.message === '查询超时' ? '查询超时，请缩小查询范围' : '获取审计记录失败' : '获取审计记录失败'
    })
  }
})
