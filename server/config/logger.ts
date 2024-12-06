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
  TEST: {
    name: '测试管理',
    description: '测试开始、提交、评分等操作',
    retention: LOG_RETENTION.DEFAULT
  }
} as const

// 操作类型配置
export const LOG_ACTIONS = {
  // 认证操作
  USER_LOGIN: {
    name: '用户登录',
    description: '用户登录系统',
    level: LOG_LEVELS.INFO
  },
  USER_LOGOUT: {
    name: '用户登出',
    description: '用户登出系统',
    level: LOG_LEVELS.INFO
  },
  USER_PASSWORD_CHANGE: {
    name: '修改密码',
    description: '用户修改密码',
    level: LOG_LEVELS.SECURITY
  },
  
  // 用户操作
  USER_CREATE: {
    name: '创建用户',
    description: '创建新用户',
    level: LOG_LEVELS.IMPORTANT
  },
  USER_UPDATE: {
    name: '更新用户',
    description: '更新用户信息',
    level: LOG_LEVELS.INFO
  },
  USER_DELETE: {
    name: '删除用户',
    description: '删除用户',
    level: LOG_LEVELS.IMPORTANT
  },
  
  // 角色操作
  ROLE_CREATE: {
    name: '创建角色',
    description: '创建新角色',
    level: LOG_LEVELS.IMPORTANT
  },
  ROLE_UPDATE: {
    name: '更新角色',
    description: '更新角色信息',
    level: LOG_LEVELS.INFO
  },
  ROLE_DELETE: {
    name: '删除角色',
    description: '删除角色',
    level: LOG_LEVELS.IMPORTANT
  },
  
  // 权限操作
  PERMISSION_CREATE: {
    name: '创建权限',
    description: '创建新权限',
    level: LOG_LEVELS.IMPORTANT
  },
  PERMISSION_UPDATE: {
    name: '更新权限',
    description: '更新权限信息',
    level: LOG_LEVELS.INFO
  },
  PERMISSION_DELETE: {
    name: '删除权限',
    description: '删除权限',
    level: LOG_LEVELS.IMPORTANT
  },
  
  // 角色权限操作
  ROLE_PERMISSION_ASSIGN: {
    name: '分配权限',
    description: '为角色分配权限',
    level: LOG_LEVELS.IMPORTANT
  },
  ROLE_PERMISSION_UNASSIGN: {
    name: '取消权限',
    description: '取消角色的权限',
    level: LOG_LEVELS.IMPORTANT
  },
  
  // 用户角色操作
  USER_ROLE_ASSIGN: {
    name: '分配角色',
    description: '为用户分配角色',
    level: LOG_LEVELS.IMPORTANT
  },
  USER_ROLE_UNASSIGN: {
    name: '取消角色',
    description: '取消用户的角色',
    level: LOG_LEVELS.IMPORTANT
  },
  
  // 题目操作
  QUESTION_CREATE: {
    name: '创建题目',
    description: '创建新题目',
    level: LOG_LEVELS.INFO
  },
  QUESTION_UPDATE: {
    name: '更新题目',
    description: '更新题目信息',
    level: LOG_LEVELS.INFO
  },
  QUESTION_DELETE: {
    name: '删除题目',
    description: '删除题目',
    level: LOG_LEVELS.INFO
  },
  QUESTION_REVIEW: {
    name: '审核题目',
    description: '审核题目',
    level: LOG_LEVELS.INFO
  },
  QUESTION_APPROVE: {
    name: '通过题目',
    description: '通过题目审核',
    level: LOG_LEVELS.INFO
  },
  QUESTION_REJECT: {
    name: '拒绝题目',
    description: '拒绝题目审核',
    level: LOG_LEVELS.INFO
  },
  
  // 考试操作
  EXAM_CREATE: {
    name: '创建考试',
    description: '创建新考试',
    level: LOG_LEVELS.INFO
  },
  EXAM_UPDATE: {
    name: '更新考试',
    description: '更新考试信息',
    level: LOG_LEVELS.INFO
  },
  EXAM_DELETE: {
    name: '删除考试',
    description: '删除考试',
    level: LOG_LEVELS.INFO
  },
  EXAM_PUBLISH: {
    name: '发布考试',
    description: '发布考试',
    level: LOG_LEVELS.IMPORTANT
  },
  EXAM_UNPUBLISH: {
    name: '取消发布',
    description: '取消发布考试',
    level: LOG_LEVELS.IMPORTANT
  },
  
  // 测试操作
  TEST_START: {
    name: '开始测试',
    description: '开始测试',
    level: LOG_LEVELS.INFO
  },
  TEST_SUBMIT: {
    name: '提交测试',
    description: '提交测试答案',
    level: LOG_LEVELS.INFO
  },
  TEST_GRADE: {
    name: '评分测试',
    description: '对测试进行评分',
    level: LOG_LEVELS.INFO
  },
  TEST_REVIEW: {
    name: '复查测试',
    description: '复查测试结果',
    level: LOG_LEVELS.INFO
  }
} as const

// 日志清理配置
export const LOG_CLEANUP = {
  // 每天凌晨2点运行清理
  SCHEDULE: '0 2 * * *',
  // 每次最多清理1000条
  BATCH_SIZE: 1000,
  // 是否启用自动清理
  ENABLED: true
}
