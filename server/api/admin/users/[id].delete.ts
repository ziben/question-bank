import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params?.id ?? '')
  if (isNaN(id)) {
    throw createError({
      statusCode: 400,
      message: 'Invalid ID'
    })
  }

  // 检查是否是最后一个管理员
  const user = await prisma.user.findUnique({
    where: { id }
  })

  if (user?.role === 'ADMIN') {
    const adminCount = await prisma.user.count({
      where: { role: 'ADMIN' }
    })

    if (adminCount <= 1) {
      throw createError({
        statusCode: 400,
        message: '无法删除最后一个管理员账户'
      })
    }
  }

  await prisma.user.delete({
    where: { id }
  })

  return {
    message: '用户已成功删除'
  }
})
