<script setup lang="ts">
interface Question {
  id: number
  title: string
  type: string
  difficulty: string
  category: string
  createdAt: string
}

// 模拟数据
const questions = ref<Question[]>([
  {
    id: 1,
    title: '什么是Vue.js？',
    type: '简答题',
    difficulty: '简单',
    category: '前端开发',
    createdAt: '2023-10-20'
  },
  {
    id: 2,
    title: '解释React中的虚拟DOM',
    type: '论述题',
    difficulty: '中等',
    category: '前端开发',
    createdAt: '2023-10-21'
  }
])
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-3xl font-bold tracking-tight">题库管理</h2>
      <NuxtLink
        to="/questions/new"
        class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
      >
        新建题目
      </NuxtLink>
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
            <td class="p-4">{{ question.type }}</td>
            <td class="p-4">{{ question.difficulty }}</td>
            <td class="p-4">{{ question.category }}</td>
            <td class="p-4">{{ question.createdAt }}</td>
            <td class="p-4">
              <div class="flex gap-2">
                <NuxtLink
                  :to="'/questions/' + question.id"
                  class="inline-flex items-center justify-center text-sm font-medium text-primary hover:underline"
                >
                  编辑
                </NuxtLink>
                <button
                  class="inline-flex items-center justify-center text-sm font-medium text-destructive hover:underline"
                >
                  删除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
