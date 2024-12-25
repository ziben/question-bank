import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const session = await useAuthSession(event)
  const user = session.data
  if (!user) {
    throw createError({
      statusCode: 401,
      message: '未登录'
    })
  }

  const query = getQuery(event)
  const page = Number(query.page) || 1
  const pageSize = Number(query.pageSize) || 10
  const search = query.search as string || ''

  const where = search
    ? {
        OR: [
          { name: { contains: search } },
          { code: { contains: search } },
          { description: { contains: search } }
        ]
      }
    : {}

  const [total, items] = await Promise.all([
    prisma.permissionModule.count({ where }),
    prisma.permissionModule.findMany({
      where,
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: { createdAt: 'desc' },
      include: {
        actions: true
      }
    })
  ])

  return {
    items,
    total,
    page,
    pageSize
  }
})
