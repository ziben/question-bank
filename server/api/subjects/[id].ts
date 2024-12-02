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
      const subject = await prisma.subject.findUnique({
        where: { id }
      })
      if (!subject) {
        throw createError({
          statusCode: 404,
          message: '科目不存在'
        })
      }
      return subject

    case 'PUT':
      const body = await readBody(event)
      
      // 验证必填字段
      if (!body.name) {
        throw createError({
          statusCode: 400,
          message: '名称为必填项'
        })
      }

      // 检查名称是否已被其他记录使用
      const existing = await prisma.subject.findFirst({
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

      const updatedSubject = await prisma.subject.update({
        where: { id },
        data: {
          name: body.name,
          description: body.description
        }
      })
      return updatedSubject

    case 'DELETE':
      // 检查是否有题目关联到此科目
      const questionCount = await prisma.question.count({
        where: { subjectId: id }
      })
      if (questionCount > 0) {
        throw createError({
          statusCode: 400,
          message: `无法删除，还有 ${questionCount} 个题目关联到此科目`
        })
      }

      await prisma.subject.delete({
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
