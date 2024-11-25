import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  // 获取总题目数
  const totalQuestions = await prisma.question.count()

  // 按难度统计
  const byDifficulty = await prisma.question.groupBy({
    by: ['difficulty'],
    _count: true
  })

  // 按类型统计
  const byType = await prisma.question.groupBy({
    by: ['type'],
    _count: true
  })

  // 按分类统计
  const byCategory = await prisma.category.findMany({
    include: {
      _count: {
        select: {
          questions: true
        }
      }
    }
  })

  // 最近添加的题目
  const recentQuestions = await prisma.question.findMany({
    take: 5,
    orderBy: {
      createdAt: 'desc'
    },
    include: {
      category: true
    }
  })

  const [questionCount, categoryCount] = await Promise.all([
    prisma.question.count(),
    prisma.category.count()
  ])

  return {
    totalQuestions,
    byDifficulty: byDifficulty.reduce((acc, curr) => ({
      ...acc,
      [curr.difficulty]: curr._count
    }), {}),
    byType: byType.reduce((acc, curr) => ({
      ...acc,
      [curr.type]: curr._count
    }), {}),
    byCategory: byCategory.reduce((acc, curr) => ({
      ...acc,
      [curr.id]: curr._count.questions
    }), {}),
    recentQuestions,
    questionCount,
    categoryCount
  }
})
