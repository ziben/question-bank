<template>
  <form @submit.prevent="save" class="space-y-6">
    <div class="space-y-4">
      <div>
        <Label>标签</Label>
        <TagSelector v-model="selectedTags" />
      </div>

      <div class="space-y-2">
        <Label for="title">标题</Label>
        <Input id="title" v-model="form.title" required />
      </div>

      <div class="space-y-2">
        <Label for="content">内容</Label>
        <Textarea
          id="content"
          v-model="form.content"
          class="min-h-[200px]"
          required
        />
      </div>

      <div class="space-y-2">
        <Label for="answer">答案</Label>
        <Textarea
          id="answer"
          v-model="form.answer"
          class="min-h-[100px]"
          required
        />
      </div>

      <div class="space-y-2">
        <Label for="analysis">解析</Label>
        <Textarea
          id="analysis"
          v-model="form.analysis"
          class="min-h-[100px]"
        />
      </div>
    </div>

    <div class="flex justify-end space-x-2">
      <Button type="button" variant="outline" @click="$emit('cancel')">
        取消
      </Button>
      <Button type="submit" :loading="saving">
        保存
      </Button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '~/components/shadcn/button'
import { Input } from '~/components/shadcn/input'
import { Label } from '~/components/shadcn/label'
import { Textarea } from '~/components/shadcn/textarea'
import TagSelector from '~/components/TagSelector.vue'
import type { Question } from '~/types'

const props = defineProps<{
  questionId?: number
}>()

const emit = defineEmits(['cancel', 'save'])

const form = ref({
  title: '',
  content: '',
  answer: '',
  analysis: ''
})

const selectedTags = ref<Record<number, number | number[]>>({})
const saving = ref(false)

// 加载问题数据
async function loadQuestion() {
  if (!props.questionId) return

  try {
    const question = await $fetch<Question>(`/api/questions/${props.questionId}`)
    form.value = {
      title: question.title,
      content: question.content,
      answer: question.answer,
      analysis: question.explanation || ''
    }

    // 转换标签数据为选择器格式
    const tagsByCategory: Record<number, number | number[]> = {}
    question.tags?.forEach((tag: any) => {
      const categoryId = tag.category.id
      if (tag.category.allowMultiple) {
        if (!tagsByCategory[categoryId]) {
          tagsByCategory[categoryId] = []
        }
        ;(tagsByCategory[categoryId] as number[]).push(tag.id)
      } else {
        tagsByCategory[categoryId] = tag.id
      }
    })
    selectedTags.value = tagsByCategory
  } catch (error) {
    console.error('Error loading question:', error)
  }
}

// 保存问题
async function save() {
  saving.value = true
  try {
    const tagIds = Object.values(selectedTags.value).flat()
    const data = {
      ...form.value,
      tagIds
    }

    if (props.questionId) {
      await $fetch(`/api/questions/${props.questionId}`, {
        method: 'PUT',
        body: data
      })
    } else {
      await $fetch('/api/questions', {
        method: 'POST',
        body: data
      })
    }

    emit('save')
  } catch (error) {
    console.error('Error saving question:', error)
  } finally {
    saving.value = false
  }
}

onMounted(() => {
  loadQuestion()
})
</script>
