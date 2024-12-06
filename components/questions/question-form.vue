<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { Button } from '@/components/shadcn/button'
import { Input } from '@/components/shadcn/input'
import { Textarea } from '@/components/shadcn/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/shadcn/select'
import { TagsInput } from '@/components/shadcn/tags-input'
import type { Category, Question, QuestionType, DifficultyLevel } from '@/types'
import type { Subject, Grade, Source } from '@/types'

const props = defineProps<{
  initialData?: any
  isEditing?: boolean
}>()

const emit = defineEmits<{
  (e: 'submit', data: any): void
  (e: 'cancel'): void
}>()

// 表单数据
const formData = ref({
  title: '',
  content: '',
  type: 'multiple_choice' as QuestionType,
  difficulty: 3 as DifficultyLevel,
  options: ['', '', '', ''],
  answer: '',
  explanation: '',
  tags: [],
  categoryId: '',
  subjectId: '',
  gradeId: '',
  sourceId: '',
  ...props.initialData
})

// 加载分类、科目、年级和来源数据
const categories = ref<Category[]>([])
const subjects = ref<Subject[]>([])
const grades = ref<Grade[]>([])
const sources = ref<Source[]>([])

onMounted(async () => {
  const { data: categoriesData } = await useFetch<Category[]>('/api/categories')
  categories.value = categoriesData.value || []

  const { data: subjectsData } = await useFetch<Subject[]>('/api/subjects')
  subjects.value = subjectsData.value || []

  const { data: gradesData } = await useFetch<Grade[]>('/api/grades')
  grades.value = gradesData.value || []

  const { data: sourcesData } = await useFetch<Source[]>('/api/sources')
  sources.value = sourcesData.value || []
})

// 题目类型选项
const questionTypes = [
  { value: 'multiple_choice', label: '选择题' },
  { value: 'true_false', label: '判断题' },
  { value: 'essay', label: '问答题' }
]

// 难度选项
const difficultyLevels = [
  { value: 1, label: '★' },
  { value: 2, label: '★★' },
  { value: 3, label: '★★★' },
  { value: 4, label: '★★★★' },
  { value: 5, label: '★★★★★' }
]

// 是否显示选项输入
const showOptions = computed(() => formData.value.type === 'multiple_choice')

// 添加选项
const addOption = () => {
  formData.value.options.push('')
}

// 移除选项
const removeOption = (index: number) => {
  formData.value.options.splice(index, 1)
}

// 提交表单
const handleSubmit = () => {
  // 验证必填字段
  if (!formData.value.title || !formData.value.content || !formData.value.type) {
    alert('请填写必填字段')
    return
  }

  // 如果是选择题，验证选项
  if (formData.value.type === 'multiple_choice') {
    if (formData.value.options.some((opt: any) => !opt)) {
      alert('请填写所有选项')
      return
    }
    if (!formData.value.answer || parseInt(formData.value.answer) >= formData.value.options.length) {
      alert('请选择正确答案')
      return
    }
  }

  emit('submit', {
    ...formData.value,
    difficulty: formData.value.difficulty,
    categoryId: parseInt(formData.value.categoryId),
    subjectId: parseInt(formData.value.subjectId),
    gradeId: parseInt(formData.value.gradeId),
    sourceId: parseInt(formData.value.sourceId)
  })
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <!-- 基本信息 -->
    <div class="grid grid-cols-2 gap-4">
      <div class="space-y-2">
        <label class="text-sm font-medium">标题 *</label>
        <Input v-model="formData.title" placeholder="输入题目标题" required />
      </div>
      <div class="space-y-2">
        <label class="text-sm font-medium">类型 *</label>
        <Select v-model="formData.type" required>
          <SelectTrigger>
            <SelectValue placeholder="选择题目类型" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem v-for="type in questionTypes" :key="type.value" :value="type.value">
              {{ type.label }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>

    <!-- 分类信息 -->
    <div class="grid grid-cols-2 gap-4">
      <div class="space-y-2">
        <label class="text-sm font-medium">分类 *</label>
        <Select v-model="formData.categoryId" required>
          <SelectTrigger>
            <SelectValue placeholder="选择分类" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem v-for="category in categories" :key="category.id" :value="String(category.id)">
              {{ category.name }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div class="space-y-2">
        <label class="text-sm font-medium">难度 *</label>
        <Select v-model="formData.difficulty" required>
          <SelectTrigger>
            <SelectValue placeholder="选择难度" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem v-for="level in difficultyLevels" :key="level.value" :value="String(level.value)">
              {{ level.label }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>

    <!-- 科目、年级和来源 -->
    <div class="grid grid-cols-3 gap-4">
      <div class="space-y-2">
        <label class="text-sm font-medium">科目 *</label>
        <Select v-model="formData.subjectId" required>
          <SelectTrigger>
            <SelectValue placeholder="选择科目" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem v-for="subject in subjects" :key="subject.id" :value="String(subject.id)">
              {{ subject.name }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div class="space-y-2">
        <label class="text-sm font-medium">年级 *</label>
        <Select v-model="formData.gradeId" required>
          <SelectTrigger>
            <SelectValue placeholder="选择年级" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem v-for="grade in grades" :key="grade.id" :value="String(grade.id)">
              {{ grade.name }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div class="space-y-2">
        <label class="text-sm font-medium">来源 *</label>
        <Select v-model="formData.sourceId" required>
          <SelectTrigger>
            <SelectValue placeholder="选择来源" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem v-for="source in sources" :key="source.id" :value="String(source.id)">
              {{ source.name }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>

    <!-- 题目内容 -->
    <div class="space-y-2">
      <label class="text-sm font-medium">内容 *</label>
      <Textarea v-model="formData.content" placeholder="输入题目内容" rows="4" required />
    </div>

    <!-- 选择题选项 -->
    <div v-if="showOptions" class="space-y-4">
      <div class="flex justify-between items-center">
        <label class="text-sm font-medium">选项</label>
        <Button type="button" variant="outline" size="sm" @click="addOption">
          添加选项
        </Button>
      </div>
      <div v-for="(option, index) in formData.options" :key="index" class="flex gap-2">
        <Input v-model="formData.options[index]" :placeholder="`选项 ${index + 1}`" />
        <Button type="button" variant="ghost" size="icon" @click="removeOption(index)">
          <i class="i-lucide-trash-2 h-4 w-4" />
        </Button>
      </div>
      <div class="space-y-2">
        <label class="text-sm font-medium">正确答案</label>
        <Select v-model="formData.answer" required>
          <SelectTrigger>
            <SelectValue placeholder="选择正确答案" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem v-for="(_, index) in formData.options" :key="index" :value="String(index)">
              选项 {{ index + 1 }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>

    <!-- 答案和解析 -->
    <div v-else class="space-y-2">
      <label class="text-sm font-medium">答案 *</label>
      <Textarea v-model="formData.answer" placeholder="输入答案" rows="2" required />
    </div>

    <div class="space-y-2">
      <label class="text-sm font-medium">解析</label>
      <Textarea v-model="formData.explanation" placeholder="输入答案解析" rows="3" />
    </div>

    <!-- 标签 -->
    <div class="space-y-2">
      <label class="text-sm font-medium">标签</label>
      <TagsInput v-model="formData.tags" placeholder="输入标签，按回车添加" />
    </div>

    <!-- 操作按钮 -->
    <div class="flex justify-end gap-4">
      <Button type="button" variant="outline" @click="emit('cancel')">取消</Button>
      <Button type="submit">{{ props.isEditing ? '保存' : '创建' }}</Button>
    </div>
  </form>
</template>
