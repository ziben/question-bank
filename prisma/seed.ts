import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

// Define permission groups directly
const permissionGroups = [
  {
    name: '用户管理',
    permissions: [
      { value: 'user.create', label: '创建用户', description: '允许创建新用户' },
      { value: 'user.read', label: '查看用户', description: '允许查看用户信息' },
      { value: 'user.update', label: '更新用户', description: '允许更新用户信息' },
      { value: 'user.delete', label: '删除用户', description: '允许删除用户' }
    ]
  },
  {
    name: '题目管理',
    permissions: [
      { value: 'question.create', label: '创建题目', description: '允许创建新题目' },
      { value: 'question.read', label: '查看题目', description: '允许查看题目' },
      { value: 'question.update', label: '更新题目', description: '允许更新题目' },
      { value: 'question.delete', label: '删除题目', description: '允许删除题目' }
    ]
  },
  {
    name: '科目管理',
    permissions: [
      { value: 'subject.create', label: '创建科目', description: '允许创建新科目' },
      { value: 'subject.read', label: '查看科目', description: '允许查看科目' },
      { value: 'subject.update', label: '更新科目', description: '允许更新科目' },
      { value: 'subject.delete', label: '删除科目', description: '允许删除科目' }
    ]
  },
  {
    name: '其他权限',
    permissions: [
      { value: 'grade.manage', label: '年级管理', description: '允许管理年级信息' },
      { value: 'source.manage', label: '来源管理', description: '允许管理题目来源' },
      { value: 'log.view', label: '查看日志', description: '允许查看操作日志' }
    ]
  }
]

async function main() {
  // Create permissions
  const permissions = await Promise.all(
    permissionGroups.flatMap(group =>
      group.permissions.map(permission =>
        prisma.permission.upsert({
          where: { name: permission.value },
          update: {},
          create: {
            name: permission.value,
            description: permission.description
          }
        })
      )
    )
  )

  // Create roles
  const adminRole = await prisma.role.upsert({
    where: { name: 'Administrator' },
    update: {},
    create: {
      name: 'Administrator',
      description: '系统管理员，拥有所有权限',
      permissions: {
        connect: permissions.map(p => ({ id: p.id }))
      }
    }
  })

  const editorRole = await prisma.role.upsert({
    where: { name: 'Editor' },
    update: {},
    create: {
      name: 'Editor',
      description: '内容编辑，可以管理题目',
      permissions: {
        connect: permissions
          .filter(p => p.name.startsWith('question.') || p.name === 'subject.read')
          .map(p => ({ id: p.id }))
      }
    }
  })

  const viewerRole = await prisma.role.upsert({
    where: { name: 'Viewer' },
    update: {},
    create: {
      name: 'Viewer',
      description: '普通用户，只能查看内容',
      permissions: {
        connect: permissions
          .filter(p => p.name.endsWith('.read'))
          .map(p => ({ id: p.id }))
      }
    }
  })

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
      name: 'Administrator',
      roles: {
        create: {
          role: {
            connect: { id: adminRole.id }
          }
        }
      }
    }
  })

  // Create normal user
  const user = await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      email: 'user@example.com',
      username: 'user',
      password: await bcrypt.hash('user123', 10),
      role: 'USER',
      name: '普通用户',
      roles: {
        create: {
          role: {
            connect: { id: viewerRole.id }
          }
        }
      }
    }
  })

  // Create editor user
  const editor = await prisma.user.upsert({
    where: { email: 'editor@example.com' },
    update: {},
    create: {
      email: 'editor@example.com',
      username: 'editor',
      password: await bcrypt.hash('editor123', 10),
      role: 'USER',
      name: '内容编辑',
      roles: {
        create: {
          role: {
            connect: { id: editorRole.id }
          }
        }
      }
    }
  })

  console.log({ admin, editor, user })

  // Create subjects
  const subjects = await Promise.all([
    prisma.subject.upsert({
      where: { name: '数学' },
      update: {},
      create: {
        name: '数学',
        description: '数学学科'
      }
    }),
    prisma.subject.upsert({
      where: { name: '语文' },
      update: {},
      create: {
        name: '语文',
        description: '语文学科'
      }
    }),
    prisma.subject.upsert({
      where: { name: '英语' },
      update: {},
      create: {
        name: '英语',
        description: '英语学科'
      }
    })
  ])

  // Create grades
  const grades = await Promise.all([
    prisma.grade.upsert({
      where: { name: '初一' },
      update: {},
      create: {
        name: '初一',
        description: '初中一年级'
      }
    }),
    prisma.grade.upsert({
      where: { name: '初二' },
      update: {},
      create: {
        name: '初二',
        description: '初中二年级'
      }
    }),
    prisma.grade.upsert({
      where: { name: '初三' },
      update: {},
      create: {
        name: '初三',
        description: '初中三年级'
      }
    })
  ])

  // Create sources
  const sources = await Promise.all([
    prisma.source.upsert({
      where: { name: '期中考试' },
      update: {},
      create: {
        name: '期中考试',
        type: 'EXAM',
        description: '期中考试题目'
      }
    }),
    prisma.source.upsert({
      where: { name: '期末考试' },
      update: {},
      create: {
        name: '期末考试',
        type: 'EXAM',
        description: '期末考试题目'
      }
    }),
    prisma.source.upsert({
      where: { name: '课堂练习' },
      update: {},
      create: {
        name: '课堂练习',
        type: 'SCHOOL',
        description: '课堂练习题目'
      }
    })
  ])

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { name: '选择题' },
      update: {},
      create: {
        name: '选择题',
        description: '选择题类型的题目'
      }
    }),
    prisma.category.upsert({
      where: { name: '填空题' },
      update: {},
      create: {
        name: '填空题',
        description: '填空题类型的题目'
      }
    }),
    prisma.category.upsert({
      where: { name: '解答题' },
      update: {},
      create: {
        name: '解答题',
        description: '解答题类型的题目'
      }
    })
  ])

  // Create sample questions
  const questions = await Promise.all([
    prisma.question.create({
      data: {
        title: '一元二次方程',
        content: '求解方程：x² + 2x + 1 = 0',
        type: 'essay',
        difficulty: 3,
        answer: 'x = -1（重根）',
        explanation: '这是一个完全平方式：(x + 1)² = 0，所以x = -1是重根',
        tags: JSON.stringify(['algebra', 'quadratic']),
        categoryId: categories[2].id,
        subjectId: subjects[0].id,
        gradeId: grades[0].id,
        sourceId: sources[2].id,
        userId: admin.id
      }
    }),
    prisma.question.create({
      data: {
        title: '英语单选题',
        content: 'Choose the correct answer: I ___ to school every day.',
        type: 'multiple_choice',
        difficulty: 2,
        options: JSON.stringify(['go', 'goes', 'went', 'gone']),
        answer: '0',
        explanation: '一般现在时，第一人称用动词原形',
        tags: JSON.stringify(['grammar', 'present tense']),
        categoryId: categories[0].id,
        subjectId: subjects[2].id,
        gradeId: grades[0].id,
        sourceId: sources[0].id,
        userId: editor.id
      }
    }),
    prisma.question.create({
      data: {
        title: '语文填空',
        content: '补充诗句：___，俱往矣，数风流人物，还看今朝。',
        type: 'essay',
        difficulty: 4,
        answer: '江山如此多娇',
        explanation: '出自毛泽东《沁园春·雪》',
        tags: JSON.stringify(['poetry', 'modern']),
        categoryId: categories[1].id,
        subjectId: subjects[1].id,
        gradeId: grades[1].id,
        sourceId: sources[1].id,
        userId: editor.id
      }
    })
  ])

  console.log('Database has been seeded. 🌱')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
