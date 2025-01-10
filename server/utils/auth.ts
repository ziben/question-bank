import { H3Event } from 'h3'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import type { User, Role, Permission } from '@prisma/client'
import prisma from '~/lib/prisma'
import type { UserWithRelations } from '~/prisma/generated/zod'

export const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'
export const ACCESS_TOKEN_TTL = process.env.ACCESS_TOKEN_TTL || '24h'

interface UserWithAuth extends User {
  roleNames: string[]
  permissionNames: string[]
}

export interface TokenPayload {
  userId: string
  email: string
  username: string
  roles: Array<{
    id: string
    name: string
    permissions: Array<{
      id: string
      code: string
    }>
  }>
}

interface TokensByUser {
  access: Map<string, string>
  refresh: Map<string, string>
}

export const tokensByUser: Map<string, TokensByUser> = new Map()

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}

export const generateToken = (
  user: UserWithRelations
): { token: { accessToken: string; refreshToken: string } } => {
  const payload: TokenPayload = {
    userId: user.id,
    email: user.email,
    username: user.username,
    roles: user.roles.map((ur) => ({
      id: ur.id,
      name: ur.name,
      permissions: ur.permissions.map((rp) => ({
        id: rp.id,
        code: rp.code,
      })),
    })),
  }

  const accessToken = jwt.sign(payload, JWT_SECRET, {
    expiresIn: ACCESS_TOKEN_TTL,
  })
  const refreshToken = jwt.sign(payload, JWT_SECRET, {
    // 1 day
    expiresIn: 60 * 60 * 24,
  })

  // Naive implementation - please implement properly yourself!
  const userTokens: TokensByUser = tokensByUser.get(user.username) ?? {
    access: new Map(),
    refresh: new Map(),
  }
  userTokens.access.set(accessToken, refreshToken)
  userTokens.refresh.set(refreshToken, accessToken)
  tokensByUser.set(user.username, userTokens)

  return {
    token: {
      accessToken,
      refreshToken,
    },
  }
}

export const verifyToken = (token: string): TokenPayload | null => {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload
  } catch (error) {
    return null
  }
}

export function extractToken(authorizationHeader: string) {
  return authorizationHeader.startsWith('Bearer ') ? authorizationHeader.slice(7) : authorizationHeader
}

export const getTokensByUser = (username: string): TokensByUser | undefined => {
  return tokensByUser.get(username)
}

export const getUserFromEvent = async (event: H3Event): Promise<UserWithAuth | null> => {
  const token = event.headers.get('authorization')?.replace('Bearer ', '')
  if (!token) return null

  const decoded = verifyToken(token)
  if (!decoded) return null

  const user = await prisma.user.findUnique({
    where: { id: decoded.userId },
  })

  if (!user) return null

  return {
    ...user,
    roleNames: decoded.roles.map((r) => r.name),
    permissionNames: decoded.roles.flatMap((r) => r.permissions.map((p) => p.code)),
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

  return requiredPermissions.some((permission) => user.permissionNames.includes(permission))
}

// 检查用户是否具有指定的所有权限
export const hasAllPermissions = (user: UserWithAuth | null, requiredPermissions: string[]): boolean => {
  if (!user || !user.permissionNames) return false

  // 如果用户是管理员，拥有所有权限
  if (user.roleNames.includes('ADMIN')) return true

  return requiredPermissions.every((permission) => user.permissionNames.includes(permission))
}

// 检查用户是否具有指定的角色
export const hasRole = (user: UserWithAuth | null, role: string): boolean => {
  if (!user || !user.roleNames) return false
  return user.roleNames.includes(role)
}

// 检查用户是否具有指定的任一角色
export const hasAnyRole = (user: UserWithAuth | null, roles: string[]): boolean => {
  if (!user || !user.roleNames) return false
  return roles.some((role) => user.roleNames.includes(role))
}

// 检查用户是否具有指定的所有角色
export const hasAllRoles = (user: UserWithAuth | null, roles: string[]): boolean => {
  if (!user || !user.roleNames) return false
  return roles.every((role) => user.roleNames.includes(role))
}
