import { defineStore } from 'pinia'
import { useFetch } from 'nuxt/app'
import type { FetchError } from 'ofetch'

export interface User {
  id: number
  username: string
  email: string
  role: 'admin' | 'editor' | 'user'
}

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

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
    loading: false,
    error: null
  }),

  getters: {
    isAuthenticated: (state): boolean => !!state.token && !!state.user,
    isAdmin: (state): boolean => state.user?.role === 'admin',
    isEditor: (state): boolean => ['editor', 'admin'].includes(state.user?.role || ''),
    authHeader(): Record<string, string> {
      return this.token ? { Authorization: `Bearer ${this.token}` } : {}
    }
  },

  actions: {
    // 保存token到localStorage
    saveToken(token: string) {
      localStorage.setItem(TOKEN_KEY, token)
      this.token = token
    },

    // 清除token
    clearToken() {
      localStorage.removeItem(TOKEN_KEY)
      this.token = null
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
        const { data: response } = await useFetch<LoginResponse>('/api/auth/login', {
          method: 'POST',
          body: form,
          headers: this.authHeader
        })

        if (response.value) {
          const { token, user } = response.value
          this.saveToken(token)
          this.user = user
        }
      } catch (error) {
        const fetchError = error as FetchError
        this.error = fetchError.message
        this.resetState()
        throw error
      } finally {
        this.loading = false
      }
    },

    // 退出登录
    async logout() {
      this.loading = true
      this.error = null

      try {
        await useFetch('/api/auth/logout', {
          method: 'POST',
          headers: this.authHeader
        })
      } catch (error) {
        const fetchError = error as FetchError
        this.error = fetchError.message
      } finally {
        this.loading = false
        this.resetState()
      }
    },

    // 检查认证状态
    async checkAuth() {
      const token = localStorage.getItem(TOKEN_KEY)
      if (!token) {
        this.resetState()
        return false
      }

      this.loading = true
      this.error = null
      this.token = token

      try {
        const { data: user } = await useFetch<User>('/api/auth/me', {
          headers: this.authHeader
        })
        
        if (user.value) {
          this.user = user.value
        }
        return true
      } catch (error) {
        const fetchError = error as FetchError
        this.error = fetchError.message
        this.resetState()
        return false
      } finally {
        this.loading = false
      }
    },

    // 初始化认证状态
    async init() {
      const token = localStorage.getItem(TOKEN_KEY)
      if (token) {
        return this.checkAuth()
      }
      return false
    }
  }
})
