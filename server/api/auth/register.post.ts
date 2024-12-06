import { PrismaClient } from '@prisma/client'
import { hashPassword, generateToken } from '~/server/utils/auth'

const prisma = new PrismaClient()

const DEFAULT_USER_ROLE_NAME = 'USER'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password, username } = body

  if (!email || !password || !username) {
    throw createError({
      statusCode: 400,
      message: '所有字段都是必填项'
    })
  }

  try {
    // 检查邮箱是否已存在
    const existingEmail = await prisma.user.findUnique({
      where: { email }
    })

    if (existingEmail) {
      throw createError({
        statusCode: 400,
        message: '该邮箱已被注册'
      })
    }

    // 检查用户名是否已存在
    const existingUsername = await prisma.user.findUnique({
      where: { username }
    })

    if (existingUsername) {
      throw createError({
        statusCode: 400,
        message: '该用户名已被使用'
      })
    }

    const hashedPassword = await hashPassword(password)

    // 获取默认用户角色
    const userRole = await prisma.role.findUnique({
      where: { name: DEFAULT_USER_ROLE_NAME }
    })

    if (!userRole) {
      throw createError({
        statusCode: 500,
        message: '系统错误：默认用户角色未配置'
      })
    }

    // 使用事务创建用户和角色关联
    const result = await prisma.$transaction(async (tx) => {
      // 创建用户
      const user = await tx.user.create({
        data: {
          email,
          username,
          password: hashedPassword,
        }
      })

      // 创建用户-角色关联
      await tx.userRole.create({
        data: {
          userId: user.id,
          roleId: userRole.id
        }
      })

      return user
    })

    // 获取用户的完整信息，包括角色
    const userWithRoles = await prisma.user.findUnique({
      where: { id: result.id },
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

    if (!userWithRoles) {
      throw createError({
        statusCode: 500,
        message: '创建用户失败'
      })
    }

    // 生成包含角色信息的token
    const token = generateToken(userWithRoles)

    return {
      token,
      user: {
        id: userWithRoles.id,
        email: userWithRoles.email,
        username: userWithRoles.username,
        roles: userWithRoles.roles.map(ur => ({
          id: ur.role.id,
          name: ur.role.name,
          permissions: ur.role.permissions.map(p => ({
            id: p.permission.id,
            name: p.permission.name
          }))
        }))
      }
    }
  } catch (error: any) {
    console.error('Registration error:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || '注册失败，请稍后重试'
    })
  }
})
