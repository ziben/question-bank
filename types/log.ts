import { LOG_MODULES, LOG_ACTIONS, LOG_LEVELS } from '~/server/config/logger'

// 从配置中导出类型
export type LogModule = keyof typeof LOG_MODULES
export type LogAction = keyof typeof LOG_ACTIONS
export type LogLevel = keyof typeof LOG_LEVELS

// 日志条目类型
export interface LogEntry {
  id: number
  module: LogModule
  action: LogAction
  level: LogLevel
  message: string
  metadata: Record<string, any>
  userId: number
  ip?: string
  userAgent?: string
  createdAt: Date
}

// 日志查询参数类型
export interface LogQueryParams {
  page: number
  pageSize: number
  module?: LogModule
  action?: LogAction
  level?: LogLevel
  userId?: number
  startDate?: Date
  endDate?: Date
  search?: string
  ip?: string
}

// 日志统计类型
export interface LogStatistics {
  total: number
  today: number
  details: {
    moduleStats: Record<LogModule, number>
    actionStats: Record<LogAction, number>
    levelStats: Record<LogLevel, number>
    timeSeriesData: Array<{
      date: string
      count: number
    }>
  }
}

// 日志审计轨迹类型
export interface LogAuditTrail {
  targetId: string
  module: LogModule
  logs: LogEntry[]
}
