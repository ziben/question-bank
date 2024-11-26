import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function updateAdminRole() {
  try {
    const updatedAdmin = await prisma.user.update({
      where: { email: 'admin@example.com' },
      data: { role: 'admin' }  // Using lowercase 'admin'
    })
    console.log('Admin user updated successfully:', updatedAdmin)
  } catch (error) {
    console.error('Error updating admin user:', error)
  } finally {
    await prisma.$disconnect()
  }
}

updateAdminRole()
