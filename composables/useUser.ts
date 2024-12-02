import { useAuthStore } from '~/stores/auth'

export function useUser() {
  const authStore = useAuthStore()
  
  return computed(() => authStore.user)
}
