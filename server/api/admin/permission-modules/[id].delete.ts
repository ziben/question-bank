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
      message: '无效的模块ID'
    })
  }

  // 检查模块是否存在
  const module = await prisma.permissionModule.findUnique({
    where: { id },
    include: {
      actions: true
    }
  })

  if (!module) {
    throw createError({
      statusCode: 404,
      message: '模块不存在'
    })
  }

  // 检查是否有关联的操作
  if (module.actions.length > 0) {
    throw createError({
      statusCode: 400,
      message: '该模块下还有操作，无法删除'
    })
  }

  // 删除模块
  await prisma.permissionModule.delete({
    where: { id }
  })

  return { success: true }
})
