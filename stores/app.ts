import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

import type { AppState, AppActions } from '~/types/store'

export const useAppStore = defineStore('app', () => {
  const isDark = useStorage('app-theme', false)
  const toggleTheme = () => (isDark.value = !isDark.value)

  return {
    isDark,
    toggleTheme,
  }
})
