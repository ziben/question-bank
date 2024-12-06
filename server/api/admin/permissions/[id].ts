import { PrismaClient } from '@prisma/client'
import { defineEventHandler } from 'h3'
import { z } from 'zod'

const prisma = new PrismaClient()

// 权限更新验证模式
const updatePermissionSchema = z.object({
  name: z.string().min(1).max(50).optional(),
  description: z.string().max(200).optional(),
  group: z.string().min(1).max(50).optional()
})

export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id)
  if (isNaN(id)) {
    throw createError({
      statusCode: 400,
      message: '无效的权限ID'
    })
  }

  const method = event.method

  switch (method) {
    case 'GET':
      // 获取权限详情
      try {
        const permission = await prisma.permission.findUnique({
          where: { id },
          include: {
            rolePermissions: {
              include: {
                role: true
              }
            }
          }
        })

        if (!permission) {
          throw createError({
            statusCode: 404,
            message: '权限不存在'
          })
        }

        // 转换数据结构
        return {
          ...permission,
          roles: permission.rolePermissions.map(rp => rp.role)
        }
      } catch (error) {
        console.error('获取权限详情失败:', error)
        throw createError({
          statusCode: error.statusCode || 500,
          message: error.message || '获取权限详情失败'
        })
      }

    case 'PUT':
      // 更新权限
      try {
        const body = await readBody(event)
        const validatedData = updatePermissionSchema.parse(body)

        // 检查权限是否存在
        const existingPermission = await prisma.permission.findUnique({
          where: { id }
        })

        if (!existingPermission) {
          throw createError({
            statusCode: 404,
            message: '权限不存在'
          })
        }

        // 如果要更新权限名，检查新名称是否已被使用
        if (validatedData.name && validatedData.name !== existingPermission.name) {
          const nameExists = await prisma.permission.findUnique({
            where: { name: validatedData.name }
          })

          if (nameExists) {
            throw createError({
              statusCode: 400,
              message: '权限名已存在'
            })
          }
        }

        // 更新权限
        const permission = await prisma.permission.update({
          where: { id },
          data: validatedData,
          include: {
            rolePermissions: {
              include: {
                role: true
              }
            }
          }
        })

        return {
          ...permission,
          roles: permission.rolePermissions.map(rp => rp.role)
        }
      } catch (error) {
        console.error('更新权限失败:', error)
        throw createError({
          statusCode: error instanceof z.ZodError ? 400 : 500,
          message: error instanceof z.ZodError 
            ? '无效的权限数据' 
            : error.message || '更新权限失败'
        })
      }

    case 'DELETE':
      // 删除权限
      try {
        // 检查权限是否存在
        const permission = await prisma.permission.findUnique({
          where: { id },
          include: {
            rolePermissions: true
          }
        })

        if (!permission) {
          throw createError({
            statusCode: 404,
            message: '权限不存在'
          })
        }

        // 检查权限是否被使用
        if (permission.rolePermissions.length > 0) {
          throw createError({
            statusCode: 400,
            message: '权限正在被使用，无法删除'
          })
        }

        // 删除权限
        await prisma.permission.delete({
          where: { id }
        })

        return {
          message: '权限删除成功'
        }
      } catch (error) {
        console.error('删除权限失败:', error)
        throw createError({
          statusCode: error.statusCode || 500,
          message: error.message || '删除权限失败'
        })
      }

    default:
      throw createError({
        statusCode: 405,
        message: '不支持的请求方法'
      })
  }
})
