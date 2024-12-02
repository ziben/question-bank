import { defineStore } from 'pinia'
import { useFetch } from 'nuxt/app'
import { useRouter } from 'nuxt/app'
import type { FetchError } from 'ofetch'
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
}

// Token 存储的key
const TOKEN_KEY = 'auth_token'

// 开发环境下的默认管理员账号
const DEV_ADMIN = {
  email: 'admin@example.com',
  password: 'admin123'
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
    loading: false,
    error: null
  }),

  getters: {
    isAuthenticated: (state): boolean => !!state.token && !!state.user,
    isAdmin: (state): boolean => state.user?.role === 'ADMIN',
    isEditor: (state): boolean => ['editor', 'admin'].includes(state.user?.role || ''),
    authHeader(): Record<string, string> {
      return this.token ? { Authorization: `Bearer ${this.token}` } : {}
    }
  },

  actions: {
    // 保存token到localStorage
    saveToken(token: string) {
      this.token = token
      if (process.client) {
        localStorage.setItem(TOKEN_KEY, token)
      }
    },

    // 清除token
    clearToken() {
      this.token = null
      if (process.client) {
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

    // 登录
    async login(form: LoginForm) {
      this.loading = true
      this.error = null

      try {
        const { data } = await useFetch<LoginResponse>('/api/auth/login', {
          method: 'POST',
          body: form
        })

        if (data.value) {
          const { token, user } = data.value
          this.saveToken(token)
          this.user = user
          return true
        }
        return false
      } catch (error) {
        const fetchError = error as FetchError
        this.error = fetchError.message || '登录失败'
        return false
      } finally {
        this.loading = false
      }
    },

    // 退出登录
    async logout() {
      try {
        await useFetch('/api/auth/logout', {
          method: 'POST',
          headers: this.authHeader
        })
      } catch (error) {
        console.error('Logout error:', error)
      } finally {
        this.resetState()
      }
    },

    // 检查认证状态
    async checkAuth() {
      // 只在客户端检查 token
      if (process.client) {
        const token = localStorage.getItem(TOKEN_KEY)
        
        if (!token) {
          // 开发环境下自动登录
          if (process.dev) {
            try {
              await this.login(DEV_ADMIN)
              return true
            } catch (error) {
              console.error('Auto login failed:', error)
            }
          }
          return false
        }

        this.token = token
      }

      if (!this.token) {
        return false
      }

      this.loading = true

      try {
        const { data: user } = await useFetch<User>('/api/auth/me', {
          headers: this.authHeader
        })
        
        if (user.value) {
          this.user = user.value
          return true
        } else {
          this.resetState()
          return false
        }
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
    }
  }
})
