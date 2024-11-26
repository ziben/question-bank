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
    where: { email }
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

  const token = generateToken(user.id, user.role)

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role
    }
  }
})
