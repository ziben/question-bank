<script setup lang="ts">
import { ref } from 'vue'
import Papa from 'papaparse'

const router = useRouter()
const fileInput = ref<HTMLInputElement | null>(null)
const processing = ref(false)
const progress = ref(0)
const error = ref('')

interface QuestionImport {
  title: string
  type: string
  difficulty: string
  content: string
  answer: string
  options?: string
  explanation?: string
  categoryId?: number
}

const handleFileUpload = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file) return

  processing.value = true
  error.value = ''
  progress.value = 0

  try {
    const questions = await parseCSV(file)
    await importQuestions(questions)
    router.push('/questions')
  } catch (e) {
    error.value = e instanceof Error ? e.message : '导入失败'
  } finally {
    processing.value = false
  }
}

const parseCSV = (file: File): Promise<QuestionImport[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        if (results.errors.length > 0) {
          reject(new Error('CSV 文件格式错误'))
          return
        }

        const questions = results.data as QuestionImport[]
        // 验证必填字段
        const isValid = questions.every(q => 
          q.title && q.type && q.difficulty && q.content && q.answer
        )

        if (!isValid) {
          reject(new Error('存在缺少必填字段的记录'))
          return
        }

        resolve(questions)
      },
      error: (error) => {
        reject(new Error(`解析 CSV 文件失败: ${error}`))
      }
    })
  })
}

const importQuestions = async (questions: QuestionImport[]) => {
  const total = questions.length
  let imported = 0

  for (const question of questions) {
    try {
      await $fetch('/api/questions', {
        method: 'POST',
        body: question
      })
      imported++
      progress.value = Math.round((imported / total) * 100)
    } catch (e) {
      throw new Error(`导入第 ${imported + 1} 条记录时失败`)
    }
  }
}

const downloadTemplate = () => {
  const headers = ['title', 'type', 'difficulty', 'content', 'answer', 'options', 'explanation', 'categoryId']
  const csvContent = Papa.unparse([headers])
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = '题目导入模板.csv'
  link.click()
}
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-3xl font-bold tracking-tight">批量导入题目</h2>
      <div class="flex gap-4">
        <button
          @click="downloadTemplate"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          下载模板
        </button>
        <NuxtLink
          to="/questions"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          返回列表
        </NuxtLink>
      </div>
    </div>

    <div class="max-w-2xl space-y-8">
      <div class="p-6 bg-card text-card-foreground rounded-lg border shadow-sm">
        <h3 class="text-lg font-semibold mb-4">导入说明</h3>
        <div class="space-y-2 text-sm text-muted-foreground">
          <p>1. 请先下载模板文件，按照模板格式填写题目信息</p>
          <p>2. 必填字段：标题、类型、难度、内容、答案</p>
          <p>3. 选填字段：选项（选择题必填）、解析、分类ID</p>
          <p>4. 题目类型：multiple_choice（选择题）、true_false（判断题）、essay（简答题）</p>
          <p>5. 难度等级：easy（简单）、medium（中等）、hard（困难）</p>
        </div>
      </div>

      <div class="p-6 bg-card text-card-foreground rounded-lg border shadow-sm">
        <div class="space-y-4">
          <input
            ref="fileInput"
            type="file"
            accept=".csv"
            @change="handleFileUpload"
            class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
          />

          <div v-if="processing" class="space-y-2">
            <div class="w-full bg-secondary rounded-full h-2.5">
              <div
                class="bg-primary h-2.5 rounded-full transition-all"
                :style="{ width: `${progress}%` }"
              ></div>
            </div>
            <p class="text-sm text-muted-foreground">正在导入... {{ progress }}%</p>
          </div>

          <p v-if="error" class="text-sm text-destructive">{{ error }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
