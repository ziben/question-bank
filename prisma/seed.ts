import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      username: 'admin',
      password: hashedPassword,
      role: 'ADMIN',
      name: 'Administrator'
    }
  })

  console.log({ admin })

  // Create some initial categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { name: 'Mathematics' },
      update: {},
      create: {
        name: 'Mathematics',
        description: 'Mathematical concepts and problems'
      }
    }),
    prisma.category.upsert({
      where: { name: 'Science' },
      update: {},
      create: {
        name: 'Science',
        description: 'Scientific principles and theories'
      }
    }),
    prisma.category.upsert({
      where: { name: 'Programming' },
      update: {},
      create: {
        name: 'Programming',
        description: 'Programming concepts and challenges'
      }
    })
  ])

  console.log({ categories })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
