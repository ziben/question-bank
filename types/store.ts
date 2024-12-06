import type { Ref } from 'vue'
import type { User } from './index'
import type { ErrorType } from './utils'

// 用户状态
export interface UserState {
  currentUser: Ref<User | null>
  isAuthenticated: Ref<boolean>
  token: Ref<string | null>
}

// 应用状态
export interface AppState {
  isDark: Ref<boolean>
  isMobile: Ref<boolean>
  isLoading: Ref<boolean>
}

// UI 状态
export interface UiState {
  sidebarOpen: Ref<boolean>
  activeModal: Ref<string | null>
  toasts: Ref<
    Array<{
      id: string
      type: 'success' | 'error' | 'info' | 'warning'
      message: string
    }>
  >
}

// Store Actions
export interface AppActions {
  toggleTheme: () => void
  toggleSidebar: () => void
  showToast: (type: string, message: string) => void
  closeToast: (id: string) => void
}

// Store 元数据类型
export interface StoreMeta {
  status: StoreStatus
  error: ErrorType | null
  lastUpdated: number | null
}

// 通用 Store 状态类型
export type StoreStatus = 'idle' | 'loading' | 'success' | 'error'

// 基础状态类型
export type BaseState = AppState & UserState & UiState

// 完整状态类型（包含元数据）
export interface RootState extends BaseState {
  meta: {
    [K in keyof BaseState]?: StoreMeta
  }
}

// 完整 Store 类型
export type RootStore = RootState & AppActions

// Store Getters 类型
export interface StoreGetters {
  isLoading: (state: RootState) => boolean
  hasError: (state: RootState) => boolean
  getError: (state: RootState) => ErrorType | null
}

// Store ID 类型
export type StoreId = 'app' | 'user' | 'ui'

// Store 配置类型
export interface StoreConfig {
  id: StoreId
  persist?: boolean
}
