import { H3Event } from 'h3'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}

export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword)
}

export const generateToken = (userId: number, role: string): string => {
  return jwt.sign({ userId, role }, JWT_SECRET, { expiresIn: '24h' })
}

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    return null
  }
}

export const getUserFromEvent = async (event: H3Event) => {
  const token = event.headers.get('authorization')?.replace('Bearer ', '')
  if (!token) return null

  const decoded = verifyToken(token)
  if (!decoded) return null

  return await prisma.user.findUnique({
    where: { id: decoded.userId }
  })
}

export const checkPermission = (requiredRole: string[], userRole: string): boolean => {
  const roleHierarchy = ['USER', 'EDITOR', 'ADMIN']
  const userRoleIndex = roleHierarchy.indexOf(userRole)
  return requiredRole.some(role => {
    const requiredRoleIndex = roleHierarchy.indexOf(role)
    return userRoleIndex >= requiredRoleIndex
  })
}
