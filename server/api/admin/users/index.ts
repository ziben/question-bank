import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getQuery } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const page = Number(query.page) || 1
  const pageSize = Number(query.pageSize) || 10
  const search = query.search as string || ''

  const where = search ? {
    OR: [
      { username: { contains: search } },
      { email: { contains: search } },
      { name: { contains: search } }
    ]
  } : {}

  const [total, users] = await Promise.all([
    prisma.user.count({ where }),
    prisma.user.findMany({
      where,
      skip: (page - 1) * pageSize,
      take: pageSize,
      include: {
        roles: {
          include: {
            role: true
          }
        }
      }
    })
  ])

  return {
    total,
    items: users.map(user => ({
      ...user,
      password: undefined,
      roles: user.roles.map(ur => ur.role)
    }))
  }
})
