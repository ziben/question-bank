import { PrismaClient } from '@prisma/client'
import { verifyPassword, generateToken } from '~/server/utils/auth'

const prisma = new PrismaClient()

// TODO：引入参数校验

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body

  if (!email || !password) {
    throw createError({
      statusCode: 403,
      message: '邮箱和密码是必填项',
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
                  permission: true,
                },
              },
            },
          },
        },
      },
    },
  })

  if (!user) {
    throw createError({
      statusCode: 401,
      message: '用户不存在',
    })
  }

  const isValidPassword = await verifyPassword(password, user.password)
  if (!isValidPassword) {
    throw createError({
      statusCode: 403,
      message: '密码错误',
    })
  }

  const userTokens = generateToken(user)

  return userTokens
})


