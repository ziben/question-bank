<template>
  <div class="space-y-4">
    <div v-for="category in filteredCategories" :key="category.id" class="space-y-2">
      <Label class="text-base">{{ category.name }}</Label>
      
      <!-- 单选标签 -->
      <div v-if="!category.allowMultiple" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        <RadioGroup 
          :model-value="selectedTags[category.id]?.toString()"
          @update:model-value="(value) => handleTagSelect(category, value ? parseInt(value) : undefined)"
        >
          <div v-for="tag in category.tags" :key="tag.id">
            <RadioGroupItem :value="tag.id.toString()" class="peer sr-only" :id="'tag-' + tag.id" />
            <Label
              :for="'tag-' + tag.id"
              class="flex items-center justify-between rounded-lg border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-colors"
            >
              <div class="space-y-1">
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
            :value="String(tag.id)"
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
import { ref, computed, onMounted, watch } from 'vue'
import { Label } from '~/components/shadcn/label'
import { Input } from '~/components/shadcn/input'
import { RadioGroup, RadioGroupItem } from '~/components/shadcn/radio-group'
import { Checkbox } from '~/components/shadcn/checkbox'
import { Button } from '~/components/shadcn/button'
import { Alert, AlertTitle, AlertDescription } from '~/components/shadcn/alert'
import { Badge } from '~/components/shadcn/badge'
import { Spinner } from '~/components/shadcn/spinner'
import type { TagCategory, Tag } from '~/types/tag'

const props = withDefaults(defineProps<{
  modelValue?: Record<number, number | number[]>
  // 是否允许取消选择
  allowDeselect?: boolean
}>(), {
  allowDeselect: true
})

const emit = defineEmits<{
  'update:modelValue': [value: Record<number, number | number[]>]
  'change': [categoryId: number, value: number | number[]]
}>()

const categories = ref<TagCategory[]>([])
const selectedTags = ref<Record<number, number | number[]>>({})
const isLoading = ref(false)
const error = ref<string | null>(null)
const searchQuery = ref('')

// 过滤后的类别列表
const filteredCategories = computed(() => {
  if (!searchQuery.value) return categories.value
  
  const query = searchQuery.value.toLowerCase()
  return categories.value.map(category => ({
    ...category,
    tags: []
  })).filter(category => category.tags.length > 0)
})

// 获取类别已选标签数量
function getSelectedCount(category: TagCategory): number {
  const selected = selectedTags.value[category.id]
  if (!selected) return 0
  return Array.isArray(selected) ? selected.length : 1
}

// 检查标签是否被选中
function isTagSelected(category: TagCategory, tagId: number): boolean {
  const selected = selectedTags.value[category.id]
  if (!selected) return false
  return Array.isArray(selected) 
    ? selected.includes(tagId)
    : selected === tagId
}

// 处理标签选择
function handleTagSelect(category: TagCategory, tagId: string | number | undefined, checked?: boolean) {
  if (category.allowMultiple) {
    // 多选模式
    const currentSelected = (selectedTags.value[category.id] || []) as number[]
    
    if (checked === undefined) {
      if (tagId === undefined) return;
      selectedTags.value[category.id] = typeof tagId === 'string' ? parseInt(tagId) : tagId
    } else {
      if (tagId === undefined) return;
      const numericTagId = typeof tagId === 'string' ? parseInt(tagId) : tagId
      if (checked) {
        selectedTags.value[category.id] = [...currentSelected, numericTagId]
      } else {
        selectedTags.value[category.id] = currentSelected.filter(id => id !== numericTagId)
      }
    }
  } else {
    // 单选模式
    const numericTagId = typeof tagId === 'string' ? parseInt(tagId) : tagId
    if (props.allowDeselect && selectedTags.value[category.id] === numericTagId) {
      selectedTags.value[category.id] = 0
    } else {
      selectedTags.value[category.id] = numericTagId ?? 0
    }
  }
  
  emit('change', category.id, selectedTags.value[category.id])
}

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
  isLoading.value = true
  error.value = null
  
  try {
    const data = await $fetch<TagCategory[]>('/api/tags')
    categories.value = data

    // 初始化选中状态
    if (props.modelValue) {
      selectedTags.value = { ...props.modelValue }
    } else {
      categories.value.forEach(category => {
        // selectedTags.value[category.id] = category.allowMultiple ? [] : undefined
      })
    }
  } catch (e) {
    error.value = '加载标签失败，请稍后重试'
    console.error('Failed to load categories:', e)
  } finally {
    isLoading.value = false
  }
}

// 初始化
onMounted(() => {
  loadCategories()
})
</script>
