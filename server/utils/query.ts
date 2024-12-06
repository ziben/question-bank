import { H3Event } from 'h3'

export interface PaginationQuery {
  page?: number
  pageSize?: number
  search?: string
}

export function getPaginationQuery(event: H3Event): PaginationQuery {
  const query = getQuery(event)
  return {
    page: Number(query.page) || 1,
    pageSize: Number(query.pageSize) || 10,
    search: query.search as string || ''
  }
}

export function getPaginationSkipTake(query: PaginationQuery) {
  const page = query.page || 1
  const pageSize = query.pageSize || 10
  return {
    skip: (page - 1) * pageSize,
    take: pageSize
  }
}

export function buildSearchQuery(searchFields: string[], searchValue?: string) {
  if (!searchValue) {
    return {}
  }

  return {
    OR: searchFields.map(field => ({
      [field]: {
        contains: searchValue
      }
    }))
  }
}
