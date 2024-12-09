<script setup lang="ts">
import type { DifficultyLevel } from '~/types';

const route = useRoute()
const router = useRouter()

interface Category {
  id: number
  name: string
  description: string | null
}

interface Question {
  id: number
  title: string
  type: string
  difficulty: number
  categoryId: number
  content: string
  options: string | null
  correctAnswer: string
  explanation: string | null
  tags: string | null
}

const formData = ref({
  title: '',
  type: 'multiple_choice',
  difficulty: 3 as DifficultyLevel,
  categoryId: '',
  content: '',
  answer: '',
  options: '',
  explanation: '',
  tags: ''
})

const types = [
  { value: 'multiple_choice', label: '选择题' },
  { value: 'true_false', label: '判断题' },
  { value: 'essay', label: '简答题' }
]

const difficulties = [
  { value: '1', label: '简单' },
  { value: '2', label: '中等' },
  { value: '3', label: '困难' }
]

const id = 1
const { data: categories } = await useFetch<Category[]>('/api/categories')
const { data: question } = await useFetch<Question>(`/api/questions/${id}`)

// 加载题目数据
watchEffect(() => {
  if (question.value) {
    formData.value = {
      title: question.value.title,
      type: question.value.type,
      difficulty: question.value.difficulty as DifficultyLevel,
      categoryId: String(question.value.categoryId),
      content: question.value.content,
      answer: question.value.correctAnswer,
      options: question.value.options || '',
      explanation: question.value.explanation || '',
      tags: question.value.tags || ''
    }
  }
})

const showOptions = computed(() => formData.value.type === 'multiple_choice')
const showPreview = ref(false)

function formatType(type: string): string {
  const typeMap: { [key: string]: string } = {
    'multiple_choice': '选择题',
    'true_false': '判断题',
    'essay': '简答题'
  }
  return typeMap[type] || type
}

function formatDifficulty(difficulty: string): string {
  const difficultyMap: { [key: string]: string } = {
    '1': '简单',
    '2': '中等',
    '3': '困难'
  }
  return difficultyMap[difficulty] || difficulty
}

function openPreview() {
  showPreview.value = true
}

function closePreview() {
  showPreview.value = false
}

const selectedCategory = computed(() => {
  return categories.value?.find(c => c.id === Number(formData.value.categoryId)) ?? undefined
})

const handleSubmit = async () => {
  try {
    await useFetch(`/api/questions/${id}`, {
      method: 'PUT',
      body: {
        title: formData.value.title,
        type: formData.value.type,
        difficulty: Number(formData.value.difficulty),
        categoryId: Number(formData.value.categoryId),
        content: formData.value.content,
        options: formData.value.options,
        correctAnswer: formData.value.answer,
        explanation: formData.value.explanation,
        tags: formData.value.tags
      }
    })
    router.push('/questions')
  } catch (error) {
    console.error('保存失败:', error)
  }
}
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-3xl font-bold tracking-tight">编辑题目</h2>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid gap-4">
        <div class="space-y-2">
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="title">
            标题
          </label>
          <input
            id="title"
            v-model="formData.title"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="请输入题目标题"
            required
          />
        </div>

        <div class="grid gap-4 md:grid-cols-3">
          <div class="space-y-2">
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="type">
              类型
            </label>
            <select
              id="type"
              v-model="formData.type"
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option v-for="type in types" :key="type.value" :value="type.value">{{ type.label }}</option>
            </select>
          </div>

          <div class="space-y-2">
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="difficulty">
              难度
            </label>
            <select
              id="difficulty"
              v-model="formData.difficulty"
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option v-for="difficulty in difficulties" :key="difficulty.value" :value="difficulty.value">{{ difficulty.label }}</option>
            </select>
          </div>

          <div class="space-y-2">
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="category">
              分类
            </label>
            <select
              id="category"
              v-model="formData.categoryId"
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              required
            >
              <option value="" disabled>请选择分类</option>
              <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
            </select>
          </div>
        </div>

        <div class="space-y-2">
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="content">
            题目内容
          </label>
          <textarea
            id="content"
            v-model="formData.content"
            class="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="请输入题目内容"
            required
          />
        </div>

        <div v-if="showOptions" class="space-y-2">
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="options">
            选项
          </label>
          <textarea
            id="options"
            v-model="formData.options"
            class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="请输入选项，每行一个选项"
            required
          />
        </div>

        <div class="space-y-2">
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="answer">
            参考答案
          </label>
          <textarea
            id="answer"
            v-model="formData.answer"
            class="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="请输入参考答案"
            required
          />
        </div>

        <div class="space-y-2">
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="explanation">
            解析
          </label>
          <textarea
            id="explanation"
            v-model="formData.explanation"
            class="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="请输入题目解析（可选）"
          />
        </div>

        <div class="space-y-2">
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="tags">
            标签
          </label>
          <input
            id="tags"
            v-model="formData.tags"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="请输入标签，用逗号分隔（可选）"
          />
        </div>
      </div>

      <div class="flex gap-4">
        <button
          type="button"
          @click="openPreview"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          预览
        </button>
        <button
          type="submit"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          保存
        </button>
        <NuxtLink
          to="/questions"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          取消
        </NuxtLink>
      </div>
    </form>

    <!-- 预览对话框 -->
    <div v-if="showPreview" class="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold">题目预览</h3>
          <button
            @click="closePreview"
            class="text-gray-500 hover:text-gray-700"
          >
            关闭
          </button>
        </div>
        
        <div class="space-y-4">
          <div>
            <div class="font-medium text-gray-700">标题</div>
            <div>{{ formData.title || '未填写' }}</div>
          </div>

          <div>
            <div class="font-medium text-gray-700">题目类型</div>
            <div>{{ formatType(formData.type) }}</div>
          </div>
          
          <div>
            <div class="font-medium text-gray-700">难度</div>
            <div>{{ formatDifficulty(formData.difficulty.toString()) }}</div>
          </div>
          
          <div>
            <div class="font-medium text-gray-700">分类</div>
            <div>{{ selectedCategory?.name || '未选择' }}</div>
          </div>
          
          <div>
            <div class="font-medium text-gray-700">题目内容</div>
            <div class="whitespace-pre-wrap">{{ formData.content || '未填写' }}</div>
          </div>
          
          <template v-if="showOptions">
            <div>
              <div class="font-medium text-gray-700">选项</div>
              <div class="whitespace-pre-wrap">{{ formData.options || '未填写' }}</div>
            </div>
          </template>
          
          <div>
            <div class="font-medium text-gray-700">答案</div>
            <div class="whitespace-pre-wrap">{{ formData.answer || '未填写' }}</div>
          </div>
          
          <div v-if="formData.explanation">
            <div class="font-medium text-gray-700">解析</div>
            <div class="whitespace-pre-wrap">{{ formData.explanation }}</div>
          </div>
          
          <div v-if="formData.tags">
            <div class="font-medium text-gray-700">标签</div>
            <div class="whitespace-pre-wrap">{{ formData.tags }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
