import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

// 角色更新验证模式
const updateRoleSchema = z.object({
  name: z.string().min(1).max(50).optional(),
  description: z.string().max(200).optional(),
  permissionIds: z.array(z.number()).optional()
})

export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id)
  if (isNaN(id)) {
    throw createError({
      statusCode: 400,
      message: '无效的角色ID'
    })
  }

  const method = event.method

  switch (method) {
    case 'GET':
      // 获取角色详情
      try {
        const role = await prisma.role.findUnique({
          where: { id },
          include: {
            permissions: {
              include: {
                permission: true
              }
            },
            users: {
              include: {
                user: true
              }
            }
          }
        })

        if (!role) {
          throw createError({
            statusCode: 404,
            message: '角色不存在'
          })
        }

        return {
          ...role,
          permissions: role.permissions.map(rp => rp.permission),
          users: role.users.map(ur => ur.user)
        }
      } catch (error) {
        console.error('获取角色详情失败:', error)
        throw createError({
          statusCode: error.statusCode || 500,
          message: error.message || '获取角色详情失败'
        })
      }

    case 'PUT':
      // 更新角色
      try {
        const body = await readBody(event)
        const validatedData = updateRoleSchema.parse(body)
        const { permissionIds, ...roleData } = validatedData

        // 检查角色是否存在
        const existingRole = await prisma.role.findUnique({
          where: { id }
        })

        if (!existingRole) {
          throw createError({
            statusCode: 404,
            message: '角色不存在'
          })
        }

        // 如果要更新角色名，检查新名称是否已被使用
        if (roleData.name && roleData.name !== existingRole.name) {
          const nameExists = await prisma.role.findUnique({
            where: { name: roleData.name }
          })

          if (nameExists) {
            throw createError({
              statusCode: 400,
              message: '角色名已存在'
            })
          }
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

        // 更新角色
        const role = await prisma.$transaction(async (prisma) => {
          // 1. 更新角色基本信息
          const updatedRole = await prisma.role.update({
            where: { id },
            data: roleData
          })

          // 2. 如果提供了权限ID，更新权限关联
          if (permissionIds !== undefined) {
            // 删除现有权限关联
            await prisma.rolePermission.deleteMany({
              where: { roleId: id }
            })

            // 创建新的权限关联
            if (permissionIds.length > 0) {
              await prisma.rolePermission.createMany({
                data: permissionIds.map(permissionId => ({
                  roleId: id,
                  permissionId
                }))
              })
            }
          }

          // 3. 返回更新后的角色（包含关联数据）
          return prisma.role.findUnique({
            where: { id },
            include: {
              permissions: {
                include: {
                  permission: true
                }
              },
              users: {
                include: {
                  user: true
                }
              }
            }
          })
        })

        return {
          ...role,
          permissions: role.permissions.map(rp => rp.permission),
          users: role.users.map(ur => ur.user)
        }
      } catch (error) {
        console.error('更新角色失败:', error)
        throw createError({
          statusCode: error instanceof z.ZodError ? 400 : 500,
          message: error instanceof z.ZodError 
            ? '无效的角色数据' 
            : error.message || '更新角色失败'
        })
      }

    case 'DELETE':
      // 删除角色
      try {
        // 检查角色是否存在
        const role = await prisma.role.findUnique({
          where: { id },
          include: {
            users: true
          }
        })

        if (!role) {
          throw createError({
            statusCode: 404,
            message: '角色不存在'
          })
        }

        // 检查角色是否被用户使用
        if (role.users.length > 0) {
          throw createError({
            statusCode: 400,
            message: '角色正在被用户使用，无法删除'
          })
        }

        // 删除角色（包括相关的权限关联）
        await prisma.$transaction([
          // 1. 删除角色-权限关联
          prisma.rolePermission.deleteMany({
            where: { roleId: id }
          }),
          // 2. 删除角色
          prisma.role.delete({
            where: { id }
          })
        ])

        return {
          message: '角色删除成功'
        }
      } catch (error) {
        console.error('删除角色失败:', error)
        throw createError({
          statusCode: error.statusCode || 500,
          message: error.message || '删除角色失败'
        })
      }

    default:
      throw createError({
        statusCode: 405,
        message: '不支持的请求方法'
      })
  }
})
