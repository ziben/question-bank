import { PrismaClient } from '@prisma/client'
import { H3Event } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event: H3Event) => {
  const method = event.method

  switch (method) {
    case 'GET':
      const query = getQuery(event)
      const page = Math.max(1, parseInt(query.page as string) || 1)
      const limit = Math.min(100, Math.max(1, parseInt(query.limit as string) || 10))
      const search = (query.search as string || '').trim()
      const category = parseInt(query.category as string)
      const difficulty = query.difficulty as string
      const sort = ['createdAt', 'title', 'difficulty'].includes(query.sort as string) 
        ? query.sort as string 
        : 'createdAt'
      const order = ['asc', 'desc'].includes(query.order as string) 
        ? query.order as 'asc' | 'desc'
        : 'desc'

      const where: any = {
        deleted: false
      }

      if (search) {
        where.OR = [
          { title: { contains: search, mode: 'insensitive' } },
          { content: { contains: search, mode: 'insensitive' } },
          { tags: { has: search } }
        ]
      }

      if (category && !isNaN(category)) {
        // Verify category exists
        const categoryExists = await prisma.category.findUnique({
          where: { id: category }
        })
        if (!categoryExists) {
          throw createError({
            statusCode: 400,
            message: '分类不存在'
          })
        }
        where.categoryId = category
      }

      if (difficulty && ['EASY', 'MEDIUM', 'HARD'].includes(difficulty.toUpperCase())) {
        where.difficulty = difficulty.toUpperCase()
      }

      try {
        const [questions, total] = await Promise.all([
          prisma.question.findMany({
            where,
            include: {
              category: true,
              createdBy: {
                select: {
                  id: true,
                  username: true,
                  name: true,
                },
              },
            },
            skip: (page - 1) * limit,
            take: limit,
            orderBy: {
              [sort]: order,
            },
          }),
          prisma.question.count({ where }),
        ])

        return {
          items: questions,
          pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
          },
        }
      } catch (error: any) {
        throw createError({
          statusCode: 500,
          message: `Failed to fetch questions: ${error.message}`
        })
      }

    case 'POST':
      const body = await readBody(event)

      if (!body.title || !body.content || !body.categoryId || !body.correctAnswer || 
          !body.subjectId || !body.gradeId || !body.sourceId) {
        throw createError({
          statusCode: 400,
          message: '缺少必填字段'
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

      // Verify subject exists
      const subjectExists = await prisma.subject.findUnique({
        where: { id: body.subjectId }
      })
      if (!subjectExists) {
        throw createError({
          statusCode: 400,
          message: '学科不存在'
        })
      }

      // Verify grade exists
      const gradeExists = await prisma.grade.findUnique({
        where: { id: body.gradeId }
      })
      if (!gradeExists) {
        throw createError({
          statusCode: 400,
          message: '年级不存在'
        })
      }

      // Verify source exists
      const sourceExists = await prisma.source.findUnique({
        where: { id: body.sourceId }
      })
      if (!sourceExists) {
        throw createError({
          statusCode: 400,
          message: '来源不存在'
        })
      }

      // Verify user exists
      const userId = event.context.user?.id
      if (!userId) {
        throw createError({
          statusCode: 401,
          message: '未授权'
        })
      }

      try {
        const newQuestion = await prisma.question.create({
          data: {
            title: body.title,
            content: body.content,
            difficulty: body.difficulty || 'MEDIUM',
            options: body.options || [],
            answer: body.correctAnswer,
            explanation: body.explanation || '',
            type: body.type || 'SINGLE_CHOICE',
            category: {
              connect: { id: body.categoryId }
            },
            subject: {
              connect: { id: body.subjectId }
            },
            grade: {
              connect: { id: body.gradeId }
            },
            source: {
              connect: { id: body.sourceId }
            },
            createdBy: {
              connect: { id: userId }
            }
          },
          include: {
            category: true,
            subject: true,
            grade: true,
            source: true,
            createdBy: {
              select: {
                id: true,
                username: true,
                name: true
              }
            }
          }
        })
        return newQuestion
      } catch (error: any) {
        console.error('Create question error:', error)
        throw createError({
          statusCode: 500,
          message: `创建题目失败: ${error.message}`
        })
      }

    default:
      throw createError({
        statusCode: 405,
        message: 'Method not allowed',
      })
  }
})
