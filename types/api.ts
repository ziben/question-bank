import type { Question, Category, Subject, Grade, Source, User } from './index'
import type { ApiResponse } from './index'

// API 端点类型
export type ApiEndpoints = {
  questions: Question
  categories: Category
  subjects: Subject
  grades: Grade
  sources: Source
  users: User
}

// API 方法类型
export type ApiMethods = {
  get: 'GET'
  post: 'POST'
  put: 'PUT'
  delete: 'DELETE'
  patch: 'PATCH'
}

// API 错误类型
export type ApiError = {
  code: number
  message: string
  details?: Record<string, string[]>
}

// API 请求方法类型
export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

// API 请求配置类型
export type ApiRequestConfig = {
  method: ApiMethod
  headers?: Record<string, string>
  params?: Record<string, any>
  data?: any
  timeout?: number
  cache?: CacheConfig
  hooks?: RequestHook
}

// API 请求钩子类型
export type RequestHook = {
  onRequest?: (config: ApiRequestConfig) => Promise<ApiRequestConfig>
  onResponse?: <T>(response: ApiResponse<T>) => Promise<ApiResponse<T>>
  onError?: (error: ApiError) => Promise<never>
}

// API 缓存配置
export type CacheConfig = {
  enabled: boolean
  duration?: number
  key?: string
  strategy?: 'cache-first' | 'network-first'
}
