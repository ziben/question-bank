import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

// 用户角色更新验证模式
const updateUserRolesSchema = z.object({
  roleIds: z.array(z.number())
})

export default defineEventHandler(async (event) => {
  const userId = parseInt(event.context.params?.id ?? '')
  if (isNaN(userId)) {
    throw createError({
      statusCode: 400,
      message: '无效的用户ID'
    })
  }

  const method = event.method

  switch (method) {
    case 'GET':
      // 获取用户的角色列表
      try {
        const user = await prisma.user.findUnique({
          where: { id: userId },
          include: {
            roles: {
              include: {
                role: {
                  include: {
                    permissions: {
                      include: {
                        permission: true
                      }
                    }
                  }
                }
              }
            }
          }
        })

        if (!user) {
          throw createError({
            statusCode: 404,
            message: '用户不存在'
          })
        }

        // 转换数据结构
        return {
          roles: user.roles.map(ur => ({
            ...ur.role,
            permissions: ur.role.permissions.map(rp => rp.permission)
          }))
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error('获取用户角色失败:', error)
          throw createError({
            statusCode: 500,
            message: error.message || '获取用户角色失败'
          })
        } else {
          console.error('获取用户角色失败: 未知错误', error)
          throw createError({
            statusCode: 500,
            message: '获取用户角色失败'
          })
        }
      }

    case 'PUT':
      // 更新用户的角色
      try {
        const body = await readBody(event)
        const { roleIds } = updateUserRolesSchema.parse(body)

        // 检查用户是否存在
        const user = await prisma.user.findUnique({
          where: { id: userId }
        })

        if (!user) {
          throw createError({
            statusCode: 404,
            message: '用户不存在'
          })
        }

        // 验证所有角色是否存在
        if (roleIds.length > 0) {
          const roles = await prisma.role.findMany({
            where: {
              id: {
                in: roleIds
              }
            }
          })

          if (roles.length !== roleIds.length) {
            throw createError({
              statusCode: 400,
              message: '部分角色不存在'
            })
          }
        }

        // 更新用户角色关联
        await prisma.$transaction(async (prisma) => {
          // 1. 删除现有角色关联
          await prisma.userRole.deleteMany({
            where: { userId }
          })

          // 2. 创建新的角色关联
          if (roleIds.length > 0) {
            await prisma.userRole.createMany({
              data: roleIds.map(roleId => ({
                userId,
                roleId
              }))
            })
          }
        })

        // 获取更新后的用户角色信息
        const updatedUser = await prisma.user.findUnique({
          where: { id: userId },
          include: {
            roles: {
              include: {
                role: {
                  include: {
                    permissions: {
                      include: {
                        permission: true
                      }
                    }
                  }
                }
              }
            }
          }
        })

        return {
          roles: updatedUser?.roles.map(ur => ({
            ...ur.role,
            permissions: ur.role.permissions.map(rp => rp.permission)
          }))
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error('更新用户角色失败:', error)
          throw createError({
            statusCode: 500,
            message: error.message || '更新用户角色失败'
          })
        } else {
          console.error('更新用户角色失败: 未知错误', error)
          throw createError({
            statusCode: 500,
            message: '更新用户角色失败'
          })
        }
      }

    default:
      throw createError({
        statusCode: 405,
        message: '不支持的请求方法'
      })
  }
})
