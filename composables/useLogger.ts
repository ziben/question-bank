import type { LogModule, LogLevel } from '~/types/log'
import { LOG_LEVELS } from '~/server/config/logger'

export function useLogger() {
  const createLog = async (
    module: LogModule,
    action: string,
    message: string = '',
    level: keyof typeof LOG_LEVELS = 'INFO',
    metadata: Record<string, any> = {}
  ) => {
    try {
      await $fetch('/api/logs', {
        method: 'POST',
        body: {
          module,
          action,
          level,
          message,
          metadata: {
            ...metadata,
            timestamp: new Date().toISOString(),
            userAgent: window.navigator.userAgent
          }
        }
      })
    } catch (error) {
      console.error('Failed to create log:', error)
      // 如果是重要日志，在本地存储失败的日志
      if (LOG_LEVELS[level] >= LOG_LEVELS.IMPORTANT) {
        const failedLog = {
          module,
          action,
          level,
          message,
          metadata,
          timestamp: new Date().toISOString(),
          error: error instanceof Error ? error.message : String(error)
        }
        // 存储失败的日志以便后续重试
        const failedLogs = JSON.parse(localStorage.getItem('failedLogs') || '[]')
        failedLogs.push(failedLog)
        localStorage.setItem('failedLogs', JSON.stringify(failedLogs))
      }
    }
  }

  const logUserAction = async (
    module: LogModule,
    userId: number,
    action: string,
    message: string = '',
    metadata: Record<string, any> = {}
  ) => {
    await createLog(
      module,
      action,
      message,
      'INFO',
      { userId, ...metadata }
    )
  }

  const logError = async (
    module: LogModule,
    error: unknown,
    action: string,
    metadata: Record<string, any> = {}
  ) => {
    const errorMessage = error instanceof Error ? error.message : String(error)
    const errorStack = error instanceof Error ? error.stack : undefined
    await createLog(
      module,
      action,
      errorMessage,
      'ERROR',
      { 
        ...metadata,
        stack: errorStack
      }
    )
  }

  const logSecurity = async (
    module: LogModule,
    action: string,
    message: string,
    metadata: Record<string, any> = {}
  ) => {
    await createLog(
      module,
      action,
      message,
      'SECURITY',
      metadata
    )
  }

  return {
    createLog,
    logUserAction,
    logError,
    logSecurity
  }
}
