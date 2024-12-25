import prisma from '~/server/utils/prisma'
import { z } from 'zod'

// 请求体验证schema
const bodySchema = z.object({
  categoryId: z.number(),
  parentId: z.number().nullable(),
  code: z.string().min(1).max(50),
  name: z.string().min(1).max(50),
  description: z.string().max(500).optional(),
  sortOrder: z.number().int().min(0).default(0),
})

export default defineEventHandler(async (event) => {
  // 验证权限
  const session = await requireAuthSession(event)
  const user = session.data

  // 验证请求体
  const body = await readBody(event)
  const data = bodySchema.parse(body)

  // 验证分类是否存在
  const category = await prisma.tagCategory.findUnique({
    where: { id: data.categoryId },
  })
  if (!category) {
    throw createError({
      statusCode: 400,
      message: '分类不存在',
    })
  }

  // 验证父标签是否存在
  if (data.parentId) {
    const parent = await prisma.tag.findUnique({
      where: { id: data.parentId },
    })
    if (!parent) {
      throw createError({
        statusCode: 400,
        message: '父标签不存在',
      })
    }
  }

  // 验证同一分类下的标签代码是否重复
  const existingTag = await prisma.tag.findFirst({
    where: {
      categoryId: data.categoryId,
      code: data.code,
    },
  })
  if (existingTag) {
    throw createError({
      statusCode: 400,
      message: '同一分类下已存在相同代码的标签',
    })
  }

  // 创建标签
  const tag = await prisma.tag.create({
    data: {
      ...data,
      createdById: session.user.id,
      updatedById: session.user.id,
    },
    include: {
      category: true,
      parent: true,
    },
  })

  // 返回结果
  return {
    code: 200,
    message: 'success',
    data: tag,
  }
})
