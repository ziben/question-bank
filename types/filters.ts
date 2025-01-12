import type { LogModuleType, LogActionType, LogLevel } from './log'

// 日志过滤器类型
export type LogFilter = {
  module?: LogModuleType
  action?: LogActionType
  userId?: string
  search?: string
  startDate?: Date
  endDate?: Date
}

// 日志过滤器默认值
export const DEFAULT_LOG_FILTER: LogFilter = {
  module: undefined,
  action: undefined,
  userId: undefined,
  search: '',
  startDate: undefined,
  endDate: undefined
}

// 标签过滤器类型
export type TagFilter = {
  search?: string
  startDate?: Date
  endDate?: Date
}

// 标签过滤器默认值
export const DEFAULT_TAG_FILTER: TagFilter = {
  search: '',
  startDate: undefined,
  endDate: undefined
}

// 标签分类过滤器类型
export type TagCategoryFilter = {
  search?: string
  startDate?: Date
  endDate?: Date
}

// 标签分类过滤器默认值
export const DEFAULT_TAG_CATEGORY_FILTER: TagCategoryFilter = {
  search: '',
  startDate: undefined,
  endDate: undefined
}
