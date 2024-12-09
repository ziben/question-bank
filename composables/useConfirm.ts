import { ref, h } from 'vue'
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from '@/components/shadcn/dialog'
import { Button } from '@/components/shadcn/button'

export type ConfirmType = 'info' | 'warning' | 'error' | 'success'

export interface ConfirmButton {
  text: string
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  onClick?: () => void | Promise<void>
}

export interface ConfirmOptions {
  title?: string
  content?: string
  type?: ConfirmType
  icon?: string
  confirmButton?: ConfirmButton
  cancelButton?: ConfirmButton
  showCancel?: boolean
  closeOnOverlayClick?: boolean
}

const defaultOptions: ConfirmOptions = {
  title: '确认',
  content: '确定要执行此操作吗？',
  type: 'info',
  showCancel: true,
  closeOnOverlayClick: true,
  confirmButton: {
    text: '确定',
    variant: 'default'
  },
  cancelButton: {
    text: '取消',
    variant: 'outline'
  }
}

let confirmResolve: ((value: boolean) => void) | null = null

const isOpen = ref(false)
const options = ref<ConfirmOptions>(defaultOptions)

export function useConfirm(opt?: ConfirmOptions) {
  return new Promise<boolean>((resolve) => {
    confirmResolve = resolve
    options.value = {
      ...defaultOptions,
      ...opt,
      confirmButton: {
        ...defaultOptions.confirmButton,
        ...opt?.confirmButton,
        text: opt?.confirmButton?.text ?? 'Confirm',
        variant: opt?.type === 'error' ? 'destructive' : (opt?.confirmButton?.variant || defaultOptions.confirmButton?.variant)
      },
      cancelButton: {
        ...defaultOptions.cancelButton,
        ...opt?.cancelButton,
        text: opt?.confirmButton?.text ?? 'Cancel',
      }
    }
    isOpen.value = true
  })
}

export function ConfirmDialog() {
  const handleClose = (confirmed: boolean) => {
    isOpen.value = false
    confirmResolve?.(confirmed)
    
    if (confirmed) {
      options.value.confirmButton?.onClick?.()
    } else {
      options.value.cancelButton?.onClick?.()
    }
  }

  const handleOverlayClick = () => {
    if (options.value.closeOnOverlayClick) {
      handleClose(false)
    }
  }

  return h(Dialog, {
    open: isOpen.value,
    'onUpdate:open': (val: boolean) => {
      if (!val) handleOverlayClick()
    }
  }, {
    default: () => h(DialogContent, {
      class: `confirm-dialog-${options.value.type || 'info'}`
    }, {
      default: () => [
        h(DialogHeader, null, {
          default: () => [
            h(DialogTitle, {
              class: 'flex items-center gap-2'
            }, () => [
              options.value.icon && h('i', { class: options.value.icon }),
              options.value.title
            ]),
            h(DialogDescription, null, () => options.value.content)
          ]
        }),
        h(DialogFooter, { class: 'flex justify-end gap-2' }, {
          default: () => [
            options.value.showCancel && h(Button, {
              variant: options.value.cancelButton?.variant,
              onClick: () => handleClose(false)
            }, () => options.value.cancelButton?.text),
            h(Button, {
              variant: options.value.confirmButton?.variant,
              onClick: () => handleClose(true)
            }, () => options.value.confirmButton?.text)
          ]
        })
      ]
    })
  })
}
