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
  const questions = body.questions

  const result = await prisma.question.createMany({
    data: questions.map((q: any) => ({
      title: q.title,
      content: q.content,
      categoryId: q.categoryId,
      answer: q.answer,
      analysis: q.analysis
    }))
  })

  return {
    message: `Successfully imported ${result.count} questions`
  }
})
