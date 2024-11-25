import { useToast as useVueToast } from 'vue-toastification'
import type { ToastInterface } from 'vue-toastification'

export function useToast() {
  const toast = useVueToast()

  return {
    success(message: string) {
      toast.success(message, {
        timeout: 2000
      })
    },
    error(message: string) {
      toast.error(message, {
        timeout: 3000
      })
    },
    warning(message: string) {
      toast.warning(message, {
        timeout: 2500
      })
    },
    info(message: string) {
      toast.info(message, {
        timeout: 2000
      })
    }
  }
}
