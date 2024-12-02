import type { LogType, LogLevel } from '~/types/log'

export function useLogger() {
  const createLog = async (type: LogType, action: string, details: string = '', level: LogLevel = 'info') => {
    try {
      await $fetch('/api/logs', {
        method: 'POST',
        body: {
          type,
          level,
          action,
          details
        }
      })
    } catch (error) {
      console.error('Failed to create log:', error)
    }
  }

  const logUserAction = async (type: LogType, userId: number, action: string, details: string = '') => {
    await createLog(type, `User ${userId}: ${action}`, details)
  }

  const logError = async (type: LogType, error: unknown, action: string) => {
    const errorMessage = error instanceof Error ? error.message : String(error)
    await createLog(type, action, errorMessage, 'error')
  }

  return {
    createLog,
    logUserAction,
    logError
  }
}
