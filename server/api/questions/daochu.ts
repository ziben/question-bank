import { PrismaClient } from '@prisma/client'
import { H3Event } from 'h3'
import { Readable } from 'stream'
import xlsx from 'node-xlsx'

const prisma = new PrismaClient()

const EXPORT_BATCH_SIZE = 1000
const SUPPORTED_FORMATS = ['json', 'csv', 'excel'] as const
type ExportFormat = typeof SUPPORTED_FORMATS[number]

async function* fetchQuestionsBatch(where: any) {
  let skip = 0
  while (true) {
    const questions = await prisma.question.findMany({
      where,
      include: {
        category: {
          select: {
            name: true
          }
        },
        createdBy: {
          select: {
            username: true,
            name: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      skip,
      take: EXPORT_BATCH_SIZE
    })

    if (questions.length === 0) break
    yield questions
    if (questions.length < EXPORT_BATCH_SIZE) break
    skip += EXPORT_BATCH_SIZE
  }
}

export default defineEventHandler(async (event: H3Event) => {
  const method = event.method
  if (method !== 'GET') {
    throw createError({
      statusCode: 405,
      message: 'Method not allowed'
    })
  }

  const query = getQuery(event)
  const format = ((query.format || 'json') as string).toLowerCase()
  if (!SUPPORTED_FORMATS.includes(format as ExportFormat)) {
    throw createError({
      statusCode: 400,
      message: `Unsupported export format. Supported formats are: ${SUPPORTED_FORMATS.join(', ')}`
    })
  }

  // Build filter conditions
  const where: any = { deleted: false }

  if (query.categoryId) {
    const categoryId = parseInt(query.categoryId as string)
    if (isNaN(categoryId)) {
      throw createError({
        statusCode: 400,
        message: 'Invalid category ID'
      })
    }
    // Verify category exists
    const category = await prisma.category.findUnique({ where: { id: categoryId } })
    if (!category) {
      throw createError({
        statusCode: 400,
        message: '分类不存在'
      })
    }
    where.categoryId = categoryId
  }

  if (query.difficulty) {
    const difficulty = (query.difficulty as string).toUpperCase()
    if (!['EASY', 'MEDIUM', 'HARD'].includes(difficulty)) {
      throw createError({
        statusCode: 400,
        message: 'Invalid difficulty level'
      })
    }
    where.difficulty = difficulty
  }

  if (query.search) {
    const search = (query.search as string).trim()
    where.OR = [
      { title: { contains: search, mode: 'insensitive' } },
      { content: { contains: search, mode: 'insensitive' } },
      { tags: { has: search } }
    ]
  }

  try {
    // Set response headers based on format
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const filename = `questions-${timestamp}`

    switch (format) {
      case 'json': {
        setHeader(event, 'Content-Type', 'application/json')
        setHeader(event, 'Content-Disposition', `attachment; filename=${filename}.json`)

        const questions = []
        for await (const batch of fetchQuestionsBatch(where)) {
          questions.push(...batch)
        }
        return questions
      }

      case 'csv': {
        setHeader(event, 'Content-Type', 'text/csv; charset=utf-8')
        setHeader(event, 'Content-Disposition', `attachment; filename=${filename}.csv`)

        const headers = [
          'ID', 'Title', 'Content', 'Type', 'Difficulty',
          'Options', 'Answer', 'Explanation', 'Category',
          'Tags', 'Created By', 'Created At'
        ]

        let output = headers.map(h => `"${h}"`).join(',') + '\\n'

        for await (const batch of fetchQuestionsBatch(where)) {
          const rows = batch.map(q => [
            q.id,
            q.title,
            q.content,
            q.type,
            q.difficulty,
            Array.isArray(q.options) ? JSON.stringify(q.options) : '',
            q.answer,
            q.explanation || '',
            q.category.name,
            '',
            q.createdBy?.name || q.createdBy?.username,
            new Date(q.createdAt).toISOString()
          ].map(field => `"${String(field).replace(/"/g, '""')}"`).join(','))

          output += rows.join('\\n') + '\\n'
        }

        return output
      }

      case 'excel': {
        setHeader(event, 'Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        setHeader(event, 'Content-Disposition', `attachment; filename=${filename}.xlsx`)

        const data = [
          [
            'ID', 'Title', 'Content', 'Type', 'Difficulty',
            'Options', 'Answer', 'Explanation', 'Category',
            'Tags', 'Created By', 'Created At'
          ]
        ]

        for await (const batch of fetchQuestionsBatch(where)) {
          for (const q of batch) {
            data.push([
              String(q.id),
              q.title,
              q.content,
              q.type,
              String(q.difficulty),
              String(q.options),
              q.answer,
              String(q.explanation),
              String(q.category),
              '',
              q.createdBy?.name ?? '',
              new Date(q.createdAt).toISOString()
            ])
          }
        }

        const buffer = xlsx.build([{ name: 'Questions', data, options: {} }])
        return buffer
      }
    }
  } catch (error) {
    console.error('Export error:', error)
    throw createError({
      statusCode: 500,
      message: `Export failed: ${error instanceof Error ? error.message : String(error)}`
    })
  }
})
