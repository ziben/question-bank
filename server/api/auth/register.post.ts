import { PrismaClient } from '@prisma/client'
import { hashPassword, generateToken } from '~/server/utils/auth'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password, username } = body

  if (!email || !password || !username) {
    throw createError({
      statusCode: 400,
      message: '所有字段都是必填项'
    })
  }

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

  const user = await prisma.user.create({
    data: {
      email,
      username,
      password: hashedPassword,
      role: 'USER'
    }
  })

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
