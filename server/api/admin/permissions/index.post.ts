import { PrismaClient } from '@prisma/client'
import { defineEventHandler, readBody } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, description, roles } = body
  // 获取当前用户信息
  const user = event.context.user
  if (!user?.id) {
    throw new Error('未登录或无权限')
  }

  if (!name) {
    throw new Error('权限名称不能为空')
  }

  // 检查权限名是否已存在
  const existingPermission = await prisma.permission.findFirst({
    where: { name }
  })

  if (existingPermission) {
    throw new Error('权限名称已存在')
  }

  // 创建权限
  const permission = await prisma.permission.create({
    data: {
      name,
      description,
      createdBy: user.id,
      updatedBy: user.id,
      // 如果提供了角色列表，则建立关联
      ...(roles?.length ? {
        roles: {
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
    ...permission,
    roles: permission.roles.map(rp => rp.role)
  }
})
