import { PrismaClient } from '@prisma/client'
import { LOG_ACTIONS, LOG_MODULES, LOG_LEVELS } from '../config/logger'
import type { LogModule, LogAction, LogLevel } from '~/types/log'

const prisma = new PrismaClient()

export class Logger {
  static async log({
    module,
    action,
    targetId,
    details,
    userId,
    ip,
    userAgent,
    level
  }: {
    module: LogModule
    action: LogAction
    targetId?: string
    details: any
    userId: number
    ip?: string
    userAgent?: string
    level?: LogLevel
  }) {
    try {
      // 获取操作配置
      const actionConfig = LOG_ACTIONS[action]
      const moduleConfig = LOG_MODULES[module]

      // 创建日志记录
      const log = await prisma.systemLog.create({
        data: {
          module,
          action,
          targetId,
          details: JSON.stringify(details),
          level: level ? LOG_LEVELS[level] : actionConfig.level,
          userId,
          ip,
          userAgent
        }
      })

      return log
    } catch (error) {
      console.error('Failed to create log:', error)
      throw error
    }
  }

  static async getLogs({
    page = 1,
    pageSize = 50,
    module,
    action,
    userId,
    startDate,
    endDate,
    search,
    level,
    ip
  }: {
    page?: number
    pageSize?: number
    module?: LogModule
    action?: LogAction
    userId?: number
    startDate?: Date
    endDate?: Date
    search?: string
    level?: LogLevel
    ip?: string
  } = {}) {
    try {
      // 构建查询条件
      const where: any = {}

      if (module) where.module = module
      if (action) where.action = action
      if (userId) where.userId = userId
      if (ip) where.ip = ip
      if (level) where.level = LOG_LEVELS[level]
      
      if (startDate || endDate) {
        where.timestamp = {}
        if (startDate) where.timestamp.gte = startDate
        if (endDate) where.timestamp.lte = endDate
      }

      if (search) {
        where.OR = [
          { details: { contains: search } },
          { module: { contains: search } },
          { action: { contains: search } },
          { targetId: { contains: search } }
        ]
      }

      // 查询总数
      const total = await prisma.systemLog.count({ where })

      // 查询日志列表
      const logs = await prisma.systemLog.findMany({
        where,
        include: {
          user: {
            select: {
              id: true,
              username: true,
              name: true
            }
          }
        },
        orderBy: {
          timestamp: 'desc'
        },
        skip: (page - 1) * pageSize,
        take: pageSize
      })

      return {
        total,
        logs,
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize)
      }
    } catch (error) {
      console.error('Failed to get logs:', error)
      throw error
    }
  }

  static async getStatistics({
    startDate,
    endDate,
    module,
    userId,
    granularity = 'day'
  }: {
    startDate?: Date
    endDate?: Date
    module?: LogModule
    userId?: number
    granularity?: 'hour' | 'day' | 'week' | 'month'
  } = {}) {
    try {
      // 构建基础查询条件
      const where: any = {}
      if (module) where.module = module
      if (userId) where.userId = userId
      if (startDate || endDate) {
        where.timestamp = {}
        if (startDate) where.timestamp.gte = startDate
        if (endDate) where.timestamp.lte = endDate
      }

      // 查询总数
      const total = await prisma.systemLog.count({ where })

      // 查询今日数量
      const today = await prisma.systemLog.count({
        where: {
          ...where,
          timestamp: {
            gte: new Date(new Date().setHours(0, 0, 0, 0))
          }
        }
      })

      // 获取模块统计
      const moduleStats = await prisma.systemLog.groupBy({
        by: ['module'],
        where,
        _count: true
      })

      // 获取操作统计
      const actionStats = await prisma.systemLog.groupBy({
        by: ['action'],
        where,
        _count: true
      })

      // 获取等级统计
      const levelStats = await prisma.systemLog.groupBy({
        by: ['level'],
        where,
        _count: true
      })

      // 获取时间序列数据
      const timeSeriesData = await this.getTimeSeriesStats({
        where,
        granularity,
        startDate,
        endDate
      })

      return {
        total,
        today,
        details: {
          moduleStats: Object.fromEntries(moduleStats.map(item => [item.module, item._count])),
          actionStats: Object.fromEntries(actionStats.map(item => [item.action, item._count])),
          levelStats: Object.fromEntries(levelStats.map(item => [item.level, item._count])),
          timeSeriesData
        }
      }
    } catch (error) {
      console.error('Failed to get statistics:', error)
      throw error
    }
  }

  static async getTimeSeriesStats({
    where,
    granularity,
    startDate,
    endDate
  }: {
    where: any
    granularity: string
    startDate?: Date
    endDate?: Date
  }) {
    // 根据不同的时间粒度构建不同的SQL
    let timeFormat: string
    switch (granularity) {
      case 'hour':
        timeFormat = '%Y-%m-%d %H:00:00'
        break
      case 'day':
        timeFormat = '%Y-%m-%d'
        break
      case 'week':
        timeFormat = '%Y-%W'
        break
      case 'month':
        timeFormat = '%Y-%m'
        break
      default:
        timeFormat = '%Y-%m-%d'
    }

    // 使用原始SQL查询获取时间序列数据
    const timeSeriesData = await prisma.$queryRaw`
      SELECT 
        strftime(${timeFormat}, timestamp) as date,
        COUNT(*) as count
      FROM SystemLog
      WHERE ${where ? where : 'TRUE'}
      GROUP BY date
      ORDER BY date ASC
    `

    return timeSeriesData
  }

  static async getAuditTrail(targetId: string, module: LogModule) {
    try {
      const logs = await prisma.systemLog.findMany({
        where: {
          targetId,
          module
        },
        include: {
          user: {
            select: {
              id: true,
              username: true,
              name: true
            }
          }
        },
        orderBy: {
          timestamp: 'desc'
        }
      })

      return {
        targetId,
        module,
        logs
      }
    } catch (error) {
      console.error('Failed to get audit trail:', error)
      throw error
    }
  }
}
