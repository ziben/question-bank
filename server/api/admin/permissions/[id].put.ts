import { PrismaClient } from '@prisma/client'
import { defineEventHandler, readBody } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const session = await useAuthSession(event)
  const user = session.data

  const id = Number(event.context.params?.id)
  if (!id) {
    throw new Error('Invalid permission ID')
  }

  const body = await readBody(event)
  const { permissionData } = body
  console.log(permissionData)
  const updatedPermission = await prisma.permission.update({
    where: { id },
    data: permissionData,
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

  return updatedPermission
})
