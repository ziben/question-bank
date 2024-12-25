import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// 创建系统管理员用户
const createAdminUser = async () => {
  return await prisma.user.create({
    data: {
      username: 'admin',
      email: 'admin@example.com',
      password: 'admin123', // 实际应用中应该使用加密后的密码
      name: '系统管理员'
    }
  })
}

// 角色数据
const roles = [
  { name: '系统管理员', code: 'admin', description: '系统最高权限管理员' },
  { name: '教师', code: 'teacher', description: '可以创建和管理题目、试卷' },
  { name: '学生', code: 'student', description: '可以参与考试和查看成绩' },
  { name: '教务主任', code: 'academic_director', description: '负责教学计划和课程管理' },
  { name: '题库管理员', code: 'question_bank_admin', description: '专门负责题库的维护和审核' },
  { name: '考试监督员', code: 'exam_supervisor', description: '负责监考和考试过程管理' },
  { name: '学科组长', code: 'subject_leader', description: '负责特定学科的教学管理' },
  { name: '教研组长', code: 'teaching_group_leader', description: '负责教研活动和教学改进' },
  { name: '年级主任', code: 'grade_director', description: '负责年级的教学管理工作' },
  { name: '访客', code: 'guest', description: '有限的只读权限' }
]

// 基础数据
const categories = [
  { name: '编程基础', description: '编程语言和基础概念' },
  { name: '前端开发', description: '前端技术和框架' },
  { name: '后端开发', description: '后端技术和架构' },
  { name: '数据库', description: '数据库设计和优化' },
  { name: '系统设计', description: '系统架构和设计模式' }
]

const subjects = [
  { name: 'JavaScript', description: 'JavaScript编程语言' },
  { name: 'TypeScript', description: 'TypeScript类型系统' },
  { name: 'Vue', description: 'Vue.js框架' },
  { name: 'Node.js', description: 'Node.js后端开发' },
  { name: '数据库', description: '数据库理论与实践' }
]

const grades = [
  { name: '入门级', description: '适合编程初学者' },
  { name: '初级', description: '掌握基本概念' },
  { name: '中级', description: '能够独立开发' },
  { name: '高级', description: '系统架构能力' },
  { name: '专家级', description: '精通领域知识' }
]

const sources = [
  { name: '官方文档', type: 'INSTITUTION', description: '来自官方文档的示例' },
  { name: '实践项目', type: 'EXAM', description: '来自实际项目的案例' },
  { name: '面试题库', type: 'INSTITUTION', description: '常见面试题目' },
  { name: '社区精选', type: 'INSTITUTION', description: '开发社区精选题目' },
  { name: '原创题目', type: 'INSTITUTION', description: '平台原创题目' }
]

// 标签类别
const tagCategories = [
  { name: '难度', code: 'difficulty', description: '题目难度等级', allowMultiple: false },
  { name: '题型', code: 'type', description: '题目类型', allowMultiple: false },
  { name: '知识点', code: 'knowledge', description: '相关知识点', allowMultiple: true }
]

// 标签数据
const tags = [
  // 难度标签
  { name: '简单', code: 'easy', categoryCode: 'difficulty', sortOrder: 1 },
  { name: '中等', code: 'medium', categoryCode: 'difficulty', sortOrder: 2 },
  { name: '困难', code: 'hard', categoryCode: 'difficulty', sortOrder: 3 },
  
  // 题型标签
  { name: '单选题', code: 'single_choice', categoryCode: 'type', sortOrder: 1 },
  { name: '多选题', code: 'multiple_choice', categoryCode: 'type', sortOrder: 2 },
  { name: '判断题', code: 'true_false', categoryCode: 'type', sortOrder: 3 },
  { name: '填空题', code: 'fill_blank', categoryCode: 'type', sortOrder: 4 },
  { name: '简答题', code: 'short_answer', categoryCode: 'type', sortOrder: 5 },
  { name: '编程题', code: 'programming', categoryCode: 'type', sortOrder: 6 },
  
  // 知识点标签
  { name: 'JavaScript基础', code: 'js_basic', categoryCode: 'knowledge', sortOrder: 1 },
  { name: 'TypeScript类型', code: 'ts_type', categoryCode: 'knowledge', sortOrder: 2 },
  { name: 'Vue3组件', code: 'vue3_component', categoryCode: 'knowledge', sortOrder: 3 },
  { name: 'Nuxt3框架', code: 'nuxt3', categoryCode: 'knowledge', sortOrder: 4 },
  { name: 'Node.js', code: 'nodejs', categoryCode: 'knowledge', sortOrder: 5 },
  { name: '数据库设计', code: 'database', categoryCode: 'knowledge', sortOrder: 6 },
  { name: 'HTTP协议', code: 'http', categoryCode: 'knowledge', sortOrder: 7 },
  { name: 'REST API', code: 'rest_api', categoryCode: 'knowledge', sortOrder: 8 },
  { name: '算法', code: 'algorithm', categoryCode: 'knowledge', sortOrder: 9 },
  { name: '设计模式', code: 'design_pattern', categoryCode: 'knowledge', sortOrder: 10 }
]

// 生成1000个问题
const generateQuestions = (userId: number) => {
  const questions = []
  
  for (let i = 0; i < 1000; i++) {
    const categoryId = Math.floor(Math.random() * categories.length) + 1
    const subjectId = Math.floor(Math.random() * subjects.length) + 1
    const gradeId = Math.floor(Math.random() * grades.length) + 1
    const sourceId = Math.floor(Math.random() * sources.length) + 1
    const difficulty = Math.floor(Math.random() * 5) + 1
    
    const question = {
      title: `题目 ${i + 1}`,
      content: `这是第 ${i + 1} 道题目的内容...`,
      type: 'multiple_choice',
      difficulty,
      options: JSON.stringify(['选项A', '选项B', '选项C', '选项D']),
      answer: 'A',
      explanation: `这是第 ${i + 1} 道题目的解析...`,
      categoryId,
      subjectId,
      gradeId,
      sourceId,
      createdById: userId,
      updatedById: userId
    }
    
    questions.push(question)
  }
  
  return questions
}

// 主函数
async function main() {
  console.log('开始生成种子数据...')
  
  // 1. 创建管理员用户
  const admin = await createAdminUser()
  console.log('管理员用户已创建')
  
  // 2. 创建角色
  for (const role of roles) {
    await prisma.role.create({
      data: {
        ...role,
        createdBy: { connect: { id: admin.id } },
        updatedBy: { connect: { id: admin.id } }
      }
    })
  }
  console.log('角色数据已创建')
  
  // 3. 创建分类
  for (const category of categories) {
    await prisma.category.create({
      data: {
        ...category,
        createdBy: { connect: { id: admin.id } },
        updatedBy: { connect: { id: admin.id } }
      }
    })
  }
  console.log('分类数据已创建')
  
  // 4. 创建学科
  for (const subject of subjects) {
    await prisma.subject.create({
      data: {
        ...subject,
        createdBy: { connect: { id: admin.id } },
        updatedBy: { connect: { id: admin.id } }
      }
    })
  }
  console.log('学科数据已创建')
  
  // 5. 创建年级
  for (const grade of grades) {
    await prisma.grade.create({
      data: {
        ...grade,
        createdBy: { connect: { id: admin.id } },
        updatedBy: { connect: { id: admin.id } }
      }
    })
  }
  console.log('年级数据已创建')
  
  // 6. 创建来源
  for (const source of sources) {
    await prisma.source.create({
      data: {
        ...source,
        createdBy: { connect: { id: admin.id } },
        updatedBy: { connect: { id: admin.id } }
      }
    })
  }
  console.log('来源数据已创建')
  
  // 7. 创建标签类别
  for (const category of tagCategories) {
    await prisma.tagCategory.create({
      data: {
        ...category,
        createdBy: { connect: { id: admin.id } },
        updatedBy: { connect: { id: admin.id } }
      }
    })
  }
  console.log('标签类别已创建')
  
  // 8. 创建标签
  for (const tag of tags) {
    const category = await prisma.tagCategory.findFirst({
      where: { code: tag.categoryCode }
    })
    if (category) {
      await prisma.tag.create({
        data: {
          name: tag.name,
          code: tag.code,
          sortOrder: tag.sortOrder,
          category: { connect: { id: category.id } },
          createdBy: { connect: { id: admin.id } },
          updatedBy: { connect: { id: admin.id } }
        }
      })
    }
  }
  console.log('标签数据已创建')
  
  // 9. 创建问题
  const questions = generateQuestions(admin.id)
  for (const question of questions) {
    await prisma.question.create({
      data: question
    })
  }
  console.log('问题数据已创建')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
