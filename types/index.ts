import type { NuxtApp } from '#app'
import type { Role } from './permission'

// Base interfaces
interface BaseEntity {
  id: number
  createdAt: string
  updatedAt: string
}

interface BaseNamedEntity extends BaseEntity {
  name: string
  description: string | null
}

// User types
export interface User extends BaseEntity {
  username: string
  email: string
  password: string
  role: 'ADMIN' | 'USER'
  roles: Role[]
}

// Question related types
export type QuestionType = 'multiple_choice' | 'true_false' | 'essay'
export type DifficultyLevel = 1 | 2 | 3 | 4 | 5

export const QuestionTypeLabels: Record<QuestionType, string> = {
  multiple_choice: '选择题',
  true_false: '判断题',
  essay: '简答题',
}

export const DifficultyLevelLabels: Record<DifficultyLevel, string> = {
  1: '★',
  2: '★★',
  3: '★★★',
  4: '★★★★',
  5: '★★★★★',
}

export interface Category extends BaseNamedEntity {
  questionCount: number
}

export interface Subject extends BaseNamedEntity {}
export interface Grade extends BaseNamedEntity {}
export interface Source extends BaseNamedEntity {}

export interface Question extends BaseEntity {
  title: string
  content: string
  type: QuestionType
  difficulty: DifficultyLevel
  options?: string[]
  answer: string
  explanation?: string
  tags?: string[]
  categoryId: number
  subjectId: number
  gradeId: number
  sourceId: number
  category?: Category
  subject?: Subject
  grade?: Grade
  source?: Source
  createdBy: number
}

// Form types
export interface QuestionFormData {
  title: string
  content: string
  type: QuestionType
  difficulty: DifficultyLevel
  options: string[]
  answer: string
  explanation: string
  tags: string[]
  categoryId: number
  subjectId: number
  gradeId: number
  sourceId: number
}

// Pagination types
export interface PaginationMeta {
  page: number
  limit: number
  total: number
  totalPages: number
}

export interface PaginatedResponse<T> {
  items: T[]
  pagination: PaginationMeta
}

// Statistics types
export interface QuestionStats {
  totalQuestions: number
  byDifficulty: Record<DifficultyLevel, number>
  byType: Record<QuestionType, number>
  byCategory: Record<number, number>
}

// 使用 const 对象替代 enum
export const ApiStatus = {
  SUCCESS: 'success',
  ERROR: 'error',
  LOADING: 'loading',
} as const

export type ApiStatusType = (typeof ApiStatus)[keyof typeof ApiStatus]

// API 响应类型
export type ApiResponse<T> = {
  code: number
  data: T
  message: string
  status?: number
}

// 通用的分页请求参数
export type PaginationParams = {
  page: number
  limit: number
  sort?: string
  order?: 'asc' | 'desc'
}

// 通用的查询参数
export type QueryParams = {
  search?: string
  filter?: Record<string, any>
} & Partial<PaginationParams>
