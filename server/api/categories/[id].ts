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
    const category = await prisma.category.findUnique({
      where: { id: parseInt(id) },
      include: {
        questions: true
      }
    })
    if (!category) {
      throw createError({
        statusCode: 404,
        message: 'Category not found'
      })
    }
    return category
  }

  if (method === 'PUT') {
    const body = await readBody(event)
    const updatedCategory = await prisma.category.update({
      where: { id: parseInt(id) },
      data: {
        name: body.name,
        description: body.description
      }
    })
    return updatedCategory
  }

  if (method === 'DELETE') {
    await prisma.category.delete({
      where: { id: parseInt(id) }
    })
    return { message: 'Category deleted successfully' }
  }

  throw createError({
    statusCode: 405,
    message: 'Method not allowed'
  })
})
