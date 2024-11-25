import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const method = event.method
  if (method !== 'GET') {
    throw createError({
      statusCode: 405,
      message: 'Method not allowed'
    })
  }

  const query = getQuery(event)
  const format = (query.format || 'json') as string
  const categoryId = query.categoryId ? parseInt(query.categoryId as string) : undefined

  try {
    const questions = await prisma.question.findMany({
      where: {
        ...(categoryId && { categoryId })
      },
      include: {
        category: {
          select: {
            name: true
          }
        },
        createdBy: {
          select: {
            username: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    // Transform data based on format
    switch (format.toLowerCase()) {
      case 'json':
        return questions

      case 'csv':
        const csvHeader = 'Title,Content,Type,Difficulty,Options,Answer,Explanation,Category,Tags,Created By\\n'
        const csvRows = questions.map(q => [
          q.title,
          q.content,
          q.type,
          q.difficulty,
          q.options || '',
          q.answer,
          q.explanation || '',
          q.category.name,
          q.tags || '',
          q.createdBy.username
        ].map(field => `"${field.replace(/"/g, '""')}"`).join(','))
        
        setHeader(event, 'Content-Type', 'text/csv')
        setHeader(event, 'Content-Disposition', 'attachment; filename=questions.csv')
        return csvHeader + csvRows.join('\\n')

      default:
        throw createError({
          statusCode: 400,
          message: 'Unsupported export format'
        })
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: `Export failed: ${error instanceof Error ? error.message : String(error)}`
    })
  }
})
