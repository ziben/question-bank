import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id ? parseInt(event.context.params.id, 10) : null
  
  if (typeof id !== 'number' || isNaN(id)) {
    throw createError({
      statusCode: 400,
      message: 'Invalid ID'
    })
  }

  // 检查是否是最后一个管理员
  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      roles: {
        include: {
          role: true
        }
      }
    }
  })

  const isAdmin = user?.roles.some(ur => ur.role.name === 'ADMIN')
  
  if (isAdmin) {
    // 统计有管理员角色的用户数量
    const adminCount = await prisma.user.count({
      where: {
        roles: {
          some: {
            role: {
              name: 'ADMIN'
            }
          }
        }
      }
    })

    if (adminCount <= 1) {
      throw createError({
        statusCode: 400,
        message: '无法删除最后一个管理员账户'
      })
    }
  }

  await prisma.user.delete({
    where: { id }
  })

  return {
    message: '用户已成功删除'
  }
})
