import { PrismaClient } from '@prisma/client'
import { defineEventHandler } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params?.id)
  if (!id) {
    throw new Error('Invalid user ID')
  }

  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      roles: {
        include: {
          role: {
            include: {
              permissions: {
                include: {
                  permission: true
                }
              }
            }
          }
        }
      }
    }
  })

  if (!user) {
    throw new Error('User not found')
  }

  return {
    ...user,
    password: undefined,
    roles: user.roles.map(ur => ({
      ...ur.role,
      permissions: ur.role.permissions.map(rp => rp.permission)
    }))
  }
})
