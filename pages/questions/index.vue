<script setup lang="ts">
import type { Question, PaginatedResponse } from '~/types/question'
import { formatType, formatDifficulty, formatDate } from '~/utils/format'

interface Question {
  id: number
  title: string
  type: string
  difficulty: string
  category: {
    id: number
    name: string
  }
  createdAt: string
  content: string
  options: string | null
  answer: string
  explanation: string | null
  tags: string | null
}

interface PaginatedResponse {
  data: Question[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

const { data, refresh, error: fetchError } = await useFetch<PaginatedResponse<Question>>('/api/questions')
const questions = computed(() => data.value?.data || [])
const isDeleting = ref<number | null>(null)
const alert = useAlert()

// 监听获取数据的错误
watch(fetchError, (newError) => {
  if (newError) {
    alert.error('获取题目列表失败', '错误')
  }
})

async function deleteQuestion(id: number) {
  try {
    isDeleting.value = id
    await $fetch(`/api/questions/${id}`, {
      method: 'DELETE'
    })
    alert.success('删除成功')
    refresh()
  } catch (error) {
    console.error('删除失败:', error)
    alert.error('删除失败，请稍后重试')
  } finally {
    isDeleting.value = null
  }
}

const previewQuestion = ref<Question | null>(null)
const showPreview = ref(false)

function openPreview(question: Question) {
  previewQuestion.value = question
  showPreview.value = true
}

function closePreview() {
  showPreview.value = false
  previewQuestion.value = null
}
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-3xl font-bold tracking-tight">题库管理</h2>
      <div class="flex gap-4">
        <NuxtLink
          to="/questions/import"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          批量导入
        </NuxtLink>
        <NuxtLink
          to="/questions/new"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          新建题目
        </NuxtLink>
      </div>
    </div>

    <!-- 加载状态 -->
    <div v-if="pending" class="flex justify-center items-center py-12">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>

    <!-- 题目列表 -->
    <div v-else class="space-y-4">
      <div v-for="question in questions" :key="question.id" class="flex items-center justify-between p-4 bg-white rounded-lg shadow">
        <div class="flex-1 min-w-0">
          <h3 class="text-lg font-medium truncate">{{ question.title }}</h3>
          <div class="mt-1 flex items-center gap-2 text-sm text-gray-500">
            <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {{ formatType(question.type) }}
            </span>
            <span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
              {{ formatDifficulty(question.difficulty) }}
            </span>
            <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              {{ question.category.name }}
            </span>
            <span class="text-xs">{{ formatDate(question.createdAt) }}</span>
          </div>
        </div>
        <div class="flex items-center gap-2 ml-4">
          <button
            @click="openPreview(question)"
            class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
          </button>
          <NuxtLink
            :to="`/questions/${question.id}`"
            class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
          </NuxtLink>
          <button
            @click="deleteQuestion(question.id)"
            :disabled="isDeleting === question.id"
            class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9"
          >
            <div v-if="isDeleting === question.id" class="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
          </button>
        </div>
      </div>
    </div>

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
        
        <div v-if="previewQuestion" class="space-y-4">
          <div>
            <div class="font-medium text-gray-700">题目类型</div>
            <div>{{ formatType(previewQuestion.type) }}</div>
          </div>
          
          <div>
            <div class="font-medium text-gray-700">难度</div>
            <div>{{ formatDifficulty(previewQuestion.difficulty) }}</div>
          </div>
          
          <div>
            <div class="font-medium text-gray-700">分类</div>
            <div>{{ previewQuestion.category?.name || '未分类' }}</div>
          </div>
          
          <div>
            <div class="font-medium text-gray-700">题目内容</div>
            <div class="whitespace-pre-wrap">{{ previewQuestion.content }}</div>
          </div>
          
          <template v-if="previewQuestion.type === 'multiple_choice'">
            <div>
              <div class="font-medium text-gray-700">选项</div>
              <div class="whitespace-pre-wrap">{{ previewQuestion.options }}</div>
            </div>
          </template>
          
          <div>
            <div class="font-medium text-gray-700">答案</div>
            <div class="whitespace-pre-wrap">{{ previewQuestion.answer }}</div>
          </div>
          
          <div v-if="previewQuestion.explanation">
            <div class="font-medium text-gray-700">解析</div>
            <div class="whitespace-pre-wrap">{{ previewQuestion.explanation }}</div>
          </div>
          
          <div v-if="previewQuestion.tags">
            <div class="font-medium text-gray-700">标签</div>
            <div class="whitespace-pre-wrap">{{ previewQuestion.tags }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
