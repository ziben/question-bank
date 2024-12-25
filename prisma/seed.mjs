import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

// 创建系统管理员用户
const createAdminUser = async () => {
  const hashedPassword = await bcrypt.hash('admin123', 10)
  return await prisma.user.create({
    data: {
      username: 'admin',
      email: 'admin@example.com',
      password: hashedPassword,
      name: '系统管理员'
    }
  })
}

// 角色数据
const roles = [
  { name: '系统管理员', code: 'admin', description: '系统最高权限管理员', permissions: JSON.stringify(['*']) },
  { name: '教师', code: 'teacher', description: '可以创建和管理题目、试卷', permissions: JSON.stringify(['question.*', 'exam.*']) },
  { name: '学生', code: 'student', description: '可以参与考试和查看成绩', permissions: JSON.stringify(['exam.take', 'exam.view']) },
  { name: '教务主任', code: 'academic_director', description: '负责教学计划和课程管理', permissions: JSON.stringify(['course.*', 'plan.*']) },
  { name: '题库管理员', code: 'question_bank_admin', description: '专门负责题库的维护和审核', permissions: JSON.stringify(['question.*']) },
  { name: '考试监督员', code: 'exam_supervisor', description: '负责监考和考试过程管理', permissions: JSON.stringify(['exam.*']) },
  { name: '学科组长', code: 'subject_leader', description: '负责特定学科的教学管理', permissions: JSON.stringify(['subject.*']) },
  { name: '教研组长', code: 'teaching_group_leader', description: '负责教研活动和教学改进', permissions: JSON.stringify(['research.*']) },
  { name: '年级主任', code: 'grade_director', description: '负责年级的教学管理工作', permissions: JSON.stringify(['grade.*']) },
  { name: '访客', code: 'guest', description: '有限的只读权限', permissions: JSON.stringify(['view']) }
]

// 权限数据
const permissions = [
  // 用户管理
  { groupName: '用户管理', groupCode: 'user', actionName: '创建用户', actionCode: 'create', code: 'user.create', description: '创建新用户' },
  { groupName: '用户管理', groupCode: 'user', actionName: '编辑用户', actionCode: 'edit', code: 'user.edit', description: '编辑用户信息' },
  { groupName: '用户管理', groupCode: 'user', actionName: '删除用户', actionCode: 'delete', code: 'user.delete', description: '删除用户' },
  { groupName: '用户管理', groupCode: 'user', actionName: '查看用户', actionCode: 'view', code: 'user.view', description: '查看用户信息' },
  
  // 角色管理
  { groupName: '角色管理', groupCode: 'role', actionName: '创建角色', actionCode: 'create', code: 'role.create', description: '创建新角色' },
  { groupName: '角色管理', groupCode: 'role', actionName: '编辑角色', actionCode: 'edit', code: 'role.edit', description: '编辑角色信息' },
  { groupName: '角色管理', groupCode: 'role', actionName: '删除角色', actionCode: 'delete', code: 'role.delete', description: '删除角色' },
  { groupName: '角色管理', groupCode: 'role', actionName: '查看角色', actionCode: 'view', code: 'role.view', description: '查看角色信息' },
  
  // 题目管理
  { groupName: '题目管理', groupCode: 'question', actionName: '创建题目', actionCode: 'create', code: 'question.create', description: '创建新题目' },
  { groupName: '题目管理', groupCode: 'question', actionName: '编辑题目', actionCode: 'edit', code: 'question.edit', description: '编辑题目' },
  { groupName: '题目管理', groupCode: 'question', actionName: '删除题目', actionCode: 'delete', code: 'question.delete', description: '删除题目' },
  { groupName: '题目管理', groupCode: 'question', actionName: '查看题目', actionCode: 'view', code: 'question.view', description: '查看题目' },
  
  // 考试管理
  { groupName: '考试管理', groupCode: 'exam', actionName: '创建考试', actionCode: 'create', code: 'exam.create', description: '创建新考试' },
  { groupName: '考试管理', groupCode: 'exam', actionName: '编辑考试', actionCode: 'edit', code: 'exam.edit', description: '编辑考试信息' },
  { groupName: '考试管理', groupCode: 'exam', actionName: '删除考试', actionCode: 'delete', code: 'exam.delete', description: '删除考试' },
  { groupName: '考试管理', groupCode: 'exam', actionName: '查看考试', actionCode: 'view', code: 'exam.view', description: '查看考试信息' },
  { groupName: '考试管理', groupCode: 'exam', actionName: '参加考试', actionCode: 'take', code: 'exam.take', description: '参加考试' }
]

// 测试用户数据
const users = [
  { username: 'teacher1', email: 'teacher1@example.com', password: 'teacher123', name: '张老师', roleCode: 'teacher' },
  { username: 'student1', email: 'student1@example.com', password: 'student123', name: '李同学', roleCode: 'student' },
  { username: 'director1', email: 'director1@example.com', password: 'director123', name: '王主任', roleCode: 'academic_director' }
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
const generateQuestions = (userId) => {
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
      answer: 'A',
      analysis: `这是第 ${i + 1} 道题目的解析...`,
      difficulty,
      status: 'DRAFT',
      category: { connect: { id: categoryId } },
      subject: { connect: { id: subjectId } },
      grade: { connect: { id: gradeId } },
      source: { connect: { id: sourceId } },
      createdBy: { connect: { id: userId } },
      updatedBy: { connect: { id: userId } }
    }
    
    questions.push(question)
  }
  
  return questions
}

// 主函数
const main = async () => {
  console.log('开始生成种子数据...')
  
  try {
    // 1. 创建管理员用户
    const admin = await createAdminUser()
    console.log('管理员用户已创建')

    // 2. 创建角色数据
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

    // 3. 创建管理员角色关联
    await prisma.userRole.create({
      data: {
        userId: admin.id,
        roleId: (await prisma.role.findUnique({ where: { code: 'admin' } })).id
      }
    })
    console.log('管理员角色关联已创建')

    // 4. 创建权限数据
    for (const permission of permissions) {
      await prisma.permission.create({
        data: {
          ...permission,
          createdBy: { connect: { id: admin.id } },
          updatedBy: { connect: { id: admin.id } }
        }
      })
    }
    console.log('权限数据已创建')

    // 5. 创建分类数据
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

    // 6. 创建学科数据
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

    // 7. 创建年级数据
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

    // 8. 创建来源数据
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

    // 9. 创建标签类别数据
    for (const category of tagCategories) {
      await prisma.tagCategory.create({
        data: {
          ...category,
          createdBy: { connect: { id: admin.id } },
          updatedBy: { connect: { id: admin.id } }
        }
      })
    }
    console.log('标签类别数据已创建')

    // 10. 创建标签数据
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

    // 11. 创建用户数据
    for (const user of users) {
      const hashedPassword = await bcrypt.hash(user.password, 10)
      const roleCode = user.roleCode
      delete user.roleCode
      delete user.password
      
      const newUser = await prisma.user.create({
        data: {
          ...user,
          password: hashedPassword,
          roles: {
            create: {
              role: {
                connect: { code: roleCode }
              }
            }
          }
        }
      })
    }
    console.log('用户数据已创建')

    // 12. 创建问题数据
    const questions = generateQuestions(admin.id)
    for (const question of questions) {
      await prisma.question.create({
        data: question
      })
    }
    console.log('问题数据已创建')
  } catch (error) {
    console.error('错误:', error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
