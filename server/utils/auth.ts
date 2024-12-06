import { H3Event } from 'h3'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import type { User, Role, Permission, UserRole, RolePermission } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

interface UserWithRolesAndPermissions extends User {
  roles: (UserRole & {
    role: Role & {
      permissions: (RolePermission & {
        permission: Permission
      })[]
    }
  })[]
}

interface UserWithAuth extends User {
  roleNames: string[];
  permissionNames: string[];
}

interface TokenPayload {
  userId: number;
  roles: Array<{
    id: number;
    name: string;
    permissions: Array<{
      id: number;
      name: string;
    }>;
  }>;
}

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}

export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword)
}

export const generateToken = (user: UserWithRolesAndPermissions): string => {
  const payload: TokenPayload = {
    userId: user.id,
    roles: user.roles.map(ur => ({
      id: ur.role.id,
      name: ur.role.name,
      permissions: ur.role.permissions.map(rp => ({
        id: rp.permission.id,
        name: rp.permission.name
      }))
    }))
  }
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' })
}

export const verifyToken = (token: string): TokenPayload | null => {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload
  } catch (error) {
    return null
  }
}

export const getUserFromEvent = async (event: H3Event): Promise<UserWithAuth | null> => {
  const token = event.headers.get('authorization')?.replace('Bearer ', '')
  if (!token) return null

  const decoded = verifyToken(token)
  if (!decoded) return null

  const user = await prisma.user.findUnique({
    where: { id: decoded.userId }
  })

  if (!user) return null

  return {
    ...user,
    roleNames: decoded.roles.map(r => r.name),
    permissionNames: decoded.roles.flatMap(r => r.permissions.map(p => p.name))
  }
}

// 检查用户是否具有指定的权限
export const hasPermission = (user: UserWithAuth | null, requiredPermission: string): boolean => {
  if (!user || !user.permissionNames) return false

  // 如果用户是管理员，拥有所有权限
  if (user.roleNames.includes('ADMIN')) return true

  return user.permissionNames.includes(requiredPermission)
}

// 检查用户是否具有指定的任一权限
export const hasAnyPermission = (user: UserWithAuth | null, requiredPermissions: string[]): boolean => {
  if (!user || !user.permissionNames) return false

  // 如果用户是管理员，拥有所有权限
  if (user.roleNames.includes('ADMIN')) return true

  return requiredPermissions.some(permission => user.permissionNames.includes(permission))
}

// 检查用户是否具有指定的所有权限
export const hasAllPermissions = (user: UserWithAuth | null, requiredPermissions: string[]): boolean => {
  if (!user || !user.permissionNames) return false

  // 如果用户是管理员，拥有所有权限
  if (user.roleNames.includes('ADMIN')) return true

  return requiredPermissions.every(permission => user.permissionNames.includes(permission))
}

// 检查用户是否具有指定的角色
export const hasRole = (user: UserWithAuth | null, role: string): boolean => {
  if (!user || !user.roleNames) return false
  return user.roleNames.includes(role)
}

// 检查用户是否具有指定的任一角色
export const hasAnyRole = (user: UserWithAuth | null, roles: string[]): boolean => {
  console.log(user)
  if (!user || !user.roleNames) return false
  return roles.some(role => user.roleNames.includes(role))
}

// 检查用户是否具有指定的所有角色
export const hasAllRoles = (user: UserWithAuth | null, roles: string[]): boolean => {
  if (!user || !user.roleNames) return false
  return roles.every(role => user.roleNames.includes(role))
}
