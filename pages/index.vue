<template>
  <div>
    <h2 class="text-3xl font-bold tracking-tight mb-8">欢迎使用题库管理系统</h2>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div class="p-6 bg-card text-card-foreground rounded-lg border shadow-sm">
        <h3 class="text-lg font-semibold mb-2">题库管理</h3>
        <p class="text-muted-foreground mb-4">管理和组织您的题目，支持多种题型和难度分级。</p>
        <NuxtLink to="/questions" class="text-primary hover:underline">进入题库 →</NuxtLink>
      </div>
      <div class="p-6 bg-card text-card-foreground rounded-lg border shadow-sm">
        <h3 class="text-lg font-semibold mb-2">分类管理</h3>
        <p class="text-muted-foreground mb-4">创建和管理题目分类，让题库组织更加清晰。</p>
        <NuxtLink to="/categories" class="text-primary hover:underline">管理分类 →</NuxtLink>
      </div>
      <div class="p-6 bg-card text-card-foreground rounded-lg border shadow-sm">
        <h3 class="text-lg font-semibold mb-2">统计分析</h3>
        <p class="text-muted-foreground mb-4">查看题库统计数据，了解题目分布情况。</p>
        <NuxtLink to="/statistics" class="text-primary hover:underline">查看统计 →</NuxtLink>
      </div>
    </div>
  </div>
</template>
