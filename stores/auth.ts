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
    isAuthenticated: (state): boolean => !!state.status && !!state.user,
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
      const { status, data, token } = useAuth()
      this.status = status.value
      // 只在客户端检查 token
      if (import.meta.client) {
        if (status.value != 'authenticated') {
          // 开发环境下自动登录
          // if (process.dev) {
          //   try {
          //     await this.login(DEV_ADMIN)
          //     return true
          //   } catch (error) {
          //     console.error('Auto login failed:', error)
          //   }
          // }
          return false
        }

        this.token = token.value
      }

      if (status.value != 'authenticated') {
        return false
      }

      this.loading = true
      try {
        this.user = data.value as User
        return true
      } catch (error) {
        console.error('Check auth error:', error)
        this.resetState()
        return false
      } finally {
        this.loading = false
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
