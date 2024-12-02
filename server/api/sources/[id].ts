import { PrismaClient } from '@prisma/client'
import { H3Event } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event: H3Event) => {
  const method = event.method
  const id = event.context.params?.id ? parseInt(event.context.params.id, 10) : null

  if (typeof id !== 'number' || isNaN(id)) {
    throw createError({
      statusCode: 400,
      message: '无效的ID'
    })
  }

  switch (method) {
    case 'GET':
      const source = await prisma.source.findUnique({
        where: { id }
      })
      if (!source) {
        throw createError({
          statusCode: 404,
          message: '来源不存在'
        })
      }
      return source

    case 'PUT':
      const body = await readBody(event)
      
      // 验证必填字段
      if (!body.name || !body.type) {
        throw createError({
          statusCode: 400,
          message: '名称和类型为必填项'
        })
      }

      // 验证类型是否有效
      const validTypes = ['SCHOOL', 'INSTITUTION', 'EXAM']
      if (!validTypes.includes(body.type)) {
        throw createError({
          statusCode: 400,
          message: '无效的来源类型'
        })
      }

      // 检查名称是否已被其他记录使用
      const existing = await prisma.source.findFirst({
        where: {
          name: body.name,
          NOT: { id }
        }
      })
      if (existing) {
        throw createError({
          statusCode: 400,
          message: '该名称已存在'
        })
      }

      const updatedSource = await prisma.source.update({
        where: { id },
        data: {
          name: body.name,
          type: body.type,
          description: body.description
        }
      })
      return updatedSource

    case 'DELETE':
      // 检查是否有题目关联到此来源
      const questionCount = await prisma.question.count({
        where: { sourceId: id }
      })
      if (questionCount > 0) {
        throw createError({
          statusCode: 400,
          message: `无法删除，还有 ${questionCount} 个题目关联到此来源`
        })
      }

      await prisma.source.delete({
        where: { id }
      })
      return { success: true }

    default:
      throw createError({
        statusCode: 405,
        message: '不支持的请求方法'
      })
  }
})
