import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getQuery, readBody, createError } from 'h3'
import { z } from 'zod'

const prisma = new PrismaClient()

// 权限创建验证模式
const createPermissionSchema = z.object({
  name: z.string().min(1).max(50),
  description: z.string().max(200).optional(),
  group: z.string().min(1).max(50)
})

// 列表查询参数验证模式
const listQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(10),
  search: z.string().optional(),
  group: z.string().optional(),
  sortBy: z.enum(['code', 'groupCode', 'actionCode', 'createdAt']).default('code'),
  sortOrder: z.enum(['asc', 'desc']).default('asc')
})

export default defineEventHandler(async (event) => {
  const method = event.method

  switch (method) {
    case 'GET':
      // 获取权限列表
      try {
        const query = getQuery(event)
        const validatedQuery = listQuerySchema.parse(query)
        const { page, pageSize, search, group, sortBy, sortOrder } = validatedQuery

        // 构建查询条件
        const where = {
          AND: [
            search ? {
              OR: [
                { code: { contains: search } },
                { description: { contains: search } }
              ]
            } : {},
            group ? { group } : {}
          ]
        }

        // 执行查询
        const [total, permissions] = await Promise.all([
          prisma.permission.count({ where }),
          prisma.permission.findMany({
            where,
            skip: (page - 1) * pageSize,
            take: pageSize,
            orderBy: { [sortBy]: sortOrder }
          })
        ])

        return {
          items: permissions,
          total,
          page,
          pageSize,
          totalPages: Math.ceil(total / pageSize)
        }
      } catch (error) {
        console.error('获取权限列表失败:', error)
        throw createError({
          statusCode: 400,
          message: error instanceof z.ZodError
            ? '无效的查询参数'
            : '获取权限列表失败'
        })
      }

    default:
      throw createError({
        statusCode: 405,
        message: '不支持的请求方法'
      })
  }
})
