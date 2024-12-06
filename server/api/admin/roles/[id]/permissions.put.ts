import { PrismaClient } from '@prisma/client'
import { defineEventHandler, readBody } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params?.id)
  if (!id) {
    throw new Error('Invalid role ID')
  }

  const body = await readBody(event)
  const { permissions } = body

  if (!Array.isArray(permissions)) {
    throw new Error('权限列表格式不正确')
  }

  // 更新角色的权限
  const role = await prisma.role.update({
    where: { id },
    data: {
      permissions: {
        deleteMany: {}, // 删除所有现有权限
        create: permissions.map((permissionId: number) => ({
          permission: {
            connect: { id: permissionId }
          }
        }))
      }
    },
    include: {
      permissions: {
        include: {
          permission: true
        }
      }
    }
  })

  return {
    ...role,
    permissions: role.permissions.map(rp => rp.permission)
  }
})
