import type { Component } from 'vue'

// 通用组件 Props 类型
export type BaseProps = {
  class?: string
  style?: string | Record<string, string>
}

// 按钮组件类型
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  icon?: Component | string
  onClick?: EventHandler<MouseEvent>
}

// 表单组件类型
export type FormValidationRule = {
  required?: boolean
  min?: number
  max?: number
  pattern?: RegExp
  message?: string
  validator?: (value: any) => boolean | Promise<boolean>
}

export type FormFieldProps = {
  name: string
  label?: string
  rules?: FormValidationRule[]
  error?: string
}

// 输入框组件类型
export type InputType = 'text' | 'password' | 'email' | 'number' | 'tel'

export interface InputProps extends BaseProps {
  type?: InputType
  value?: string | number
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  error?: string
}

// 表格组件类型
export type TableColumn<T> = {
  key: keyof T | string
  title: string
  width?: number | string
  align?: 'left' | 'center' | 'right'
  sortable?: boolean
  render?: (row: T) => Component | string
}

export interface TableProps<T> extends BaseProps {
  data: T[]
  columns: TableColumn<T>[]
  loading?: boolean
  bordered?: boolean
  striped?: boolean
}

// 事件处理器类型
export type EventHandler<T = Event> = (event: T) => void
