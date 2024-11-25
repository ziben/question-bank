import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  // 获取总题目数
  const totalQuestions = await prisma.question.count()

  // 按难度统计
  const byDifficulty = await prisma.question.groupBy({
    by: ['difficulty'],
    _count: {
      _all: true
    }
  })

  // 按类型统计
  const byType = await prisma.question.groupBy({
    by: ['type'],
    _count: {
      _all: true
    }
  })

  // 按分类统计
  const byCategory = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
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

  return {
    totalQuestions,
    byDifficulty: byDifficulty.map(item => ({
      difficulty: item.difficulty,
      _count: item._count._all
    })),
    byType: byType.map(item => ({
      type: item.type,
      _count: item._count._all
    })),
    byCategory,
    recentQuestions
  }
})
