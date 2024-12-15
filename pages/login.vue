<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        登录系统
      </h2>
    </div>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="handleLogin">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              邮箱
            </label>
            <div class="mt-1">
              <Input id="email" v-model="form.email" type="email" required />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">
              密码
            </label>
            <div class="mt-1">
              <Input id="password" v-model="form.password" type="password" required />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" v-model="form.remember" type="checkbox" />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                记住我
              </label>
            </div>
          </div>

          <div>
            <Button type="submit" :disabled="loading">
              {{ loading ? '登录中...' : '登录' }}
            </Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'nuxt/app'
import { useAuthStore } from '~/stores/auth'
import { Button } from '@/components/shadcn/button'
import { Input } from '@/components/shadcn/input'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/shadcn/card'
import { toast } from '~/components/shadcn/toast'
definePageMeta({
  layout: false,
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/'
  }
});

const { data, status, signIn } = useAuth()

interface LoginForm {
  email: string
  password: string
  remember: boolean
}

const router = useRouter()
const authStore = useAuthStore()
const loading = ref(false)

const form = reactive<LoginForm>({
  email: 'admin@example.com',
  password: 'admin123',
  remember: true
})

const handleLogin = async () => {
  try {
    loading.value = true
    await signIn(form)
    router.push('/')
  } catch (error: any) {
    toast({ title: '登录失败', description: error })
  } finally {
    loading.value = false
  }
}

// 如果已经登录，直接跳转到首页
onMounted(() => {
  if (authStore.isAuthenticated) {
    router.push('/')
  }
})
</script>
