import { PrismaClient } from '@prisma/client'
import { H3Event } from 'h3'
import { getUserFromEvent } from '~/server/utils/auth'

const prisma = new PrismaClient()

export default defineEventHandler(async (event: H3Event) => {
  const method = event.method

  switch (method) {
    case 'GET':
      const sources = await prisma.source.findMany({
        orderBy: {
          createdAt: 'desc'
        }
      })
      return sources

    case 'POST':
      const body = await readBody(event)
      const user = await getUserFromEvent(event)
      
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

      // 检查名称是否已存在
      const existing = await prisma.source.findUnique({
        where: { name: body.name }
      })
      if (existing) {
        throw createError({
          statusCode: 400,
          message: '该名称已存在'
        })
      }

      const newSource = await prisma.source.create({
        data: {
          name: body.name,
          type: body.type,
          description: body.description,
          createdBy: {
            connect: { id: user?.id },
          },
          updatedBy: {
            connect: { id: user?.id },
          },
        }
      })
      return newSource

    default:
      throw createError({
        statusCode: 405,
        message: '不支持的请求方法'
      })
  }
})
