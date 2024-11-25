import { PrismaClient } from '@prisma/client'
import { H3Event } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event: H3Event) => {
  const method = event.method

  switch (method) {
    case 'GET':
      const query = getQuery(event)
      const page = parseInt(query.page as string) || 1
      const limit = parseInt(query.limit as string) || 10
      const search = query.search as string
      const category = parseInt(query.category as string)
      const difficulty = query.difficulty as string

      const where: any = {}

      if (search) {
        where.OR = [
          { title: { contains: search } },
          { content: { contains: search } },
          { tags: { has: search } }
        ]
      }

      if (category) {
        where.categoryId = category
      }

      if (difficulty) {
        where.difficulty = difficulty
      }

      const [questions, total] = await Promise.all([
        prisma.question.findMany({
          where,
          include: {
            category: true
          },
          skip: (page - 1) * limit,
          take: limit,
          orderBy: {
            createdAt: 'desc'
          }
        }),
        prisma.question.count({ where })
      ])

      return {
        questions,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit)
        }
      }

    case 'POST':
      const body = await readBody(event)
      const newQuestion = await prisma.question.create({
        data: {
          title: body.title,
          content: body.content,
          difficulty: body.difficulty,
          categoryId: body.categoryId,
          options: body.options,
          answer: body.correctAnswer,
          explanation: body.explanation,
          tags: body.tags,
          type: body.type,
          userId: body.userId
        },
        include: {
          category: true
        }
      })
      return newQuestion

    default:
      throw createError({
        statusCode: 405,
        message: 'Method not allowed'
      })
  }
})
