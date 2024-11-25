import { QuestionType, DifficultyLevel } from '~/types/question'

export function isValidQuestionType(type: string): type is QuestionType {
  return ['multiple_choice', 'true_false', 'essay'].includes(type)
}

export function isValidDifficulty(difficulty: string): difficulty is DifficultyLevel {
  return ['easy', 'medium', 'hard'].includes(difficulty)
}

export function validateQuestion(data: any): string[] {
  const errors: string[] = []

  if (!data.title?.trim()) {
    errors.push('标题不能为空')
  }

  if (!data.content?.trim()) {
    errors.push('题目内容不能为空')
  }

  if (!isValidQuestionType(data.type)) {
    errors.push('无效的题目类型')
  }

  if (!isValidDifficulty(data.difficulty)) {
    errors.push('无效的难度级别')
  }

  if (!data.categoryId || typeof data.categoryId !== 'number') {
    errors.push('请选择题目分类')
  }

  if (!data.answer?.trim()) {
    errors.push('答案不能为空')
  }

  if (data.type === 'multiple_choice' && !data.options?.trim()) {
    errors.push('选择题必须包含选项')
  }

  return errors
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePassword(password: string): string[] {
  const errors: string[] = []
  if (password.length < 8) {
    errors.push('密码长度至少为 8 位')
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('密码必须包含大写字母')
  }
  if (!/[a-z]/.test(password)) {
    errors.push('密码必须包含小写字母')
  }
  if (!/[0-9]/.test(password)) {
    errors.push('密码必须包含数字')
  }
  return errors
}
