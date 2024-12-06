import { PrismaClient } from '@prisma/client'
import { defineEventHandler, readBody } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params?.id)
  if (!id) {
    throw new Error('Invalid permission ID')
  }

  const body = await readBody(event)
  const { roles, ...permissionData } = body

  const updatedPermission = await prisma.permission.update({
    where: { id },
    data: {
      ...permissionData,
      // 如果提供了角色列表则更新角色
      ...(roles ? {
        roles: {
          deleteMany: {},
          create: roles.map((roleId: number) => ({
            role: {
              connect: { id: roleId }
            }
          }))
        }
      } : {})
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
    ...updatedPermission,
    roles: updatedPermission.roles.map(rp => rp.role)
  }
})
