import { PrismaClient } from '@prisma/client'
import { H3Event } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event: H3Event) => {
  const method = event.method

  switch (method) {
    case 'GET':
      const categories = await prisma.category.findMany({
        include: {
          _count: {
            select: {
              questions: true
            }
          }
        },
        orderBy: {
          name: 'asc'
        }
      })
      return categories.map(category => ({
        ...category,
        questionCount: category._count.questions
      }))

    case 'POST':
      const body = await readBody(event)
      const newCategory = await prisma.category.create({
        data: {
          name: body.name,
          description: body.description
        }
      })
      return newCategory

    default:
      throw createError({
        statusCode: 405,
        message: 'Method not allowed'
      })
  }
})
