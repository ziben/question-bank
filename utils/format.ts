import type { QuestionType, DifficultyLevel } from '~/types/question'
import { QuestionTypeLabels, DifficultyLevelLabels } from '~/types/question'

export function formatType(type: QuestionType): string {
  return QuestionTypeLabels[type] || type
}

export function formatDifficulty(difficulty: DifficultyLevel): string {
  return DifficultyLevelLabels[difficulty] || difficulty
}

export function formatDate(dateStr: string, options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
}): string {
  return new Date(dateStr).toLocaleDateString('zh-CN', options)
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`
}

export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length) + '...'
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // 替换空格为 -
    .replace(/[^\w\-]+/g, '') // 移除非单词字符
    .replace(/\-\-+/g, '-')   // 替换多个 - 为单个 -
}
