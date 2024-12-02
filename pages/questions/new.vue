<template>
  <div class="container py-8 mx-auto">
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-3xl font-bold tracking-tight">新建题目</h2>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-8">
      <!-- 基本信息 -->
      <Card>
        <CardHeader>
          <CardTitle>基本信息</CardTitle>
          <CardDescription>填写题目的基本信息</CardDescription>
        </CardHeader>
        <CardContent class="space-y-6">
          <div class="grid gap-6 md:grid-cols-2">
            <!-- 标题 -->
            <div class="space-y-2">
              <Label for="title">标题 <span class="text-red-500">*</span></Label>
              <Input id="title" v-model="formData.title" placeholder="请输入题目标题" :disabled="submitting" required />
            </div>

            <!-- 科目 -->
            <div class="space-y-2">
              <Label for="subject">科目 <span class="text-red-500">*</span></Label>
              <Select :model-value="String(formData.subjectId)"
                @update:model-value="(val) => formData.subjectId = Number(val)" :disabled="submitting" required>
                <SelectTrigger id="subject">
                  <SelectValue placeholder="选择科目" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem v-for="subject in subjects" :key="subject.id" :value="String(subject.id)">
                    {{ subject.name }}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <!-- 年级 -->
            <div class="space-y-2">
              <Label for="grade">年级 <span class="text-red-500">*</span></Label>
              <Select :model-value="String(formData.gradeId)"
                @update:model-value="(val) => formData.gradeId = Number(val)" :disabled="submitting" required>
                <SelectTrigger id="grade">
                  <SelectValue placeholder="选择年级" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem v-for="grade in grades" :key="grade.id" :value="String(grade.id)">
                    {{ grade.name }}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <!-- 来源 -->
            <div class="space-y-2">
              <Label for="source">来源</Label>
              <Select :model-value="String(formData.sourceId)"
                @update:model-value="(val) => formData.sourceId = Number(val)" :disabled="submitting">
                <SelectTrigger id="source">
                  <SelectValue placeholder="选择来源" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem v-for="source in sources" :key="source.id" :value="String(source.id)">
                    {{ source.name }}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <!-- 题型 -->
            <div class="space-y-2">
              <Label for="type">题型 <span class="text-red-500">*</span></Label>
              <Select :v-model="formData.type" :disabled="submitting" required>
                <SelectTrigger id="type">
                  <SelectValue placeholder="选择题型" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="multiple_choice">{{ QuestionTypeLabels.multiple_choice }}</SelectItem>
                  <SelectItem value="true_false">{{ QuestionTypeLabels.true_false }}</SelectItem>
                  <SelectItem value="essay">{{ QuestionTypeLabels.essay }}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <!-- 难度 -->
            <div class="space-y-2">
              <Label for="difficulty">难度 <span class="text-red-500">*</span></Label>
              <Select :model-value="formData.difficulty.toString()"
                @update:model-value="(val) => formData.difficulty = Number(val) as DifficultyLevel"
                :disabled="submitting" required>
                <SelectTrigger id="difficulty">
                  <SelectValue placeholder="选择难度" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem :value="'1'">{{ DifficultyLevelLabels[1] }}</SelectItem>
                  <SelectItem :value="'2'">{{ DifficultyLevelLabels[2] }}</SelectItem>
                  <SelectItem :value="'3'">{{ DifficultyLevelLabels[3] }}</SelectItem>
                  <SelectItem :value="'4'">{{ DifficultyLevelLabels[4] }}</SelectItem>
                  <SelectItem :value="'5'">{{ DifficultyLevelLabels[5] }}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <!-- 题目内容 -->
      <Card>
        <CardHeader>
          <CardTitle>题目内容</CardTitle>
          <CardDescription>填写题目的具体内容和答案</CardDescription>
        </CardHeader>
        <CardContent class="space-y-6">
          <!-- 题干 -->
          <div class="space-y-2">
            <Label for="content">题干 <span class="text-red-500">*</span></Label>
            <Textarea id="content" v-model="formData.content" placeholder="请输入题目内容" :disabled="submitting" rows="4"
              required />
          </div>

          <!-- 选项（仅选择题显示） -->
          <div v-if="formData.type === 'multiple_choice'" class="space-y-2">
            <Label for="options">选项 <span class="text-red-500">*</span></Label>
            <div v-for="(option, index) in formData.options" :key="index" class="flex gap-2">
              <Input :id="'option-' + index" v-model="formData.options[index]"
                :placeholder="'选项 ' + String.fromCharCode(65 + index)" :disabled="submitting" required />
              <Button v-if="index > 3" type="button" variant="outline" size="icon"
                @click="formData.options.splice(index, 1)">
                <span class="i-lucide-x h-4 w-4" />
              </Button>
            </div>
            <Button type="button" variant="outline" size="sm" @click="formData.options.push('')">
              添加选项
            </Button>
          </div>

          <!-- 答案 -->
          <div class="space-y-2">
            <Label for="answer">答案 <span class="text-red-500">*</span></Label>
            <Textarea id="answer" v-model="formData.answer"
              :placeholder="formData.type === 'multiple_choice' ? '请输入正确选项，如：A' : '请输入参考答案'" :disabled="submitting"
              rows="2" required />
          </div>

          <!-- 解析 -->
          <div class="space-y-2">
            <Label for="explanation">解析</Label>
            <Textarea id="explanation" v-model="formData.explanation" placeholder="请输入答案解析" :disabled="submitting"
              rows="4" />
          </div>

          <!-- 标签 -->
          <div class="space-y-2">
            <Label for="tags">标签</Label>
            <Input id="tags" :value="formData.tags.join(',')"
              @input="(e: Event) => formData.tags = (e.target as HTMLInputElement).value.split(',').filter(Boolean)"
              placeholder="多个标签用逗号分隔" :disabled="submitting" />
          </div>
        </CardContent>
      </Card>

      <!-- 操作按钮 -->
      <div class="flex justify-end gap-4">
        <Button type="button" variant="outline" @click="openPreview" :disabled="submitting">
          预览
        </Button>
        <Button type="submit" :disabled="submitting">
          <Loader2 v-if="submitting" class="h-4 w-4 mr-2 animate-spin" />
          保存
        </Button>
      </div>
    </form>

    <!-- 预览对话框 -->
    <Dialog :open="showPreview" @update:open="closePreview">
      <DialogContent class="max-w-2xl">
        <DialogHeader>
          <DialogTitle>预览题目</DialogTitle>
        </DialogHeader>
        <div class="space-y-4">
          <div>
            <h3 class="font-medium mb-2">{{ formData.title || '无标题' }}</h3>
            <p class="whitespace-pre-wrap">{{ formData.content }}</p>
          </div>
          <div v-if="formData.type === 'multiple_choice'" class="space-y-2">
            <div class="font-medium">选项：</div>
            <div class="space-y-1">
              <p v-for="(option, index) in formData.options" :key="index" class="pl-4">
                {{ String.fromCharCode(65 + index) }}. {{ option }}
              </p>
            </div>
          </div>
          <div class="space-y-2">
            <div class="font-medium">答案：</div>
            <p class="whitespace-pre-wrap">{{ formData.answer }}</p>
          </div>
          <div v-if="formData.explanation" class="space-y-2">
            <div class="font-medium">解析：</div>
            <p class="whitespace-pre-wrap">{{ formData.explanation }}</p>
          </div>
          <div class="text-sm text-muted-foreground space-x-2">
            <span>{{ QuestionTypeLabels[formData.type as QuestionType] }}</span>
            <span>|</span>
            <span>{{ DifficultyLevelLabels[formData.difficulty as DifficultyLevel] }}</span>
            <span v-if="formData.tags">|</span>
            <span>{{ formData.tags }}</span>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" @click="closePreview">
            关闭
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Loader2 } from 'lucide-vue-next'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import type { QuestionType, DifficultyLevel, QuestionFormData, Subject, Grade, Source } from '~/types'
import { QuestionTypeLabels, DifficultyLevelLabels } from '~/types'
import { useToast } from '@/composables/useToast'

const router = useRouter()
const toast = useToast()

// 表单数据
const formData = ref<QuestionFormData>({
  title: '',
  content: '',
  type: 'multiple_choice' as QuestionType,
  difficulty: 1 as DifficultyLevel,
  options: ['', '', '', ''],
  answer: '',
  explanation: '',
  tags: [],
  categoryId: 0,
  subjectId: 0,
  gradeId: 0,
  sourceId: 0,
})

// 获取相关数据
const { data: subjects } = await useFetch<Subject[]>('/api/subjects')
const { data: grades } = await useFetch<Grade[]>('/api/grades')
const { data: sources } = await useFetch<Source[]>('/api/sources')

// 状态控制
const submitting = ref(false)
const showPreview = ref(false)

// 打开预览
function openPreview() {
  showPreview.value = true
}

// 关闭预览
function closePreview() {
  showPreview.value = false
}

// 提交表单
async function handleSubmit() {
  submitting.value = true
  try {
    await $fetch('/api/questions', {
      method: 'POST',
      body: formData.value
    })
    toast.success('创建成功')
    router.push('/questions')
  } catch (error: any) {
    toast.error(error.data?.message || '创建失败')
  } finally {
    submitting.value = false
  }
}
</script>
