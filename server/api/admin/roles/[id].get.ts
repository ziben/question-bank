import { PrismaClient } from '@prisma/client'
import { defineEventHandler } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params?.id)
  if (!id) {
    throw new Error('Invalid role ID')
  }

  const role = await prisma.role.findUnique({
    where: { id },
    include: {
      permissions: {
        include: {
          permission: true
        }
      }
    }
  })

  if (!role) {
    throw new Error('Role not found')
  }

  return {
    ...role,
    permissions: role.permissions.map(rp => rp.permission)
  }
})
