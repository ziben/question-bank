import prisma from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  // 验证权限
  const session = await requireAuthSession(event)
  const user = session.data

  // 获取标签ID
  const id = parseInt(event.context.params?.id ?? '')
  if (isNaN(id)) {
    throw createError({
      statusCode: 400,
      message: '无效的标签ID',
    })
  }

  // 验证标签是否存在
  const tag = await prisma.tag.findUnique({
    where: { id },
    include: {
      children: true,
      questions: true,
    },
  })
  if (!tag) {
    throw createError({
      statusCode: 404,
      message: '标签不存在',
    })
  }

  // 检查是否有子标签
  if (tag.children.length > 0) {
    throw createError({
      statusCode: 400,
      message: '该标签下还有子标签，无法删除',
    })
  }

  // 检查是否被题目使用
  if (tag.questions.length > 0) {
    throw createError({
      statusCode: 400,
      message: '该标签已被题目使用，无法删除',
    })
  }

  // 删除标签
  await prisma.tag.delete({
    where: { id },
  })

  // 返回结果
  return {
    code: 200,
    message: 'success',
  }
})
