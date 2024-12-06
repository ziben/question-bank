import { H3Event } from 'h3'

export interface ApiResponse<T = any> {
  code: number
  message: string
  data?: T
}

export function success<T>(data?: T, message: string = '操作成功'): ApiResponse<T> {
  return {
    code: 0,
    message,
    data
  }
}

export function error(message: string, code: number = 1): ApiResponse {
  return {
    code,
    message
  }
}

export function handleError(e: any, event: H3Event) {
  console.error('API Error:', e)
  
  if (e.code === 'P2002') {
    return error('数据已存在', 1001)
  }
  
  if (e.code === 'P2025') {
    return error('数据不存在', 1002)
  }
  
  if (e.code === 'P2003') {
    return error('数据关联错误', 1003)
  }
  
  return error(e.message || '服务器内部错误', 500)
}
