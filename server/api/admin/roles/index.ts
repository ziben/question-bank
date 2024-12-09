import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getQuery, readBody, createError } from 'h3'
import { z } from 'zod'
import { getUserFromEvent } from '~/server/utils/auth'

const prisma = new PrismaClient()

// 角色创建验证模式
const createRoleSchema = z.object({
  name: z.string().min(1).max(50),
  description: z.string().max(200).optional(),
  permissionIds: z.array(z.number()).optional()
})

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

  switch (method) {
    case 'GET':
      // 获取角色列表
      try {
        const query = getQuery(event)
        const validatedQuery = listQuerySchema.parse(query)
        const { page, pageSize, search, sortBy, sortOrder } = validatedQuery

        // 构建查询条件
        const where = search ? {
          OR: [
            { name: { contains: search } },
            { description: { contains: search } }
          ]
        } : {}

        // 执行查询
        const [total, roles] = await Promise.all([
          prisma.role.count({ where }),
          prisma.role.findMany({
            where,
            skip: (page - 1) * pageSize,
            take: pageSize,
            include: {
              permissions: {
                include: {
                  permission: true
                }
              }
            },
            orderBy: { [sortBy]: sortOrder }
          })
        ])

        return {
          items: roles.map(role => ({
            ...role,
            permissions: role.permissions.map(rp => rp.permission)
          })),
          total,
          page,
          pageSize,
          totalPages: Math.ceil(total / pageSize)
        }
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
        const user = await getUserFromEvent(event)
        const validatedData = createRoleSchema.parse(body)
        const { permissionIds, ...roleData } = validatedData

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
        if (permissionIds && permissionIds.length > 0) {
          const permissions = await prisma.permission.findMany({
            where: {
              id: {
                in: permissionIds
              }
            }
          })

          if (permissions.length !== permissionIds.length) {
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
            permissions: permissionIds ? {
              create: permissionIds.map(permissionId => ({
                permission: {
                  connect: { id: permissionId }
                }
              }))
            } : undefined
          },
          include: {
            permissions: {
              include: {
                permission: true
              }
            }
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
