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

  const body = await readBody(event)
  const { name, code, description } = body

  // 验证必填字段
  if (!name || !code) {
    throw createError({
      statusCode: 400,
      message: '名称和标识符不能为空'
    })
  }

  // 检查模块标识是否已存在
  const existingModule = await prisma.permissionModule.findFirst({
    where: { code }
  })

  if (existingModule) {
    throw createError({
      statusCode: 400,
      message: '模块标识已存在'
    })
  }

  // 创建新模块
  const module = await prisma.permissionModule.create({
    data: {
      name,
      code,
      description,
      createdBy: { connect: { id: user.id } },
      updatedBy: { connect: { id: user.id } }
    }
  })

  return module
})
