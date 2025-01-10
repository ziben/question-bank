import { defineEventHandler, getQuery, readBody, getRequestIP, getRequestHeader } from 'h3'
import { Logger } from '~/server/utils/logger'
import type { LogModule, LogAction, LogModuleType, LogActionType } from '~/types/log'
import { LOG_ACTIONS, LOG_LEVELS, LOG_MODULES } from '~/types/log'

// 获取日志模块
const getLogModule = (path: string): LogModule => {
  if (path.includes('/api/auth')) return LOG_MODULES.AUTH
  if (path.includes('/api/users')) return LOG_MODULES.USER
  if (path.includes('/api/roles')) return LOG_MODULES.ROLE
  if (path.includes('/api/permissions')) return LOG_MODULES.PERMISSION
  if (path.includes('/api/questions')) return LOG_MODULES.QUESTION
  if (path.includes('/api/exams')) return LOG_MODULES.EXAM
  if (path.includes('/api/tags')) return LOG_MODULES.TAG
  if (path.includes('/api/tests')) return LOG_MODULES.TEST
  return LOG_MODULES.SYSTEM
}

// 获取日志动作
const getLogAction = (method: string, path: string): LogAction => {
  if (path.includes('/api/auth')) {
    if (method === 'POST') return LOG_ACTIONS.LOGIN
    if (method === 'DELETE') return LOG_ACTIONS.LOGOUT
    return LOG_ACTIONS.AUTH
  }

  switch (method) {
    case 'GET': return LOG_ACTIONS.READ
    case 'POST': return LOG_ACTIONS.CREATE
    case 'PUT':
    case 'PATCH': return LOG_ACTIONS.UPDATE
    case 'DELETE': return LOG_ACTIONS.DELETE
    default: return LOG_ACTIONS.OTHER
  }
}

export default defineEventHandler(async (event) => {
  const start = performance.now()
  const { method, url } = event.node.req
  
  // 获取客户端 IP 的多种方式
  const forwardedFor = getRequestHeader(event, 'x-forwarded-for')
  const realIP = getRequestHeader(event, 'x-real-ip')
  const directIP = getRequestIP(event)
  
  // 按优先级获取 IP
  const ip = forwardedFor?.split(',')[0]?.trim() || 
             realIP || 
             (typeof directIP === 'string' ? directIP : directIP?.[0]) ||
             event.node.req.socket?.remoteAddress ||
             'unknown'

  const userAgent = getRequestHeader(event, 'user-agent')

  try {
    // 获取当前用户
    const session = await useAuthSession(event)
    const user = session?.data
    const module = getLogModule(url || '')
    const action = getLogAction(method ?? 'GET', url || '')

    if (!user?.email) {
      console.warn('No user found for request:', { method, url })
      return
    }

    // 记录请求
    await Logger.log({
      module,
      action,
      userId: user.id,
      level: LOG_LEVELS.INFO,
      detail: {
        type: 'request',
        method,
        url,
        query: getQuery(event),
        params: event.context.params || {},
        body: method !== 'GET' ? await readBody(event).catch(() => ({})) : {},
        duration: performance.now() - start,
        timestamp: new Date().toISOString()
      },
      ip,
      userAgent
    })
  } catch (error) {
    console.error('Error in logger middleware:', error)
  }
})
