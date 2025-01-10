<!-- 日志过滤器组件 -->
<template>
  <div>
    <Card>
      <CardHeader class="p-4 flex flex-row items-center justify-between space-y-0">
        <CardTitle class="text-base">
          筛选条件
          <span class="ml-2 text-xs text-muted-foreground">
            {{ hasActiveFilters ? `已选 ${activeFilterCount} 个条件` : '暂无筛选条件' }}
          </span>
        </CardTitle>
        <Button variant="ghost" size="icon" @click="isExpanded = !isExpanded">
          <Icon
            :name="isExpanded ? 'material-symbols:expand-less' : 'material-symbols:expand-more'"
            class="h-4 w-4"
          />
        </Button>
      </CardHeader>

      <Collapsible :open="isExpanded">
        <CollapsibleContent>
          <CardContent class="p-4 pt-1">
            <div class="grid gap-4 md:grid-cols-2">
              <!-- 模块选择 -->
              <div class="flex items-center gap-2">
                <Label class="min-w-16 shrink-0">模块</Label>
                <div class="flex-1 flex items-center gap-1">
                  <Select v-model="filters.module">
                    <SelectTrigger class="w-full border-input">
                      <SelectValue placeholder="选择模块" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem v-for="option in moduleOptions" :key="option.value" :value="option.value">
                        {{ option.label }}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    v-if="filters.module"
                    variant="ghost"
                    size="icon"
                    class="flex-shrink-0 h-8 w-8 hover:bg-accent hover:text-accent-foreground"
                    @click="clearFilter('module')"
                    @mousedown.prevent
                  >
                    <Icon name="material-symbols:close" class="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <!-- 操作类型选择 -->
              <div class="flex items-center gap-2">
                <Label class="min-w-16 shrink-0">操作类型</Label>
                <div class="flex-1 flex items-center gap-1">
                  <Select v-model="filters.action">
                    <SelectTrigger class="w-full border-input">
                      <SelectValue placeholder="选择操作类型" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem v-for="option in actionOptions" :key="option.value" :value="option.value">
                        {{ option.label }}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    v-if="filters.action"
                    variant="ghost"
                    size="icon"
                    class="flex-shrink-0 h-8 w-8 hover:bg-accent hover:text-accent-foreground"
                    @click="clearFilter('action')"
                    @mousedown.prevent
                  >
                    <Icon name="material-symbols:close" class="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <!-- 用户选择 -->
              <div class="flex items-center gap-2">
                <Label class="min-w-16 shrink-0">操作用户</Label>
                <div class="flex-1 flex items-center gap-1">
                  <Select v-model="filters.userId">
                    <SelectTrigger class="w-full border-input">
                      <SelectValue placeholder="选择用户" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem v-for="user in userOptions" :key="user.id" :value="user.id">
                        {{ user.username }}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    v-if="filters.userId"
                    variant="ghost"
                    size="icon"
                    class="flex-shrink-0 h-8 w-8 hover:bg-accent hover:text-accent-foreground"
                    @click="clearFilter('userId')"
                    @mousedown.prevent
                  >
                    <Icon name="material-symbols:close" class="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <!-- 日期范围选择 -->
              <div class="flex items-center gap-2">
                <Label class="min-w-16 shrink-0">时间范围</Label>
                <DateRangeSelect v-model="dateRange" class="flex-1" />
              </div>

              <!-- 搜索框 -->
              <div class="flex items-center gap-2 md:col-span-2">
                <Label class="min-w-16 shrink-0">搜索</Label>
                <Input v-model="filters.search" placeholder="搜索日志内容..." class="flex-1" />
              </div>
            </div>

            <!-- 操作按钮 -->
            <div class="flex justify-end space-x-2 mt-4">
              <Button variant="outline" @click="resetFilters">重置</Button>
              <Button @click="applyFilters">应用筛选</Button>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, shallowRef } from 'vue'
import type { LogFilter } from '~/types/filters'
import type { DateRange } from 'radix-vue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/shadcn/card'
import { Button } from '@/components/shadcn/button'
import { Label } from '@/components/shadcn/label'
import { Input } from '@/components/shadcn/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/shadcn/select'
import { Collapsible, CollapsibleContent } from '@/components/shadcn/collapsible'
import { useFindManyUser } from '~/lib/hooks'
import { useDayjs } from '#dayjs'
import DateRangeSelect from '@/components/date-range/DateRangeSelect.vue'
import { LOG_MODULES, LOG_ACTIONS, LOG_LEVELS } from '~/types/log'
import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
} from '@internationalized/date'
import { useVModel } from '@vueuse/core'
import { useDebounceFn } from '@vueuse/core'

const dayjs = useDayjs()

const props = defineProps<{
  filters: LogFilter
}>()

const emit = defineEmits<{
  'update:filters': [value: LogFilter]
}>()

// 使用 useVModel 简化数据绑定
const filters = useVModel(props, 'filters', emit)

// 展开状态
const isExpanded = ref(false)

// 日期范围 - 添加类型安全和空值检查
const dateRange = computed<DateRange>({
  get: () => ({
    start: filters.value.startDate ? new CalendarDate(
      filters.value.startDate.getFullYear(),
      filters.value.startDate.getMonth() + 1,
      filters.value.startDate.getDate()
    ) : undefined,
    end: filters.value.endDate ? new CalendarDate(
      filters.value.endDate.getFullYear(),
      filters.value.endDate.getMonth() + 1,
      filters.value.endDate.getDate()
    ) : undefined
  }),
  set: (value: DateRange) => {
    filters.value = {
      ...filters.value,
      startDate: value?.start?.toDate(getLocalTimeZone()),
      endDate: value?.end?.toDate(getLocalTimeZone())
    }
  }
})

// 使用 shallowRef 优化性能
const moduleOptions = shallowRef(
  Object.entries(LOG_MODULES).map(([value, config]) => ({
    label: config.name,
    value: config.name
  }))
)

const actionOptions = shallowRef(
  Object.entries(LOG_ACTIONS).map(([value, config]) => ({
    label: config.name,
    value: config.name
  }))
)

const levelOptions = shallowRef(
  Object.entries(LOG_LEVELS).map(([key, value]) => ({
    label: key,
    value
  }))
)

// 用户列表 - 添加加载状态和错误处理
const { 
  data: userOptions, 
  isLoading: isLoadingUsers, 
  error: userError 
} = useFindManyUser()

// 计算激活的筛选条件数量
const hasActiveFilters = computed(() => {
  const f = filters.value
  return !!(
    f.startDate ||
    f.endDate ||
    f.search ||
    f.module ||
    f.action ||
    f.userId
  )
})

const activeFilterCount = computed(() => {
  let count = 0
  const f = filters.value
  if (f.startDate || f.endDate) count++
  if (f.search) count++
  if (f.module) count++
  if (f.action) count++
  if (f.userId) count++
  return count
})

// 添加防抖处理
const debouncedApplyFilters = useDebounceFn(() => {
  emit('update:filters', filters.value)
}, 300)

// 应用过滤器
const applyFilters = () => {
  try {
    debouncedApplyFilters()
  } catch (error) {
    console.error('应用筛选条件失败:', error)
    // 可以添加用户提示
  }
}

// 重置过滤器
const resetFilters = () => {
  filters.value = {
    startDate: undefined,
    endDate: undefined,
    search: '',
    module: undefined,
    action: undefined,
    userId: undefined
  }
}

// 获取模块标签
const getModuleLabel = (module: string) => {
  const option = moduleOptions.value.find(option => option.value === module)
  return option ? option.label : ''
}

// 获取操作类型标签
const getActionLabel = (action: string) => {
  const option = actionOptions.value.find(option => option.value === action)
  return option ? option.label : ''
}

// 获取用户标签
const getUserLabel = (userId: string) => {
  const user = userOptions.value.find(user => user.id === userId)
  return user ? user.username : ''
}

// 清除过滤器
const clearFilter = (key: keyof LogFilter) => {
  filters.value[key] = undefined
}
</script>
