<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-8">题库统计</h1>
    
    <!-- 总览 -->
    <div class="bg-white rounded-lg shadow p-6 mb-8">
      <h2 class="text-xl font-semibold mb-4">总览</h2>
      <div class="text-4xl font-bold text-blue-600">
        {{ statistics?.totalQuestions || 0 }}
        <span class="text-base text-gray-600 ml-2">题目</span>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <!-- 难度分布 -->
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">难度分布</h2>
        <div class="space-y-4">
          <div v-for="item in statistics?.byDifficulty" :key="item.difficulty" class="flex justify-between items-center">
            <span class="capitalize">{{ formatDifficulty(item.difficulty) }}</span>
            <div class="flex items-center">
              <div class="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                <div class="bg-blue-600 h-2.5 rounded-full" 
                     :style="{ width: `${(item._count / (statistics?.totalQuestions || 1) * 100)}%` }">
                </div>
              </div>
              <span class="text-sm text-gray-600">{{ item._count }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 题型分布 -->
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">题型分布</h2>
        <div class="space-y-4">
          <div v-for="item in statistics?.byType" :key="item.type" class="flex justify-between items-center">
            <span class="capitalize">{{ formatType(item.type) }}</span>
            <div class="flex items-center">
              <div class="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                <div class="bg-green-600 h-2.5 rounded-full" 
                     :style="{ width: `${(item._count / (statistics?.totalQuestions || 1) * 100)}%` }">
                </div>
              </div>
              <span class="text-sm text-gray-600">{{ item._count }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 分类分布 -->
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">分类分布</h2>
        <div class="space-y-4">
          <div v-for="category in statistics?.byCategory" :key="category.id" class="flex justify-between items-center">
            <span>{{ category.name }}</span>
            <div class="flex items-center">
              <div class="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                <div class="bg-purple-600 h-2.5 rounded-full" 
                     :style="{ width: `${(category._count.questions / (statistics?.totalQuestions || 1) * 100)}%` }">
                </div>
              </div>
              <span class="text-sm text-gray-600">{{ category._count.questions }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 最近添加的题目 -->
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-xl font-semibold mb-4">最近添加</h2>
      <div class="space-y-4">
        <div v-for="question in statistics?.recentQuestions" :key="question.id" 
             class="flex justify-between items-center p-4 hover:bg-gray-50 rounded-lg">
          <div class="flex-1">
            <h3 class="font-medium">{{ question.title }}</h3>
            <div class="text-sm text-gray-500 mt-1">
              <span class="mr-4">分类：{{ question.category.name }}</span>
              <span class="mr-4">难度：{{ formatDifficulty(question.difficulty) }}</span>
              <span>类型：{{ formatType(question.type) }}</span>
            </div>
          </div>
          <NuxtLink :to="`/questions/${question.id}`" 
                   class="text-blue-600 hover:text-blue-800 text-sm">
            查看详情
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: statistics } = await useFetch('/api/statistics')

function formatType(type: string): string {
  const typeMap: { [key: string]: string } = {
    'multiple_choice': '选择题',
    'true_false': '判断题',
    'essay': '问答题'
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
</script>
