import { keepPreviousData } from "@tanstack/vue-query"

// 查询排序方向
export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc'
} as const

export const queryOptions = {
  placeholderData: keepPreviousData
}

// 查询选项配置
export const QUERY_OPTIONS = {
  // 默认分页大小选项
  PAGE_SIZES: [10, 20, 50, 100],
  
  // 默认分页配置
  PAGINATION: {
    DEFAULT_PAGE: 1,
    DEFAULT_PAGE_SIZE: 10
  },
  
  // 排序配置
  SORT: {
    // 默认排序字段
    CREATED_AT: 'createdAt',
    UPDATED_AT: 'updatedAt',
    ID: 'id',
    NAME: 'name',
    ORDER: 'order'
  },

  // 过滤器操作符
  OPERATORS: {
    EQUALS: 'equals',
    NOT_EQUALS: 'not',
    CONTAINS: 'contains',
    STARTS_WITH: 'startsWith',
    ENDS_WITH: 'endsWith',
    GT: 'gt',
    GTE: 'gte',
    LT: 'lt',
    LTE: 'lte',
    IN: 'in',
    NOT_IN: 'notIn',
    IS_NULL: 'isNull',
    IS_NOT_NULL: 'isNotNull'
  }
} as const

// 查询参数类型
export type QueryOptions = {
  skip?: number
  take?: number
  orderBy?: Record<string, typeof SORT_ORDER[keyof typeof SORT_ORDER]>
  where?: Record<string, any>
  include?: Record<string, boolean>
  select?: Record<string, boolean>
}

// 分页参数类型
export type PaginationOptions = {
  page: number
  pageSize: number
  total?: number
}

// 排序参数类型
export type SortOptions = {
  field: string
  order: typeof SORT_ORDER[keyof typeof SORT_ORDER]
}

// 过滤条件类型
export type FilterOptions = {
  field: string
  operator: typeof QUERY_OPTIONS.OPERATORS[keyof typeof QUERY_OPTIONS.OPERATORS]
  value: any
}
