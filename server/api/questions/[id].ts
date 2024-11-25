import { PrismaClient } from '@prisma/client'
import { H3Event } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event: H3Event) => {
  const id = event.context.params?.id ?? ''
  const method = event.method

  if (isNaN(parseInt(id))) {
    throw createError({
      statusCode: 400,
      message: 'Invalid ID'
    })
  }

  if (method === 'GET') {
    const question = await prisma.question.findUnique({
      where: { id: parseInt(id) },
      include: {
        category: true
      }
    })
    if (!question) {
      throw createError({
        statusCode: 404,
        message: 'Question not found'
      })
    }
    return question
  }

  if (method === 'PUT') {
    const body = await readBody(event)
    const updatedQuestion = await prisma.question.update({
      where: { id: parseInt(id) },
      data: {
        title: body.title,
        content: body.content,
        difficulty: body.difficulty,
        categoryId: body.categoryId,
        options: body.options,
        answer: body.correctAnswer,
        explanation: body.explanation,
        tags: body.tags
      },
      include: {
        category: true
      }
    })
    return updatedQuestion
  }

  if (method === 'DELETE') {
    await prisma.question.delete({
      where: { id: parseInt(id) }
    })
    return { message: 'Question deleted successfully' }
  }

  throw createError({
    statusCode: 405,
    message: 'Method not allowed'
  })
})
