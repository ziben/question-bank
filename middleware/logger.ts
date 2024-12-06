import { Logger } from '~/server/utils/logger'
import type { LogModule, LogAction, LogLevel } from '~/types/log'

// API 路径到模块的映射
const PATH_MODULE_MAP: Record<string, LogModule> = {
  '/api/auth': 'AUTH',
  '/api/admin/users': 'USER',
  '/api/admin/roles': 'ROLE',
  '/api/admin/permissions': 'PERMISSION',
  '/api/admin/questions': 'QUESTION',
  '/api/admin/exams': 'EXAM',
  '/api/tests': 'TEST'
}

// HTTP 方法到操作的映射
const METHOD_ACTION_MAP: Record<string, Record<string, LogAction>> = {
  '/api/auth': {
    'POST:/login': 'USER_LOGIN',
    'POST:/logout': 'USER_LOGOUT',
    'POST:/change-password': 'USER_PASSWORD_CHANGE'
  },
  '/api/admin/users': {
    'POST:': 'USER_CREATE',
    'PUT:': 'USER_UPDATE',
    'DELETE:': 'USER_DELETE'
  },
  '/api/admin/roles': {
    'POST:': 'ROLE_CREATE',
    'PUT:': 'ROLE_UPDATE',
    'DELETE:': 'ROLE_DELETE'
  },
  '/api/admin/permissions': {
    'POST:': 'PERMISSION_CREATE',
    'PUT:': 'PERMISSION_UPDATE',
    'DELETE:': 'PERMISSION_DELETE'
  },
  '/api/admin/questions': {
    'POST:': 'QUESTION_CREATE',
    'PUT:': 'QUESTION_UPDATE',
    'DELETE:': 'QUESTION_DELETE',
    'POST:/review': 'QUESTION_REVIEW',
    'POST:/approve': 'QUESTION_APPROVE',
    'POST:/reject': 'QUESTION_REJECT'
  },
  '/api/admin/exams': {
    'POST:': 'EXAM_CREATE',
    'PUT:': 'EXAM_UPDATE',
    'DELETE:': 'EXAM_DELETE',
    'POST:/publish': 'EXAM_PUBLISH',
    'POST:/unpublish': 'EXAM_UNPUBLISH'
  },
  '/api/tests': {
    'POST:': 'TEST_START',
    'PUT:/submit': 'TEST_SUBMIT',
    'POST:/grade': 'TEST_GRADE',
    'POST:/review': 'TEST_REVIEW'
  }
}

export default defineEventHandler(async (event) => {
  // 跳过日志和静态资源请求的日志记录
  if (event.path.startsWith('/api/admin/logs') || !event.path.startsWith('/api')) {
    return
  }

  const method = event.method
  const path = event.path
  const user = event.context.user
  const query = getQuery(event)
  const body = method !== 'GET' ? await readBody(event) : undefined

  // 获取请求的基础路径
  const basePath = Object.keys(PATH_MODULE_MAP).find(p => path.startsWith(p))
  if (!basePath || !user) {
    return
  }

  // 获取模块
  const module = PATH_MODULE_MAP[basePath]
  if (!module) {
    return
  }

  // 获取操作类型
  const actionMap = METHOD_ACTION_MAP[basePath]
  if (!actionMap) {
    return
  }

  // 构建操作键
  const pathSuffix = path.replace(basePath, '')
  const actionKey = `${method}:${pathSuffix}`
  const action = actionMap[actionKey]
  if (!action) {
    return
  }

  // 获取目标 ID
  const targetId = path.match(/\/\d+/)?.[0]?.replace('/', '')

  try {
    // 记录日志
    await Logger.log({
      module,
      action,
      targetId,
      details: {
        path,
        method,
        query,
        body,
        timestamp: new Date()
      },
      userId: user.id,
      ip: event.node.req.socket.remoteAddress,
      userAgent: event.node.req.headers['user-agent']
    })
  } catch (error) {
    console.error('Failed to log API request:', error)
    // 日志记录失败不应影响请求处理
  }
})
