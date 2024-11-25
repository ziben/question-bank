<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 顶部导航栏 -->
    <header class="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div class="container mx-auto px-4">
        <div class="flex h-16 items-center justify-between">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center space-x-2">
            <span class="text-xl font-bold text-gray-900">题库管理系统</span>
          </NuxtLink>

          <!-- 桌面端导航 -->
          <nav class="hidden md:flex items-center space-x-8">
            <NuxtLink 
              v-for="item in navItems" 
              :key="item.path"
              :to="item.path"
              class="text-gray-600 hover:text-primary transition-colors duration-200"
              active-class="text-primary font-medium"
            >
              {{ item.name }}
            </NuxtLink>
          </nav>

          <!-- 移动端菜单按钮 -->
          <button 
            class="md:hidden p-2 rounded-md hover:bg-gray-100"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <span class="sr-only">打开菜单</span>
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="!isMobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- 移动端导航菜单 -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform -translate-y-2 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-2 opacity-0"
      >
        <div v-if="isMobileMenuOpen" class="md:hidden">
          <div class="border-t px-4 py-2 space-y-1">
            <NuxtLink
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
              active-class="text-primary bg-primary/5"
              @click="isMobileMenuOpen = false"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </header>

    <!-- 主要内容区域 -->
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>

    <!-- 页脚 -->
    <footer class="bg-white border-t mt-auto">
      <div class="container mx-auto px-4 py-6">
        <p class="text-center text-gray-500 text-sm">
          {{ new Date().getFullYear() }} 题库管理系统. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const isMobileMenuOpen = ref(false)

// 导航项配置
const navItems = [
  { name: '首页', path: '/' },
  { name: '题库', path: '/questions' },
  { name: '分类', path: '/categories' },
  { name: '统计', path: '/statistics' }
]

// 监听路由变化，关闭移动端菜单
watch(useRoute(), () => {
  isMobileMenuOpen.value = false
})
</script>

<style scoped>
.container {
  max-width: 1280px;
}
</style>
