import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 创建标签类别
  const categories = await Promise.all([
    // 来源
    prisma.tagCategory.create({
      data: {
        name: '来源',
        code: 'source',
        description: '题目的来源',
        allowMultiple: false,
        sortOrder: 1,
      },
    }),
    // 难度
    prisma.tagCategory.create({
      data: {
        name: '难度',
        code: 'difficulty',
        description: '题目的难度等级',
        allowMultiple: false,
        sortOrder: 2,
      },
    }),
    // 题类
    prisma.tagCategory.create({
      data: {
        name: '题类',
        code: 'question_type',
        description: '题目的类型',
        allowMultiple: false,
        sortOrder: 3,
      },
    }),
    // 省份
    prisma.tagCategory.create({
      data: {
        name: '省份',
        code: 'province',
        description: '题目所属省份',
        allowMultiple: false,
        sortOrder: 4,
      },
    }),
    // 年份
    prisma.tagCategory.create({
      data: {
        name: '年份',
        code: 'year',
        description: '题目的年份',
        allowMultiple: false,
        sortOrder: 5,
      },
    }),
    // 学科素养
    prisma.tagCategory.create({
      data: {
        name: '学科素养',
        code: 'literacy',
        description: '题目考察的学科素养',
        allowMultiple: true,
        sortOrder: 6,
      },
    }),
    // 命题特征
    prisma.tagCategory.create({
      data: {
        name: '命题特征',
        code: 'feature',
        description: '题目的命题特征',
        allowMultiple: true,
        sortOrder: 7,
      },
    }),
  ])

  const [sourceCategory, difficultyCategory, questionTypeCategory, provinceCategory, yearCategory, literacyCategory, featureCategory] = categories

  // 创建标签
  // 1. 来源标签
  const examTag = await prisma.tag.create({
    data: {
      name: '试卷',
      code: 'exam',
      categoryId: sourceCategory.id,
      sortOrder: 1,
    },
  })

  await Promise.all([
    prisma.tag.create({
      data: {
        name: '高考真题',
        code: 'gaokao',
        categoryId: sourceCategory.id,
        parentId: examTag.id,
        sortOrder: 1,
      },
    }),
    prisma.tag.create({
      data: {
        name: '模拟试题',
        code: 'mock',
        categoryId: sourceCategory.id,
        parentId: examTag.id,
        sortOrder: 2,
      },
    }),
  ])

  // 2. 难度标签
  await Promise.all([
    prisma.tag.create({
      data: {
        name: '简单',
        code: 'easy',
        categoryId: difficultyCategory.id,
        sortOrder: 1,
      },
    }),
    prisma.tag.create({
      data: {
        name: '中等',
        code: 'medium',
        categoryId: difficultyCategory.id,
        sortOrder: 2,
      },
    }),
    prisma.tag.create({
      data: {
        name: '困难',
        code: 'hard',
        categoryId: difficultyCategory.id,
        sortOrder: 3,
      },
    }),
  ])

  // 3. 题类标签
  await Promise.all([
    prisma.tag.create({
      data: {
        name: '选择题',
        code: 'choice',
        categoryId: questionTypeCategory.id,
        sortOrder: 1,
      },
    }),
    prisma.tag.create({
      data: {
        name: '填空题',
        code: 'blank',
        categoryId: questionTypeCategory.id,
        sortOrder: 2,
      },
    }),
    prisma.tag.create({
      data: {
        name: '解答题',
        code: 'solution',
        categoryId: questionTypeCategory.id,
        sortOrder: 3,
      },
    }),
  ])

  // 4. 省份标签（示例添加几个省份）
  await Promise.all([
    prisma.tag.create({
      data: {
        name: '北京',
        code: 'beijing',
        categoryId: provinceCategory.id,
        sortOrder: 1,
      },
    }),
    prisma.tag.create({
      data: {
        name: '上海',
        code: 'shanghai',
        categoryId: provinceCategory.id,
        sortOrder: 2,
      },
    }),
    prisma.tag.create({
      data: {
        name: '江苏',
        code: 'jiangsu',
        categoryId: provinceCategory.id,
        sortOrder: 3,
      },
    }),
  ])

  // 5. 年份标签（最近几年）
  await Promise.all([
    prisma.tag.create({
      data: {
        name: '2024',
        code: '2024',
        categoryId: yearCategory.id,
        sortOrder: 1,
      },
    }),
    prisma.tag.create({
      data: {
        name: '2023',
        code: '2023',
        categoryId: yearCategory.id,
        sortOrder: 2,
      },
    }),
    prisma.tag.create({
      data: {
        name: '2022',
        code: '2022',
        categoryId: yearCategory.id,
        sortOrder: 3,
      },
    }),
  ])

  // 6. 学科素养标签
  await Promise.all([
    prisma.tag.create({
      data: {
        name: '科学思维',
        code: 'scientific_thinking',
        categoryId: literacyCategory.id,
        sortOrder: 1,
      },
    }),
    prisma.tag.create({
      data: {
        name: '实践能力',
        code: 'practical_ability',
        categoryId: literacyCategory.id,
        sortOrder: 2,
      },
    }),
    prisma.tag.create({
      data: {
        name: '创新意识',
        code: 'innovation',
        categoryId: literacyCategory.id,
        sortOrder: 3,
      },
    }),
  ])

  // 7. 命题特征标签
  await Promise.all([
    prisma.tag.create({
      data: {
        name: '综合性',
        code: 'comprehensive',
        categoryId: featureCategory.id,
        sortOrder: 1,
      },
    }),
    prisma.tag.create({
      data: {
        name: '新颖性',
        code: 'novel',
        categoryId: featureCategory.id,
        sortOrder: 2,
      },
    }),
    prisma.tag.create({
      data: {
        name: '实践性',
        code: 'practical',
        categoryId: featureCategory.id,
        sortOrder: 3,
      },
    }),
  ])
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
