import { defineEventHandler, readBody } from 'h3'
import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  const session = await useAuthSession(event)
  const user = session.data

  if (!user) {
    throw new Error('Invalid role ID')
  }
  const id = Number(event.context.params?.id)
  if (!id) {
    throw new Error('Invalid role ID')
  }

  const body = await readBody(event)
  const { roleData } = body

  const updatedRole = await prisma.role.update({
    where: { id },
    data: roleData,
    include: {
      createdBy: {
        select: {
          id: true,
          username: true
        }
      },
      updatedBy: {
        select: {
          id: true,
          username: true
        }
      }
    }
  })

  return updatedRole
})
