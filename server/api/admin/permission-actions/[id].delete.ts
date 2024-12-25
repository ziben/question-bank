import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const session = await useAuthSession(event)
  const user = session.data
  if (!user) {
    throw createError({
      statusCode: 401,
      message: '未登录'
    })
  }

  const id = Number(event.context.params?.id)
  if (!id) {
    throw createError({
      statusCode: 400,
      message: '无效的操作ID'
    })
  }

  // 检查操作是否存在
  const action = await prisma.permissionAction.findUnique({
    where: { id }
  })

  if (!action) {
    throw createError({
      statusCode: 404,
      message: '操作不存在'
    })
  }

  // 删除操作
  await prisma.permissionAction.delete({
    where: { id }
  })

  return { success: true }
})
