import { H3Event } from 'h3'
import { type PaginatedResponse, type PaginationMeta } from '~/types'
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

/**
 * 创建分页元数据
 */
export function createPaginationMeta(
  total: number,
  page: number = 1,
  pageSize: number = 10
): PaginationMeta {
  const totalPages = Math.ceil(total / pageSize)

  return {
    currentPage: page,
    pageSize,
    total,
    totalPages,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1
  }
}

/**
 * 创建分页响应
 */
export function paginatedSuccess<T>(
  items: T[],
  total: number,
  page: number = 1,
  pageSize: number = 10,
  message: string = '获取成功'
): ApiResponse<PaginatedResponse<T>> {
  return success({
    items,
    meta: createPaginationMeta(total, page, pageSize)
  }, message)
}

/**
 * 获取分页参数
 */
export function getPaginationParams(event: H3Event) {
  const query = getQuery(event)
  const page = Number(query.page) || 1
  const pageSize = Number(query.pageSize) || 10

  return {
    page,
    pageSize,
    skip: (page - 1) * pageSize,
    take: pageSize
  }
}
