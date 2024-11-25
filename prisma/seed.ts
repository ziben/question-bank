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

  // Create some sample questions
  const questions = await Promise.all([
    // Mathematics questions
    prisma.question.create({
      data: {
        title: '基础代数运算',
        content: '求解方程：2x + 5 = 13',
        type: 'essay',
        difficulty: 'easy',
        answer: 'x = 4',
        explanation: '将5移到等式右边：2x = 13 - 5 = 8\n然后两边除以2：x = 4',
        tags: JSON.stringify(['algebra', 'equations']),
        categoryId: categories[0].id,
        userId: admin.id
      }
    }),
    prisma.question.create({
      data: {
        title: '判断三角形',
        content: '一个三角形的三条边长分别为3、4、5，这是直角三角形吗？',
        type: 'true_false',
        difficulty: 'medium',
        answer: 'true',
        explanation: '根据勾股定理，3² + 4² = 5²，所以这是一个直角三角形',
        tags: JSON.stringify(['geometry', 'triangle']),
        categoryId: categories[0].id,
        userId: admin.id
      }
    }),
    // Science questions
    prisma.question.create({
      data: {
        title: '物质状态',
        content: '以下哪个是物质的基本状态？',
        type: 'multiple_choice',
        difficulty: 'easy',
        options: JSON.stringify(['固体', '液体', '气体', '以上都是']),
        answer: '3',
        explanation: '物质的三种基本状态是固体、液体和气体',
        tags: JSON.stringify(['physics', 'states of matter']),
        categoryId: categories[1].id,
        userId: admin.id
      }
    }),
    // Programming questions
    prisma.question.create({
      data: {
        title: 'JavaScript基础',
        content: '以下哪个是JavaScript中声明变量的关键字？',
        type: 'multiple_choice',
        difficulty: 'easy',
        options: JSON.stringify(['var', 'let', 'const', '以上都是']),
        answer: '3',
        explanation: 'var、let和const都可以用来声明变量，但它们有不同的作用域和特性',
        tags: JSON.stringify(['javascript', 'variables']),
        categoryId: categories[2].id,
        userId: admin.id
      }
    }),
    prisma.question.create({
      data: {
        title: '算法复杂度',
        content: '快速排序算法的平均时间复杂度是多少？',
        type: 'essay',
        difficulty: 'hard',
        answer: 'O(n log n)',
        explanation: '快速排序的平均时间复杂度是O(n log n)，这是因为每次划分需要O(n)的时间，而平均情况下需要划分log n次',
        tags: JSON.stringify(['algorithms', 'sorting', 'complexity']),
        categoryId: categories[2].id,
        userId: admin.id
      }
    })
  ])

  console.log({ questions })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
