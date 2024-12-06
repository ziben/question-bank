import { PrismaClient } from '@prisma/client'
import { z } from 'zod'
import { Logger } from '~/server/utils/logger'
import { defineEventHandler, getQuery } from 'h3'

// 统计查询参数验证模式
const statisticsQuerySchema = z.object({
  module: z.enum(['AUTH', 'USER', 'ROLE', 'PERMISSION', 'QUESTION', 'EXAM', 'TEST'] as const).optional(),
  userId: z.coerce.number().optional(),
  startDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional(),
  granularity: z.enum(['hour', 'day', 'week', 'month']).optional().default('day')
})

export default defineEventHandler(async (event) => {
  const method = event.method

  switch (method) {
    case 'GET':
      // 验证权限
      const user = event.context.user
      if (!user || !user.roles.some(role => role.permissions.includes('VIEW_LOGS'))) {
        throw createError({
          statusCode: 403,
          message: '没有权限查看日志统计'
        })
      }

      try {
        const query = getQuery(event)
        const validatedQuery = statisticsQuerySchema.parse(query)

        // 获取查询参数
        const {
          startDate,
          endDate,
          module,
          userId,
          granularity = 'day'
        } = validatedQuery

        // 验证时间粒度
        if (!['hour', 'day', 'week', 'month'].includes(granularity)) {
          throw createError({
            statusCode: 400,
            message: '无效的时间粒度'
          })
        }

        // 设置超时
        const timeout = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('统计超时')), 30000)
        })

        // 获取统计数据
        const statistics = await Promise.race([
          Logger.getStatistics({
            startDate: startDate ? startDate : undefined,
            endDate: endDate ? endDate : undefined,
            module: module as any,
            userId: userId ? userId : undefined,
            granularity: granularity as any
          }),
          timeout
        ])

        return statistics
      } catch (error) {
        console.error('Failed to get statistics:', error)
        throw createError({
          statusCode: error.message === '统计超时' ? 504 : 500,
          message: error.message === '统计超时' ? '统计超时，请缩小时间范围' : '获取统计数据失败',
        })
      }

    default:
      throw createError({
        statusCode: 405,
        message: '不支持的请求方法'
      })
  }
})
