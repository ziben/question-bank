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

  const body = await readBody(event)
  const { name, code, description } = body

  // 验证必填字段
  if (!name || !code) {
    throw createError({
      statusCode: 400,
      message: '名称和标识符不能为空'
    })
  }

  // 检查模块是否存在
  const existingModule = await prisma.permissionModule.findUnique({
    where: { id }
  })

  if (!existingModule) {
    throw createError({
      statusCode: 404,
      message: '模块不存在'
    })
  }

  // 检查标识符是否与其他模块重复
  const duplicateModule = await prisma.permissionModule.findFirst({
    where: {
      code,
      id: { not: id }
    }
  })

  if (duplicateModule) {
    throw createError({
      statusCode: 400,
      message: '模块标识已存在'
    })
  }

  // 更新模块
  const module = await prisma.permissionModule.update({
    where: { id },
    data: {
      name,
      code,
      description,
      updatedBy: { connect: { id: user.id } }
    }
  })

  return module
})
