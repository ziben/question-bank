import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

import type { AppState, AppActions } from '~/types/store'

export const useAppStore = defineStore('app', () => {
  const isDark = useStorage('app-theme', false)
  
  const toggleTheme = () => {
    isDark.value = !isDark.value
    updateThemeClass()
  }

  const updateThemeClass = () => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', isDark.value)
    }
  }

  // 初始化主题
  if (typeof window !== 'undefined') {
    updateThemeClass()
  }

  return {
    isDark,
    toggleTheme,
  }
})

