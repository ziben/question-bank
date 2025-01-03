<!-- 日志过滤器组件 -->
<template>
  <Card>
    <CardContent class="p-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- 模块选择 -->
        <div class="space-y-2">
          <Label>模块</Label>
          <Select v-model="filters.module">
            <SelectTrigger>
              <SelectValue placeholder="选择模块" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem v-for="option in moduleOptions" :key="option.value" :value="option.value">
                {{ option.label }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <!-- 操作类型选择 -->
        <div class="space-y-2">
          <Label>操作类型</Label>
          <Select v-model="filters.action">
            <SelectTrigger>
              <SelectValue placeholder="选择操作类型" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem v-for="option in actionOptions" :key="option.value" :value="option.value">
                {{ option.label }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <!-- 日志等级选择 -->
        <div class="space-y-2">
          <Label>日志等级</Label>
          <Select v-model="filters.level">
            <SelectTrigger>
              <SelectValue placeholder="选择日志等级" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem v-for="option in levelOptions" :key="option.value" :value="option.value">
                {{ option.label }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <!-- 用户选择 -->
        <div class="space-y-2">
          <Label>操作用户</Label>
          <Select v-model="filters.userId">
            <SelectTrigger>
              <SelectValue placeholder="选择用户" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem v-for="option in userOptions" :key="option.id" :value="option.id">
                {{ option.username }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        <!-- 时间范围选择 -->
        <div class="space-y-2 md:col-span-2">
          <Label>时间范围</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" class="w-full justify-start text-left font-normal"
                :class="!dateRange[0] && !dateRange[1] && 'text-muted-foreground'">
                <Icon name="material-symbols:calendar" class="mr-2 h-4 w-4" />
                {{ formatDateRange }}
              </Button>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0" align="start">
              <Calendar v-model="dateRange" mode="range" class="rounded-md border" />
            </PopoverContent>
          </Popover>
        </div>

        <!-- 搜索框 -->
        <div class="space-y-2 md:col-span-2">
          <Label>搜索</Label>
          <div class="relative">
            <Icon name="material-symbols:search" class="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input v-model="filters.search" placeholder="搜索日志内容..." class="pl-10" @keyup.enter="applyFilters" />
          </div>
        </div>
      </div>

      <!-- 操作按钮 -->
      <div class="flex justify-end space-x-2 mt-4">
        <Button variant="outline" @click="resetFilters">
          重置
        </Button>
        <Button @click="applyFilters">
          应用过滤
        </Button>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { type LogModule, type LogAction, type LogLevel, LOG_MODULES, LOG_ACTIONS, LOG_LEVELS } from '~/types/log'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn/select'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/shadcn/popover'
import { Calendar } from '@/components/shadcn/calendar'
import { Card, CardContent } from '@/components/shadcn/card'
import { Input } from '@/components/shadcn/input'
import { Label } from '@/components/shadcn/label'
import { Button } from '@/components/shadcn/button'
import { useDayjs } from '#dayjs'
import { useFindManyUser } from '~/lib/hooks'

const dayjs = useDayjs()
const emit = defineEmits<{
  (e: 'update:filters', filters: any): void
}>()

// 日期范围
const dateRange = ref<[Date | null, Date | null]>([null, null])

// 过滤条件
const filters = ref({
  module: '',
  action: '',
  level: '',
  userId: '',
  search: '',
  startDate: undefined as Date | undefined,
  endDate: undefined as Date | undefined
})

// 选项列表
const moduleOptions = computed(() =>
  Object.entries(LOG_MODULES).map(([value, config]) => ({
    value,
    label: config.name,
    description: config.description
  }))
)

const actionOptions = computed(() =>
  Object.entries(LOG_ACTIONS).map(([value, config]) => ({
    value,
    label: config.name,
    description: config.description
  }))
)

const levelOptions = computed(() => [
  { value: LOG_LEVELS.DEBUG.toString(), label: 'DEBUG' },
  { value: LOG_LEVELS.INFO.toString(), label: 'INFO' },
  { value: LOG_LEVELS.WARN.toString(), label: 'WARN' },
  { value: LOG_LEVELS.ERROR.toString(), label: 'ERROR' },
  { value: LOG_LEVELS.SECURITY.toString(), label: 'SECURITY' }
])

// 用户列表需要从API获取
const { data: userOptions } = useFindManyUser()

// 格式化日期范围显示
const formatDateRange = computed(() => {
  if (!dateRange.value[0] && !dateRange.value[1]) return '选择日期范围'

  const start = dateRange.value[0] ? dayjs(dateRange.value[0]).format('YYYY-MM-DD') : ''
  const end = dateRange.value[1] ? dayjs(dateRange.value[1]).format('YYYY-MM-DD') : ''

  return `${start} 至 ${end}`
})

// 监听日期范围变化
watch(dateRange, ([start, end]) => {
  filters.value.startDate = start ?? undefined
  filters.value.endDate = end ?? undefined
})

// 应用过滤器
const applyFilters = () => {
  emit('update:filters', { ...filters.value })
}

// 重置过滤器
const resetFilters = () => {
  filters.value = {
    module: '',
    action: '',
    level: '',
    userId: '',
    search: '',
    startDate: undefined,
    endDate: undefined
  }
  dateRange.value = [null, null]
  emit('update:filters', { ...filters.value })
}

</script>
