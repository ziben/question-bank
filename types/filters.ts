import type { LogModuleType, LogActionType, LogLevel } from './log'

// 日志过滤器类型
export type LogFilter = {
  module: LogModuleType | null
  action: LogActionType | null
  level: LogLevel | null
  userId: string | null
  search: string
  startDate: Date | null
  endDate: Date | null
}

// 日志过滤器默认值
export const DEFAULT_LOG_FILTER: LogFilter = {
  module: null,
  action: null,
  level: null,
  userId: null,
  search: '',
  startDate: null,
  endDate: null
}
