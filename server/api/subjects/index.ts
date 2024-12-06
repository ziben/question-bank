import { PrismaClient } from '@prisma/client'
import { H3Event } from 'h3'
import { getUserFromEvent } from '~/server/utils/auth'

const prisma = new PrismaClient()

export default defineEventHandler(async (event: H3Event) => {
  const method = event.method

  switch (method) {
    case 'GET':
      const subjects = await prisma.subject.findMany({
        orderBy: {
          createdAt: 'desc'
        }
      })
      return subjects

    case 'POST':
      const body = await readBody(event)
      const user = await getUserFromEvent(event)
      // 验证必填字段
      if (!body.name) {
        throw createError({
          statusCode: 400,
          message: '名称为必填项'
        })
      }

      // 检查名称是否已存在
      const existing = await prisma.subject.findUnique({
        where: { name: body.name }
      })
      if (existing) {
        throw createError({
          statusCode: 400,
          message: '该名称已存在'
        })
      }

      const newSubject = await prisma.subject.create({
        data: {
          name: body.name,
          description: body.description,
          createdBy: {
            connect: { id: user?.id },
          },
          updatedBy: {
            connect: { id: user?.id },
          },
        }
      })
      return newSubject

    default:
      throw createError({
        statusCode: 405,
        message: '不支持的请求方法'
      })
  }
})
