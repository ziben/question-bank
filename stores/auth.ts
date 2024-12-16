import { defineStore } from 'pinia'
import type { User } from '~/types'
export interface LoginForm {
  email: string
  password: string
  remember?: boolean
}

export interface LoginResponse {
  token: string
  user: User
}

export interface AuthState {
  user: User | null
  token: string | null
  loading: boolean
  error: string | null
  status: string | null
}

// Token 存储的key
const TOKEN_KEY = 'auth_token'

// 开发环境下的默认管理员账号
const DEV_ADMIN = {
  email: 'admin@example.com',
  password: 'admin123',
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
    loading: false,
    error: null,
    status: null,
  }),

  getters: {
    isAuthenticated: (state): boolean => state.status == 'authenticated',
    isAdmin: (state): boolean => {
      return true
    },
    hasPermission:
      (state) =>
        (permission: string): boolean => {
          if (!state.user?.roles) return false
          return state.user.roles.some((role) => role.permissions.some((p) => p === permission))
        },
    isEditor: (state): boolean => ['editor', 'admin'].includes(state.user?.role || ''),
  },

  actions: {
    // 保存token到localStorage
    saveToken(token: string) {
      this.token = token
      if (import.meta.client) {
        localStorage.setItem(TOKEN_KEY, token)
      }
    },

    // 清除token
    clearToken() {
      this.token = null
      if (import.meta.client) {
        localStorage.removeItem(TOKEN_KEY)
      }
    },

    // 重置状态
    resetState() {
      this.user = null
      this.token = null
      this.loading = false
      this.error = null
      this.clearToken()
    },

    // 检查认证状态
    async checkAuth() {
      const { data: session } = await useFetch('/api/auth/session', { headers: useRequestHeaders(['cookie']) })

      this.status = !!session.value?.email ? 'authenticated' : 'unauthenticated'
      // 只在客户端检查 token
      if (this.status == 'authenticated') {
        this.user = session.value as unknown as User
      }
    },

    // 初始化认证状态
    async init() {
      // 避免重复初始化
      if (this.loading) return

      await this.checkAuth()
    },
  },
})
