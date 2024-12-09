import { defineEventHandler, getQuery } from 'h3'
import { LOG_LEVELS } from '~/server/config/logger'
import { Logger } from '~/server/utils/logger'
import type { LogQueryParams, LogLevel } from '~/types/log'

export default defineEventHandler(async (event) => {
  // 验证权限
  const user = event.context.user
  if (!user || !user.roles.some((role: { permissions: string | string[] }) => role.permissions.includes('VIEW_LOGS'))) {
    throw createError({
      statusCode: 403,
      message: '没有权限查看日志'
    })
  }

  // 获取查询参数
  const query = getQuery(event)
  const params: LogQueryParams = {
    page: Number(query.page) || 1,
    pageSize: Math.min(Number(query.pageSize) || 50, 100), // 限制每页最大条数
    module: query.module as any,
    action: query.action as any,
    userId: query.userId ? Number(query.userId) : undefined,
    startDate: query.startDate ? new Date(query.startDate as string) : undefined,
    endDate: query.endDate ? new Date(query.endDate as string) : undefined,
    search: query.search as string,
    ip: query.ip as string
  }

  // 验证日期范围
  if (params.startDate && params.endDate && params.startDate > params.endDate) {
    throw createError({
      statusCode: 400,
      message: '开始时间不能晚于结束时间'
    })
  }

  try {
    // 设置超时
    const timeout = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('查询超时')), 30000)
    })

    // 获取日志数据
    const result = await Promise.race([
      Logger.getLogs(params),
      timeout
    ])

    return result
  } catch (error) {
    console.error('Failed to get logs:', error)
    throw createError({
      statusCode: isNuxtError(error) ? error.message === '查询超时' ? 504 : 500 : 500,
      message: isNuxtError(error) ? error.message === '查询超时' ? '查询超时，请缩小查询范围' : '获取日志列表失败' : '获取日志列表失败'
    })
  }
})
