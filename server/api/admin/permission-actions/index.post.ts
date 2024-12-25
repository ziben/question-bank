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
  const { moduleId, name, code, description } = body

  // 验证必填字段
  if (!moduleId || !name || !code) {
    throw createError({
      statusCode: 400,
      message: '所属模块、名称和标识符不能为空'
    })
  }

  // 检查模块是否存在
  const module = await prisma.permissionModule.findUnique({
    where: { id: moduleId }
  })

  if (!module) {
    throw createError({
      statusCode: 404,
      message: '所选模块不存在'
    })
  }

  // 检查操作标识是否已存在
  const existingAction = await prisma.permissionAction.findFirst({
    where: {
      moduleId,
      code
    }
  })

  if (existingAction) {
    throw createError({
      statusCode: 400,
      message: '该模块下已存在相同标识的操作'
    })
  }

  // 创建新操作
  const action = await prisma.permissionAction.create({
    data: {
      name,
      code,
      description,
      module: { connect: { id: moduleId } },
      createdBy: { connect: { id: user.id } },
      updatedBy: { connect: { id: user.id } }
    }
  })

  return action
})
