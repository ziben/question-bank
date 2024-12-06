export interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  message?: string
}

export interface ValidationError {
  field: string
  message: string
}

export function validateField(
  value: any,
  rules: ValidationRule,
  fieldName: string
): ValidationError | null {
  if (rules.required && !value) {
    return {
      field: fieldName,
      message: rules.message || `${fieldName}不能为空`
    }
  }

  if (typeof value === 'string') {
    if (rules.minLength && value.length < rules.minLength) {
      return {
        field: fieldName,
        message: rules.message || `${fieldName}长度不能小于${rules.minLength}个字符`
      }
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return {
        field: fieldName,
        message: rules.message || `${fieldName}长度不能大于${rules.maxLength}个字符`
      }
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return {
        field: fieldName,
        message: rules.message || `${fieldName}格式不正确`
      }
    }
  }

  return null
}

export function validateObject(
  obj: Record<string, any>,
  rules: Record<string, ValidationRule>
): ValidationError[] {
  const errors: ValidationError[] = []

  for (const [field, rule] of Object.entries(rules)) {
    const error = validateField(obj[field], rule, field)
    if (error) {
      errors.push(error)
    }
  }

  return errors
}

// 常用的验证规则
export const commonRules = {
  username: {
    required: true,
    minLength: 3,
    maxLength: 20,
    pattern: /^[a-zA-Z0-9_]+$/,
    message: '用户名只能包含字母、数字和下划线，长度在3-20之间'
  },
  password: {
    required: true,
    minLength: 6,
    maxLength: 20,
    message: '密码长度必须在6-20之间'
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: '请输入有效的邮箱地址'
  },
  phone: {
    pattern: /^1[3-9]\d{9}$/,
    message: '请输入有效的手机号码'
  }
}
