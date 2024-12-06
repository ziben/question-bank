import { PrismaClient } from '@prisma/client'
import { defineEventHandler, readBody } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params?.id)
  if (!id) {
    throw new Error('Invalid role ID')
  }

  const body = await readBody(event)
  const { permissions, ...roleData } = body

  const updatedRole = await prisma.role.update({
    where: { id },
    data: {
      ...roleData,
      updatedBy: { connect: { id: event.context.user.id } },
      // 如果提供了权限列表则更新权限
      ...(permissions ? {
        permissions: {
          deleteMany: {},
          create: permissions.map((permissionId: number) => ({
            permission: {
              connect: { id: permissionId }
            }
          }))
        }
      } : {})
    },
    include: {
      permissions: {
        include: {
          permission: true
        }
      },
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

  return {
    ...updatedRole,
    permissions: updatedRole.permissions.map(rp => rp.permission)
  }
})
