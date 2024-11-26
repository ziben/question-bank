import type { NuxtApp } from "#app"

export interface User {
  id: number
  username: string
  email: string
  password: string
  createdAt: string
  updatedAt: string
}

export interface Category {
  id: number
  name: string
  description: string
  questionCount: number
  createdAt: string
  updatedAt: string
}

export interface Question {
  id: number
  title: string
  content: string
  answer: string
  type: 'single' | 'multiple' | 'text' | 'essay'
  difficulty: 'easy' | 'medium' | 'hard'
  categoryId: number
  category?: Category
  createdBy: number
  createdAt: string
  updatedAt: string
  tags?: string[]
}

export interface QuestionStats {
  totalQuestions: number
  byDifficulty: {
    easy: number
    medium: number
    hard: number
  }
  byType: {
    single: number
    multiple: number
    text: number
    essay: number
  }
  byCategory: {
    [key: number]: number
  }
}