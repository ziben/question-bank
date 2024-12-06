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
  sortBy: z.enum(['name', 'group', 'createdAt']).default('name'),
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
                { name: { contains: search } },
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

    case 'POST':
      // 创建新权限
      try {
        const body = await readBody(event)
        const validatedData = createPermissionSchema.parse(body)

        // 检查权限名是否已存在
        const existingPermission = await prisma.permission.findUnique({
          where: { name: validatedData.name }
        })

        if (existingPermission) {
          throw createError({
            statusCode: 400,
            message: '权限名已存在'
          })
        }

        // 创建权限
        const permission = await prisma.permission.create({
          data: validatedData
        })

        return permission
      } catch (error) {
        console.error('创建权限失败:', error)
        throw createError({
          statusCode: 400,
          message: error instanceof z.ZodError 
            ? '无效的权限数据' 
            : '创建权限失败'
        })
      }

    default:
      throw createError({
        statusCode: 405,
        message: '不支持的请求方法'
      })
  }
})
