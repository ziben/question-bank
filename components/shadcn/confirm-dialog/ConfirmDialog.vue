<template>
  <Dialog :open="open" @update:open="$emit('update:open', $event)">
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{{ title }}</DialogTitle>
        <DialogDescription>
          {{ content }}
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button variant="outline" @click="onCancel">
          {{ cancelText }}
        </Button>
        <Button :variant="variant" @click="onConfirm">
          {{ confirmText }}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/shadcn/dialog'
import { Button } from '@/components/shadcn/button'

interface Props {
  open?: boolean
  title?: string
  content?: string
  confirmText?: string
  cancelText?: string
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
}

const props = withDefaults(defineProps<Props>(), {
  open: false,
  title: '确认',
  content: '确定要执行此操作吗？',
  confirmText: '确定',
  cancelText: '取消',
  variant: 'default'
})

const emit = defineEmits<{
  'update:open': [value: boolean]
  'confirm': []
  'cancel': []
}>()

const onConfirm = () => {
  emit('confirm')
  emit('update:open', false)
}

const onCancel = () => {
  emit('cancel')
  emit('update:open', false)
}
</script>
