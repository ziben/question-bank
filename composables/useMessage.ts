import { ref } from 'vue'

interface Message {
  id: number
  type: 'success' | 'error' | 'info' | 'warning'
  content: string
}

const messages = ref<Message[]>([])
let messageId = 0

export function useMessage() {
  const showMessage = (content: string, type: Message['type'] = 'info') => {
    const id = messageId++
    messages.value.push({ id, type, content })
    setTimeout(() => {
      const index = messages.value.findIndex(msg => msg.id === id)
      if (index !== -1) {
        messages.value.splice(index, 1)
      }
    }, 3000)
  }

  return {
    messages,
    showMessage
  }
}
