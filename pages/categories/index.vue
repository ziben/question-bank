<script setup lang="ts">
interface Category {
  id: number
  name: string
  description: string
  questionCount: number
  createdAt: string
}

// 模拟数据
const categories = ref<Category[]>([
  {
    id: 1,
    name: '前端开发',
    description: '包含HTML、CSS、JavaScript等前端技术相关的题目',
    questionCount: 25,
    createdAt: '2023-10-20'
  },
  {
    id: 2,
    name: '后端开发',
    description: '包含服务器端编程、数据库等后端技术相关的题目',
    questionCount: 18,
    createdAt: '2023-10-21'
  }
])
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-3xl font-bold tracking-tight">分类管理</h2>
      <NuxtLink
        to="/categories/new"
        class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
      >
        新建分类
      </NuxtLink>
    </div>

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="category in categories"
        :key="category.id"
        class="p-6 bg-card text-card-foreground rounded-lg border shadow-sm"
      >
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-lg font-semibold">{{ category.name }}</h3>
          <div class="flex gap-2">
            <NuxtLink
              :to="'/categories/' + category.id"
              class="text-sm text-primary hover:underline"
            >
              编辑
            </NuxtLink>
            <button
              class="text-sm text-destructive hover:underline"
            >
              删除
            </button>
          </div>
        </div>
        <p class="text-muted-foreground mb-4">{{ category.description }}</p>
        <div class="flex justify-between text-sm text-muted-foreground">
          <span>题目数量: {{ category.questionCount }}</span>
          <span>创建时间: {{ category.createdAt }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
