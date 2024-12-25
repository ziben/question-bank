import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getQuery, readBody, createError } from 'h3'
import { z } from 'zod'
import { RoleCreateOrConnectWithoutUsersInputSchema, RoleCreateWithoutUsersInputSchema, RoleUncheckedCreateWithoutUsersInputSchema } from '~/prisma/generated/zod'
import { getPaginationParams, paginatedSuccess } from '~/server/utils/response'

const prisma = new PrismaClient()

// 列表查询参数验证模式
const listQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(10),
  search: z.string().optional(),
  sortBy: z.enum(['name', 'createdAt']).default('name'),
  sortOrder: z.enum(['asc', 'desc']).default('asc')
})

export default defineEventHandler(async (event) => {
  const method = event.method
  const session = await useAuthSession(event)
  const user = session.data

  switch (method) {
    case 'GET':
      // 获取角色列表
      try {
        const query = getQuery(event)
        const validatedQuery = listQuerySchema.parse(query)
        const { search, sortBy, sortOrder } = validatedQuery
        const { skip, take, page, pageSize } = getPaginationParams(event)
        // 构建查询条件
        const where = search ? {
          OR: [
            { name: { contains: search } },
            { description: { contains: search } }
          ]
        } : {}

        // 执行查询
        const [total, items] = await Promise.all([
          prisma.role.count({ where }),
          prisma.role.findMany({
            where,
            skip,
            take,
            orderBy: { [sortBy]: sortOrder }
          })
        ])
        return paginatedSuccess(items, total, page, pageSize)        
      } catch (error) {
        console.error('获取角色列表失败:', error)
        throw createError({
          statusCode: 400,
          message: error instanceof z.ZodError
            ? '无效的查询参数'
            : '获取角色列表失败'
        })
      }

    case 'POST':
      // 创建新角色
      try {
        const body = await readBody(event)
        const validatedData = RoleCreateWithoutUsersInputSchema.parse(body)
        const { permissions, ...roleData } = validatedData

        const permissionCodes = permissions
        // 检查角色名是否已存在
        const existingRole = await prisma.role.findUnique({
          where: { name: roleData.name }
        })

        if (existingRole) {
          throw createError({
            statusCode: 400,
            message: '角色名已存在'
          })
        }

        // 如果提供了权限ID，验证它们是否存在
        if (permissionCodes && permissionCodes.length > 0) {
          const permissions = await prisma.permission.findMany({
            where: {
              code: {
                in: permissionCodes
              }
            }
          })

          if (permissions.length !== permissionCodes.length) {
            throw createError({
              statusCode: 400,
              message: '部分权限不存在'
            })
          }
        }

        // 创建角色和权限关联
        const role = await prisma.role.create({
          data: {
            ...roleData,
            createdBy: {
              connect: { id: user?.id },
            },
            updatedBy: {
              connect: { id: user?.id },
            },
            permissions: permissionCodes
          }
        })

        return role
      } catch (error) {
        console.error('创建角色失败:', error)
        throw createError({
          statusCode: 400,
          message: error instanceof z.ZodError
            ? '无效的角色数据'
            : '创建角色失败'
        })
      }

    default:
      throw createError({
        statusCode: 405,
        message: '不支持的请求方法'
      })
  }
})
