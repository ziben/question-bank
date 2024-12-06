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
    
    // Validate required fields
    if (!body.title || !body.content || !body.categoryId || !body.correctAnswer) {
      throw createError({
        statusCode: 400,
        message: 'Missing required fields'
      })
    }

    // Verify category exists
    const categoryExists = await prisma.category.findUnique({
      where: { id: body.categoryId }
    })
    if (!categoryExists) {
      throw createError({
        statusCode: 400,
        message: '分类不存在'
      })
    }

    try {
      const updatedQuestion = await prisma.$transaction(async (tx) => {
        // Check if question exists
        const existingQuestion = await tx.question.findUnique({
          where: { id: parseInt(id) }
        })
        if (!existingQuestion) {
          throw createError({
            statusCode: 404,
            message: 'Question not found'
          })
        }

        return await tx.question.update({
          where: { id: parseInt(id) },
          data: {
            title: body.title,
            content: body.content,
            difficulty: body.difficulty,
            categoryId: body.categoryId,
            options: body.options || [],
            answer: body.correctAnswer,
            explanation: body.explanation || '',
            tags: body.tags || [],
            updatedAt: new Date()
          },
          include: {
            category: true
          }
        })
      })
      return updatedQuestion
    } catch (error: any) {
      throw createError({
        statusCode: 500,
        message: `Failed to update question: ${error.message}`
      })
    }
  }

  if (method === 'DELETE') {
    try {
      const question = await prisma.question.delete({
        where: { id: parseInt(id) }
      })
      return {
        message: 'Question deleted successfully',
        id: question.id
      }
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw createError({
          statusCode: 404,
          message: 'Question not found'
        })
      }
      throw createError({
        statusCode: 500,
        message: `Failed to delete question: ${error.message}`
      })
    }
  }

  throw createError({
    statusCode: 405,
    message: 'Method not allowed'
  })
})
