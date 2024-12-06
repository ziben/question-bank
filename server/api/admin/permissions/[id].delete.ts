import { PrismaClient } from '@prisma/client'
import { defineEventHandler } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params?.id)
  if (!id) {
    throw new Error('Invalid permission ID')
  }

  await prisma.permission.delete({
    where: { id }
  })

  return { success: true }
})
