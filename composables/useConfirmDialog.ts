import { ref } from 'vue'

interface ConfirmOptions {
  title?: string
  content?: string
  confirmText?: string
  cancelText?: string
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
}

export const useConfirmDialog = () => {
  const isOpen = ref(false)
  const resolvePromise: Ref<((value: boolean) => void) | null> = ref(null)
  const options = ref<ConfirmOptions>({})

  const confirm = (confirmOptions: ConfirmOptions = {}): Promise<boolean> => {
    options.value = confirmOptions
    isOpen.value = true
    return new Promise((resolve) => {
      resolvePromise.value = resolve
    })
  }

  const handleConfirm = () => {
    if (resolvePromise.value) {
      resolvePromise.value(true)
      resolvePromise.value = null
    }
  }

  const handleCancel = () => {
    if (resolvePromise.value) {
      resolvePromise.value(false)
      resolvePromise.value = null
    }
  }

  return {
    isOpen,
    options,
    confirm,
    handleConfirm,
    handleCancel
  }
}
