<template>
  <div class="min-h-screen bg-gray-100">
    <!-- 导航栏 -->
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center">
              <NuxtLink to="/" class="text-xl font-bold text-gray-900">
                题库系统
              </NuxtLink>
            </div>
            <!-- 导航链接 -->
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NuxtLink
                to="/"
                class="inline-flex items-center px-1 pt-1 border-b-2"
                :class="[
                  $route.path === '/'
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                ]"
              >
                首页
              </NuxtLink>
              <NuxtLink
                to="/questions"
                class="inline-flex items-center px-1 pt-1 border-b-2"
                :class="[
                  $route.path.startsWith('/questions')
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                ]"
              >
                题库管理
              </NuxtLink>
              <NuxtLink
                to="/categories"
                class="inline-flex items-center px-1 pt-1 border-b-2"
                :class="[
                  $route.path.startsWith('/categories')
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                ]"
              >
                分类管理
              </NuxtLink>
              <NuxtLink
                to="/statistics"
                class="inline-flex items-center px-1 pt-1 border-b-2"
                :class="[
                  $route.path.startsWith('/statistics')
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                ]"
              >
                统计分析
              </NuxtLink>
              <NuxtLink
                v-if="authStore.isAdmin"
                to="/admin/users"
                class="inline-flex items-center px-1 pt-1 border-b-2"
                :class="[
                  $route.path.startsWith('/admin/users')
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                ]"
              >
                用户管理
              </NuxtLink>
            </div>
          </div>

          <!-- 用户菜单 -->
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <div class="ml-3 relative">
              <div v-if="authStore.isAuthenticated">
                <button
                  type="button"
                  class="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  @click="showUserMenu = !showUserMenu"
                >
                  <span class="sr-only">打开用户菜单</span>
                  <div class="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                    {{ authStore.user?.username.charAt(0).toUpperCase() }}
                  </div>
                </button>
              </div>
              <div
                v-if="showUserMenu"
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="px-4 py-2 text-sm text-gray-700">
                  {{ authStore.user?.username }}
                </div>
                <div class="border-t border-gray-100"></div>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  @click.prevent="handleLogout"
                >
                  退出登录
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- 主要内容 -->
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useRouter } from 'nuxt/app'

const router = useRouter()
const authStore = useAuthStore()
const showUserMenu = ref(false)

const handleLogout = async () => {
  await authStore.logout()
  showUserMenu.value = false
  router.push('/login')
}

// 在组件加载时检查认证状态
onMounted(async () => {
  await authStore.checkAuth()
})
</script>

<style scoped>
.container {
  max-width: 1280px;
}
</style>
