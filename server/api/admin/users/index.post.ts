import { PrismaClient } from '@prisma/client'
import { hashPassword } from '~/server/utils/auth'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { username, email, password, roleIds, subjectId, gradeId, sourceId } = body

  if (!username || !email || !password) {
    throw createError({
      statusCode: 400,
      message: '用户名、邮箱和密码是必填项'
    })
  }

  // 检查用户名是否已存在
  const existingUsername = await prisma.user.findUnique({
    where: { username }
  })

  if (existingUsername) {
    throw createError({
      statusCode: 400,
      message: '用户名已被使用'
    })
  }

  // 检查邮箱是否已存在
  const existingEmail = await prisma.user.findUnique({
    where: { email }
  })

  if (existingEmail) {
    throw createError({
      statusCode: 400,
      message: '邮箱已被注册'
    })
  }

  const hashedPassword = await hashPassword(password)

  // Create user with roles
  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
      roles: {
        create: (roleIds || []).map((roleId: number) => ({
          roleId: roleId
        }))
      }
    }
  })

  // Fetch user with roles and permissions
  const userWithRoles = await prisma.user.findUnique({
    where: { id: user.id },
    include: {
      roles: {
        include: {
          role: {
            include: {
              permissions: {
                include: {
                  permission: true
                }
              }
            }
          }
        }
      }
    }
  })

  if (!userWithRoles) {
    throw createError({
      statusCode: 500,
      message: '用户创建失败'
    })
  }

  // Transform the response to match the expected format
  return {
    id: userWithRoles.id,
    username: userWithRoles.username,
    email: userWithRoles.email,
    createdAt: userWithRoles.createdAt,
    updatedAt: userWithRoles.updatedAt,
    roles: userWithRoles.roles.map(ur => ({
      id: ur.role.id,
      name: ur.role.name,
      permissions: ur.role.permissions.map(p => ({
        id: p.permission.id,
        name: p.permission.name
      }))
    }))
  }
})
