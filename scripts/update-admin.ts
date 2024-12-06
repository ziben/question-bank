import { PrismaClient } from '@prisma/client'
import { hashPassword } from '../server/utils/auth'

const prisma = new PrismaClient()

async function updateAdminPassword() {
  try {
    const hashedPassword = await hashPassword('admin123')
    const updatedAdmin = await prisma.user.update({
      where: { email: 'admin@example.com' },
      data: { password: hashedPassword }
    })
    console.log('Admin password updated successfully')
  } catch (error) {
    console.error('Error updating admin password:', error)
  } finally {
    await prisma.$disconnect()
  }
}

updateAdminPassword()
