import { PrismaClient } from '@prisma/client'
import { H3Event } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = await readBody(event)
    const { ids } = body

    if (!Array.isArray(ids) || ids.length === 0) {
      throw createError({
        statusCode: 400,
        message: '无效的请求参数'
      })
    }

    // 使用事务确保原子性
    const result = await prisma.$transaction(async (tx) => {
      // 删除题目
      await tx.question.deleteMany({
        where: {
          id: {
            in: ids
          }
        }
      })

      // 返回删除的数量
      return {
        count: ids.length
      }
    })

    return result
  } catch (error) {
    console.error('批量删除题目失败:', error)
    throw createError({
      statusCode: 500,
      message: '批量删除题目失败'
    })
  }
})
