export interface Category {
  id: number
  name: string
  description: string | null
}

export interface Question {
  id: number
  title: string
  type: QuestionType
  difficulty: DifficultyLevel
  category: Category
  categoryId: number
  createdAt: string
  content: string
  options: string | null
  answer: string
  explanation: string | null
  tags: string | null
}

export interface PaginatedResponse<T> {
  questions: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export type QuestionType = 'multiple_choice' | 'true_false' | 'essay'
export type DifficultyLevel = 'easy' | 'medium' | 'hard'

export const QuestionTypeLabels: Record<QuestionType, string> = {
  'multiple_choice': '选择题',
  'true_false': '判断题',
  'essay': '简答题'
}

export const DifficultyLevelLabels: Record<DifficultyLevel, string> = {
  'easy': '简单',
  'medium': '中等',
  'hard': '困难'
}
