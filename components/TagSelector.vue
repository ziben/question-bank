<template>
  <div class="space-y-4">
    <div v-for="category in categories" :key="category.id" class="space-y-2">
      <Label class="text-base">{{ category.name }}</Label>
      
      <!-- 单选标签 -->
      <div v-if="!category.allowMultiple" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        <RadioGroup v-model="selectedTags[category.id]">
          <div v-for="tag in category.tags" :key="tag.id">
            <RadioGroupItem :value="tag.id" class="peer sr-only" />
            <Label
              :for="tag.id.toString()"
              class="flex items-center justify-between rounded-lg border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
            >
              <div class="space-y-0.5">
                <div class="text-sm font-medium leading-none">{{ tag.name }}</div>
                <div v-if="tag.parent" class="text-xs text-muted-foreground">
                  {{ tag.parent.name }}
                </div>
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>

      <!-- 多选标签 -->
      <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        <div v-for="tag in category.tags" :key="tag.id">
          <Checkbox
            :id="tag.id.toString()"
            v-model="selectedTags[category.id]"
            :value="tag.id"
            class="peer sr-only"
          />
          <Label
            :for="tag.id.toString()"
            class="flex items-center justify-between rounded-lg border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
          >
            <div class="space-y-0.5">
              <div class="text-sm font-medium leading-none">{{ tag.name }}</div>
              <div v-if="tag.parent" class="text-xs text-muted-foreground">
                {{ tag.parent.name }}
              </div>
            </div>
          </Label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { Label } from '~/components/shadcn/label'
import { RadioGroup, RadioGroupItem } from '~/components/shadcn/radio-group'
import { Checkbox } from '~/components/shadcn/checkbox'

interface Tag {
  id: number
  name: string
  parent?: {
    id: number
    name: string
  }
}

interface Category {
  id: number
  name: string
  allowMultiple: boolean
  tags: Tag[]
}

const props = defineProps<{
  modelValue?: Record<number, number | number[]>
}>()

const emit = defineEmits(['update:modelValue'])

const categories = ref<Category[]>([])
const selectedTags = ref<Record<number, number | number[]>>({})

// 监听选中标签的变化
watch(selectedTags, (newValue) => {
  emit('update:modelValue', newValue)
}, { deep: true })

// 监听外部传入的值
watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    selectedTags.value = { ...newValue }
  }
}, { deep: true })

// 加载标签类别和标签
async function loadCategories() {
  try {
    const { categories: data } = await $fetch('/api/tags')
    categories.value = data

    // 初始化选中状态
    categories.value.forEach(category => {
      if (!selectedTags.value[category.id]) {
        selectedTags.value[category.id] = category.allowMultiple ? [] : null
      }
    })
  } catch (error) {
    console.error('Error loading categories:', error)
  }
}

// 初始化
onMounted(() => {
  loadCategories()
  if (props.modelValue) {
    selectedTags.value = { ...props.modelValue }
  }
})
</script>
