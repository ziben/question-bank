import { PrismaClient } from '@prisma/client'
import { getUserFromEvent } from '~/server/utils/auth'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const user = await getUserFromEvent(event)
  
  if (!user) {
    throw createError({
      statusCode: 401,
      message: '未登录或登录已过期'
    })
  }

  return {
    id: user.id,
    username: user.username,
    email: user.email,
    roles: user.roleNames,
    permissions: user.permissionNames
  }
})
