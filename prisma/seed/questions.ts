import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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

// 问题类型
const questionTypes = [
  '单选题',
  '多选题',
  '判断题',
  '填空题',
  '简答题',
  '编程题',
  '算法题',
  '数据库题',
  '系统设计题',
  '案例分析题'
]

// 难度级别
const difficultyLevels = ['简单', '中等', '困难']

// 知识点
const knowledgePoints = [
  'JavaScript基础',
  'TypeScript类型系统',
  'Vue3组件开发',
  'Nuxt3服务端渲染',
  'Node.js后端开发',
  '数据库设计',
  'HTTP协议',
  'REST API设计',
  '算法与数据结构',
  '设计模式',
  '前端性能优化',
  '前端工程化',
  '微服务架构',
  '容器化部署'
]

// 生成1000个问题
const generateQuestions = () => {
  const questions = []
  
  for (let i = 0; i < 1000; i++) {
    const type = questionTypes[Math.floor(Math.random() * questionTypes.length)]
    const difficulty = difficultyLevels[Math.floor(Math.random() * difficultyLevels.length)]
    const points = Array.from(
      { length: Math.floor(Math.random() * 3) + 1 },
      () => knowledgePoints[Math.floor(Math.random() * knowledgePoints.length)]
    )
    
    const question = {
      title: `题目 ${i + 1}: ${points.join('、')}相关的${type}`,
      content: `这是一道关于${points.join('、')}的${type}，难度为${difficulty}...`,
      type,
      difficulty,
      score: Math.floor(Math.random() * 5) + 1,
      answer: type === '判断题' ? 
        Math.random() > 0.5 ? '正确' : '错误' :
        `标准答案 ${i + 1}`,
      analysis: `解析 ${i + 1}: 本题主要考察${points.join('、')}的相关知识点...`,
      knowledgePoints: points,
      createTime: new Date(),
      updateTime: new Date(),
      createdBy: roles[Math.floor(Math.random() * roles.length)].code
    }
    
    questions.push(question)
  }
  
  return questions
}

// 主函数
async function main() {
  console.log('开始生成种子数据...')
  
  // 创建角色
  for (const role of roles) {
    await prisma.role.create({
      data: role
    })
  }
  console.log('角色数据已创建')
  
  // 创建问题
  const questions = generateQuestions()
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
