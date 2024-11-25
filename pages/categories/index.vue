<script setup lang="ts">
interface Category {
  id: number
  name: string
  description: string | null
  createdAt: string
  updatedAt: string
  _count: {
    questions: number
  }
}

const { data: categories, refresh } = await useFetch<Category[]>('/api/categories')

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

async function deleteCategory(id: number) {
  try {
    await $fetch(`/api/categories/${id}`, {
      method: 'DELETE'
    })
    refresh()
  } catch (error) {
    console.error('删除失败:', error)
  }
}
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
              :to="`/categories/${category.id}`"
              class="text-sm text-primary hover:underline"
            >
              编辑
            </NuxtLink>
            <NuxtLink
              :to="`/categories/${category.id}/view`"
              class="text-sm text-primary hover:underline"
            >
              查看
            </NuxtLink>
            <button
              @click="deleteCategory(category.id)"
              class="text-sm text-destructive hover:underline"
            >
              删除
            </button>
          </div>
        </div>
        <p class="text-muted-foreground mb-4">{{ category.description || '暂无描述' }}</p>
        <div class="flex justify-between text-sm text-muted-foreground">
          <span>题目数量: {{ category._count.questions }}</span>
          <span>创建时间: {{ formatDate(category.createdAt) }}</span>
        </div>
      </div>

      <!-- 空状态提示 -->
      <div
        v-if="!categories?.length"
        class="col-span-full p-8 text-center text-muted-foreground"
      >
        暂无分类数据，点击右上角"新建分类"按钮创建第一个分类。
      </div>
    </div>
  </div>
</template>
