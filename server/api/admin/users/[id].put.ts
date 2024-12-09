import { PrismaClient } from '@prisma/client'
import { hashPassword } from '~/server/utils/auth'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id ? parseInt(event.context.params.id, 10) : null
  const body = await readBody(event)
  const { username, email, password, role } = body

  if (typeof id !== 'number' || isNaN(id)) {
    throw createError({
      statusCode: 400,
      message: 'Invalid ID'
    })
  }

  if (!username || !email) {
    throw createError({
      statusCode: 400,
      message: '用户名和邮箱是必填项'
    })
  }

  // 检查用户名是否已被其他用户使用
  const existingUsername = await prisma.user.findFirst({
    where: {
      username,
      NOT: {
        id: id
      }
    }
  })

  if (existingUsername) {
    throw createError({
      statusCode: 400,
      message: '用户名已被使用'
    })
  }

  // 检查邮箱是否已被其他用户使用
  const existingEmail = await prisma.user.findFirst({
    where: {
      email,
      NOT: {
        id: id
      }
    }
  })

  if (existingEmail) {
    throw createError({
      statusCode: 400,
      message: '邮箱已被注册'
    })
  }

  const updateData: any = {
    username,
    email,
    role,
    updatedBy: { connect: { id: event.context.user.id } }
  }

  // 如果提供了新密码，则更新密码
  if (password) {
    updateData.password = await hashPassword(password)
  }

  const user = await prisma.user.update({
    where: { id: id },
    data: updateData,
    select: {
      id: true,
      username: true,
      email: true,
      createdAt: true,
      updatedAt: true
    }
  })

  return user
})
