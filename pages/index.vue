<template>
  <div class="container py-8 space-y-8">
    <div class="flex flex-col gap-2">
      <h2 class="text-3xl font-bold tracking-tight">欢迎使用题库管理系统</h2>
      <p class="text-muted-foreground">
        一个现代化的题库管理系统，帮助您更好地组织和管理题目。
      </p>
    </div>

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card class="transition-colors">
        <CardHeader>
          <CardTitle>题库管理</CardTitle>
          <CardDescription>
            管理和组织您的题目，支持多种题型和难度分级。
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <NuxtLink to="/questions"
            class="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            进入题库
            <Icon name="material-symbols:category-outline-rounded" class="ml-1 h-4 w-4" />
          </NuxtLink>
        </CardFooter>
      </Card>

      <Card class="transition-colors">
        <CardHeader>
          <CardTitle>分类管理</CardTitle>
          <CardDescription>
            创建和管理题目分类，让题库组织更加清晰。
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <NuxtLink to="/categories"
            class="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            管理分类
            <Icon name="material-symbols:category-outline-rounded" class="ml-1 h-4 w-4" />
          </NuxtLink>
        </CardFooter>
      </Card>

      <Card class=" transition-colors">
        <CardHeader>
          <CardTitle>统计分析</CardTitle>
          <CardDescription>
            查看题库统计数据，了解题目分布情况。
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <NuxtLink to="/statistics"
            class="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            查看统计
            <Icon name="material-symbols:category-outline-rounded" class="ml-1 h-4 w-4" />
          </NuxtLink>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/shadcn/card'

definePageMeta({
  auth: true
})
</script>
