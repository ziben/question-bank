import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const method = event.method
  if (method !== 'POST') {
    throw createError({
      statusCode: 405,
      message: 'Method not allowed'
    })
  }

  const body = await readBody(event)
  const { questions, subjectId, gradeId, sourceId } = body

  if (!subjectId || !gradeId || !sourceId) {
    throw createError({
      statusCode: 400,
      message: '科目、年级和来源是必填项'
    })
  }

  if (!Array.isArray(questions)) {
    throw createError({
      statusCode: 400,
      message: 'Invalid input: questions must be an array'
    })
  }

  if (questions.length > 1000) {
    throw createError({
      statusCode: 400,
      message: 'Too many questions: maximum 1000 questions per import'
    })
  }

  // Validate each question
  questions.forEach((q: any, index: number) => {
    if (!q.title || !q.content || !q.categoryId || !q.answer) {
      throw createError({
        statusCode: 400,
        message: `Question at index ${index} is missing required fields`
      })
    }
  })

  try {
    // Verify that subject, grade and source exist
    const [subject, grade, source] = await Promise.all([
      prisma.subject.findUnique({ where: { id: subjectId } }),
      prisma.grade.findUnique({ where: { id: gradeId } }),
      prisma.source.findUnique({ where: { id: sourceId } })
    ])

    if (!subject || !grade || !source) {
      throw createError({
        statusCode: 400,
        message: '无效的科目、年级或来源ID'
      })
    }

    const result = await prisma.question.createMany({
      data: questions.map((q: any) => ({
        title: q.title,
        content: q.content,
        categoryId: q.categoryId,
        difficulty: q.difficulty || 'MEDIUM',
        options: q.options || [],
        answer: q.answer,
        explanation: q.explanation || q.analysis || '', // Support both field names
        tags: q.tags || [],
        type: q.type || 'SINGLE_CHOICE',
        subjectId,
        gradeId,
        sourceId,
        createdById: event.context.user?.id
      }))
    })

    return {
      message: `Successfully imported ${result.count} questions`,
      count: result.count,
      subject,
      grade,
      source
    }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: `Failed to import questions: ${error.message}`
    })
  }
})
