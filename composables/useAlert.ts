interface Alert {
  type: 'success' | 'error' | 'warning' | 'info'
  title?: string
  message: string
  duration?: number
}

export function useAlert() {
  const addAlert = inject<(alert: Alert) => number>('addAlert')
  const removeAlert = inject<(id: number) => void>('removeAlert')

  if (!addAlert || !removeAlert) {
    throw new Error('useAlert must be used within an AlertProvider')
  }

  const success = (message: string, title?: string, duration?: number) => {
    return addAlert({ type: 'success', message, title, duration })
  }

  const error = (message: string, title?: string, duration?: number) => {
    return addAlert({ type: 'error', message, title, duration })
  }

  const warning = (message: string, title?: string, duration?: number) => {
    return addAlert({ type: 'warning', message, title, duration })
  }

  const info = (message: string, title?: string, duration?: number) => {
    return addAlert({ type: 'info', message, title, duration })
  }

  return {
    success,
    error,
    warning,
    info,
    removeAlert
  }
}
