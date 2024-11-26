import { PrismaClient } from '@prisma/client'
import { hashPassword } from '~/server/utils/auth'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { username, email, password, role } = body

  if (!username || !email || !password) {
    throw createError({
      statusCode: 400,
      message: '用户名、邮箱和密码是必填项'
    })
  }

  // 检查用户名是否已存在
  const existingUsername = await prisma.user.findUnique({
    where: { username }
  })

  if (existingUsername) {
    throw createError({
      statusCode: 400,
      message: '用户名已被使用'
    })
  }

  // 检查邮箱是否已存在
  const existingEmail = await prisma.user.findUnique({
    where: { email }
  })

  if (existingEmail) {
    throw createError({
      statusCode: 400,
      message: '邮箱已被注册'
    })
  }

  const hashedPassword = await hashPassword(password)

  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
      role: role || 'USER'
    },
    select: {
      id: true,
      username: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true
    }
  })

  return user
})
