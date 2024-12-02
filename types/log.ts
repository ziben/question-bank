export type LogLevel = 'info' | 'warning' | 'error'

export type LogType = 
  | 'user.create'
  | 'user.update'
  | 'user.delete'
  | 'user.export'
  | 'subject.create'
  | 'subject.update'
  | 'subject.delete'
  | 'question.create'
  | 'question.update'
  | 'question.delete'
  | 'login'
  | 'logout'

export interface Log {
  id: number
  type: LogType
  level: LogLevel
  userId: number
  userName: string
  action: string
  details: string
  ip: string
  userAgent: string
  createdAt: string
}

export interface LogQueryParams {
  page?: number
  limit?: number
  type?: LogType
  level?: LogLevel
  userId?: number
  startDate?: string
  endDate?: string
  search?: string
}
