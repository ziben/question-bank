import { PrismaClient } from '@prisma/client'
import { verifyPassword, generateToken } from '~/server/utils/auth'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      message: '邮箱和密码是必填项'
    })
  }

  const user = await prisma.user.findUnique({
    where: { email },
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
      statusCode: 401,
      message: '用户不存在'
    })
  }

  const isValidPassword = await verifyPassword(password, user.password)
  if (!isValidPassword) {
    throw createError({
      statusCode: 401,
      message: '密码错误'
    })
  }

  const token = generateToken(user)

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      username: user.username,
      roles: user.roles.map(ur => ({
        ...ur.role,
        permissions: ur.role.permissions.map(rp => rp.permission)
      }))
    }
  }
})
