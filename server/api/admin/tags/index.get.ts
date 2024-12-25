import { z } from 'zod'
import prisma from '~/server/utils/prisma'

// 查询参数验证schema
const querySchema = z.object({
  page: z.string().transform(Number).default('1'),
  pageSize: z.string().transform(Number).default('10'),
  search: z.string().optional(),
})

export default defineEventHandler(async (event) => {
  // 验证权限
  const session = await requireAuthSession(event)
  const user = session.data

  // 验证查询参数
  const query = getQuery(event)
  const { page, pageSize, search } = querySchema.parse(query)

  // 构建查询条件
  const where = search
    ? {
      OR: [
        { name: { contains: search } },
        { code: { contains: search } },
        { description: { contains: search } },
      ],
    }
    : {}

  // 查询数据
  const [total, data] = await Promise.all([
    prisma.tag.count({ where }),
    prisma.tag.findMany({
      where,
      include: {
        category: true,
        parent: true,
        children: true,
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: [
        { sortOrder: 'asc' },
        { id: 'desc' },
      ],
    }),
  ])

  // 返回结果
  return {
    code: 200,
    message: 'success',
    data,
    pagination: {
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    },
  }
})
