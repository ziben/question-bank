import { PrismaClient } from '@prisma/client'
import { defineEventHandler } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params?.id)
  if (!id) {
    throw new Error('Invalid permission ID')
  }

  const permission = await prisma.permission.findUnique({
    where: { id },
    include: {
      roles: {
        include: {
          role: true
        }
      }
    }
  })

  if (!permission) {
    throw new Error('Permission not found')
  }

  return {
    ...permission,
    roles: permission.roles.map(rp => rp.role)
  }
})
