<!-- 日志过滤器组件 -->
<template>
  <div class="space-y-4 p-4 bg-white rounded-lg shadow">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <!-- 模块选择 -->
      <Select
        v-model="filters.module"
        :options="moduleOptions"
        label="模块"
        placeholder="选择模块"
        clearable
      />

      <!-- 操作类型选择 -->
      <Select
        v-model="filters.action"
        :options="actionOptions"
        label="操作类型"
        placeholder="选择操作类型"
        clearable
      />

      <!-- 日志等级选择 -->
      <Select
        v-model="filters.level"
        :options="levelOptions"
        label="日志等级"
        placeholder="选择日志等级"
        clearable
      />

      <!-- 用户选择 -->
      <Select
        v-model="filters.userId"
        :options="userOptions"
        label="操作用户"
        placeholder="选择用户"
        clearable
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- 时间范围选择 -->
      <DateRangePicker
        v-model="dateRange"
        label="时间范围"
        placeholder="选择时间范围"
      />

      <!-- 搜索框 -->
      <div class="col-span-1 lg:col-span-2">
        <Input
          v-model="filters.search"
          placeholder="搜索日志内容..."
          type="search"
        >
          <template #prefix>
            <Icon name="search" class="w-4 h-4 text-gray-400" />
          </template>
        </Input>
      </div>
    </div>

    <!-- 操作按钮 -->
    <div class="flex justify-end space-x-2">
      <Button variant="outline" @click="resetFilters">
        重置
      </Button>
      <Button @click="applyFilters">
        应用过滤
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { LOG_MODULES, LOG_ACTIONS, LOG_LEVELS } from '~/server/config/logger'
import type { LogModule, LogAction, LogLevel } from '~/types/log'

const emit = defineEmits<{
  (e: 'update:filters', filters: any): void
}>()

// 日期范围
const dateRange = ref<[Date | null, Date | null]>([null, null])

// 过滤条件
const filters = ref({
  module: undefined as LogModule | undefined,
  action: undefined as LogAction | undefined,
  level: undefined as string | undefined,
  userId: undefined as string | undefined,
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
const userOptions = ref([])

// 获取用户列表
const fetchUsers = async () => {
  try {
    const response = await useFetch('/api/admin/users')    
    // userOptions.value = response.data.value?.map((user: any) => ({
    //   value: user.id.toString(),
    //   label: user.username
    // })) || []
  } catch (error) {
    console.error('Failed to fetch users:', error)
  }
}

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
    module: undefined,
    action: undefined,
    level: undefined,
    userId: undefined,
    search: '',
    startDate: undefined,
    endDate: undefined
  }
  dateRange.value = [null, null]
  emit('update:filters', { ...filters.value })
}

// 初始化
onMounted(() => {
  fetchUsers()
})
</script>
