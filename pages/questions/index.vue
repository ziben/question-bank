<script setup lang="ts">
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
  questions: Question[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

const { data, refresh } = await useFetch<PaginatedResponse>('/api/questions')
const questions = computed(() => data.value?.questions || [])

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
    'easy': '简单',
    'medium': '中等',
    'hard': '困难'
  }
  return difficultyMap[difficulty] || difficulty
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

async function deleteQuestion(id: number) {
  try {
    await $fetch(`/api/questions/${id}`, {
      method: 'DELETE'
    })
    refresh()
  } catch (error) {
    console.error('删除失败:', error)
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

    <div class="rounded-md border">
      <table class="w-full">
        <thead>
          <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <th class="h-12 px-4 text-left align-middle font-medium">ID</th>
            <th class="h-12 px-4 text-left align-middle font-medium">标题</th>
            <th class="h-12 px-4 text-left align-middle font-medium">类型</th>
            <th class="h-12 px-4 text-left align-middle font-medium">难度</th>
            <th class="h-12 px-4 text-left align-middle font-medium">分类</th>
            <th class="h-12 px-4 text-left align-middle font-medium">创建时间</th>
            <th class="h-12 px-4 text-left align-middle font-medium">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="question in questions"
            :key="question.id"
            class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
          >
            <td class="p-4">{{ question.id }}</td>
            <td class="p-4">{{ question.title }}</td>
            <td class="p-4">{{ formatType(question.type) }}</td>
            <td class="p-4">{{ formatDifficulty(question.difficulty) }}</td>
            <td class="p-4">{{ question.category?.name || '未分类' }}</td>
            <td class="p-4">{{ formatDate(question.createdAt) }}</td>
            <td class="p-4">
              <div class="flex gap-2">
                <button
                  @click="openPreview(question)"
                  class="inline-flex items-center justify-center text-sm font-medium text-primary hover:underline"
                >
                  预览
                </button>
                <NuxtLink
                  :to="`/questions/${question.id}`"
                  class="inline-flex items-center justify-center text-sm font-medium text-primary hover:underline"
                >
                  编辑
                </NuxtLink>
                <button
                  @click="deleteQuestion(question.id)"
                  class="inline-flex items-center justify-center text-sm font-medium text-destructive hover:underline"
                >
                  删除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- 空状态提示 -->
      <div
        v-if="!questions.length"
        class="p-8 text-center text-muted-foreground"
      >
        暂无题目数据，点击右上角"新建题目"按钮创建第一个题目。
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
</template>
