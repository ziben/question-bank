// 日志保留策略配置
export const LOG_RETENTION = {
  // 普通日志保留30天
  DEFAULT: 30 * 24 * 60 * 60 * 1000,
  // 重要操作日志保留90天
  IMPORTANT: 90 * 24 * 60 * 60 * 1000,
  // 安全相关日志保留180天
  SECURITY: 180 * 24 * 60 * 60 * 1000
} as const

// 日志等级配置
export const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
  SECURITY: 4,
  IMPORTANT: 5
} as const

// 模块配置
export const LOG_MODULES = {
  SYSTEM: {
    name: '系统模块',
    description: '系统初始化、日志记录等操作',
    retention: LOG_RETENTION.SECURITY
  },
  AUTH: {
    name: '认证模块',
    description: '用户登录、登出、密码修改等操作',
    retention: LOG_RETENTION.SECURITY
  },
  USER: {
    name: '用户管理',
    description: '用户创建、修改、删除等操作',
    retention: LOG_RETENTION.IMPORTANT
  },
  ROLE: {
    name: '角色管理',
    description: '角色创建、修改、删除、权限分配等操作',
    retention: LOG_RETENTION.IMPORTANT
  },
  PERMISSION: {
    name: '权限管理',
    description: '权限创建、修改、删除等操作',
    retention: LOG_RETENTION.IMPORTANT
  },
  QUESTION: {
    name: '题目管理',
    description: '题目创建、修改、删除、审核等操作',
    retention: LOG_RETENTION.DEFAULT
  },
  EXAM: {
    name: '考试管理',
    description: '考试创建、修改、删除、发布等操作',
    retention: LOG_RETENTION.DEFAULT
  },
  TAG: {
    name: '标签管理',
    description: '标签创建、修改、删除等操作',
    retention: LOG_RETENTION.DEFAULT
  },
  TEST: {
    name: '考试作答',
    description: '考试开始、提交、评分等操作',
    retention: LOG_RETENTION.DEFAULT
  }
} as const

// 操作类型配置
export const LOG_ACTIONS = {
  LOGIN: {
    name: '用户登录',
    description: '用户登录系统',
    level: LOG_LEVELS.SECURITY
  },
  LOGOUT: {
    name: '用户登出',
    description: '用户登出系统',
    level: LOG_LEVELS.SECURITY
  },
  AUTH: {
    name: '认证操作',
    description: '用户认证相关操作',
    level: LOG_LEVELS.SECURITY
  },
  CREATE: {
    name: '创建操作',
    description: '创建新资源',
    level: LOG_LEVELS.INFO
  },
  READ: {
    name: '读取操作',
    description: '读取资源信息',
    level: LOG_LEVELS.INFO
  },
  UPDATE: {
    name: '更新操作',
    description: '更新资源信息',
    level: LOG_LEVELS.INFO
  },
  DELETE: {
    name: '删除操作',
    description: '删除资源',
    level: LOG_LEVELS.INFO
  },
  OTHER: {
    name: '其他操作',
    description: '其他未分类操作',
    level: LOG_LEVELS.INFO
  }
} as const

// 类型定义
export type LogRetention = typeof LOG_RETENTION[keyof typeof LOG_RETENTION]
export type LogLevel = typeof LOG_LEVELS[keyof typeof LOG_LEVELS]
export type LogModuleType = keyof typeof LOG_MODULES
export type LogActionType = keyof typeof LOG_ACTIONS

// 日志模块类型
export type LogModule = {
  name: string
  description: string
  retention: LogRetention
}

// 日志动作类型
export type LogAction = {
  name: string
  description: string
  level: LogLevel
}

// 日志记录类型
export type LogRecord = {
  id: string
  timestamp: Date
  module: LogModuleType
  action: LogActionType
  level: LogLevel
  userId?: string
  username?: string
  ip?: string
  userAgent?: string
  requestUrl?: string
  requestMethod?: string
  requestBody?: string
  responseStatus?: number
  responseBody?: string
  duration?: number
  error?: string
  metadata?: Record<string, unknown>
}
