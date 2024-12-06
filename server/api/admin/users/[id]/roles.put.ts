import { PrismaClient } from '@prisma/client'
import { defineEventHandler, readBody } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params?.id)
  if (!id) {
    throw new Error('Invalid user ID')
  }

  const body = await readBody(event)
  const { roles } = body

  if (!Array.isArray(roles)) {
    throw new Error('角色列表格式不正确')
  }

  // 更新用户的角色
  const user = await prisma.user.update({
    where: { id },
    data: {
      roles: {
        deleteMany: {}, // 删除所有现有角色
        create: roles.map((roleId: number) => ({
          role: {
            connect: { id: roleId }
          }
        }))
      }
    },
    include: {
      roles: {
        include: {
          role: true
        }
      }
    }
  })

  return {
    ...user,
    roles: user.roles.map(ur => ur.role)
  }
})
