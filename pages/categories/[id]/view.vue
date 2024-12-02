<script setup lang="ts">
const route = useRoute()
// Type assertion for route params
const params = route.params as { id: string }

interface Category {
  id: number
  name: string
  description: string | null
  createdAt: string
  updatedAt: string
  questions: Array<{
    id: number
    title: string
    type: string
    difficulty: string
    createdAt: string
  }>
}

const { data: category } = await useFetch<Category>(`/api/categories/${params.id}`)

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
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-3xl font-bold tracking-tight">分类详情</h2>
      <div class="flex gap-4">
        <NuxtLink :to="`/categories/${category?.id}`"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
          编辑分类
        </NuxtLink>
        <NuxtLink to="/categories"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
          返回列表
        </NuxtLink>
      </div>
    </div>

    <div class="space-y-8">
      <div class="p-6 bg-card text-card-foreground rounded-lg border shadow-sm">
        <h3 class="text-lg font-semibold mb-4">基本信息</h3>
        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <span class="text-sm text-muted-foreground">分类名称：</span>
              <span class="text-sm">{{ category?.name }}</span>
            </div>
            <div>
              <span class="text-sm text-muted-foreground">创建时间：</span>
              <span class="text-sm">{{ formatDate(category?.createdAt || '') }}</span>
            </div>
          </div>
          <div>
            <span class="text-sm text-muted-foreground">描述：</span>
            <p class="text-sm mt-1">{{ category?.description || '暂无描述' }}</p>
          </div>
        </div>
      </div>

      <div class="p-6 bg-card text-card-foreground rounded-lg border shadow-sm">
        <h3 class="text-lg font-semibold mb-4">题目列表</h3>
        <div class="rounded-md border">
          <table class="w-full">
            <thead>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th class="h-12 px-4 text-left align-middle font-medium">ID</th>
                <th class="h-12 px-4 text-left align-middle font-medium">标题</th>
                <th class="h-12 px-4 text-left align-middle font-medium">类型</th>
                <th class="h-12 px-4 text-left align-middle font-medium">难度</th>
                <th class="h-12 px-4 text-left align-middle font-medium">创建时间</th>
                <th class="h-12 px-4 text-left align-middle font-medium">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="question in category?.questions" :key="question.id"
                class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4">{{ question.id }}</td>
                <td class="p-4">{{ question.title }}</td>
                <td class="p-4">{{ formatType(question.type) }}</td>
                <td class="p-4">{{ formatDifficulty(question.difficulty) }}</td>
                <td class="p-4">{{ formatDate(question.createdAt) }}</td>
                <td class="p-4">
                  <NuxtLink :to="`/questions/${question.id}`" class="text-sm text-primary hover:underline">
                    查看
                  </NuxtLink>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- 空状态提示 -->
          <div v-if="!category?.questions?.length" class="p-8 text-center text-muted-foreground">
            该分类下暂无题目。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
