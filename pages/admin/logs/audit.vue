<!-- 审计日志页面 -->
<template>
  <div class="container mx-auto p-4">
    <div class="mb-6">
      <h1 class="text-2xl font-bold">审计日志</h1>
      <p class="text-gray-600">查看对象操作历史记录</p>
    </div>

    <!-- 搜索区域 -->
    <div class="bg-white rounded-lg shadow p-4 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- 模块选择 -->
        <Select
          v-model="filters.module"
          :options="moduleOptions"
          placeholder="选择模块"
          class="w-full"
        />

        <!-- 目标ID输入 -->
        <Input
          v-model="filters.targetId"
          placeholder="输入目标ID"
          class="w-full"
        />

        <!-- 搜索按钮 -->
        <Button
          @click="fetchAuditLogs"
          :loading="loading"
          class="w-full"
        >
          查询
        </Button>
      </div>
    </div>

    <!-- 时间轴 -->
    <div v-if="auditLogs.length > 0" class="bg-white rounded-lg shadow p-4">
      <Timeline>
        <TimelineItem
          v-for="log in auditLogs"
          :key="log.id"
          :dot-color="getActionColor(log.action)"
        >
          <template #dot>
            <Icon :name="getActionIcon(log.action)" class="text-lg" />
          </template>
          <div class="flex justify-between items-start">
            <div>
              <p class="font-medium">{{ formatAction(log.action) }}</p>
              <p class="text-sm text-gray-500">
                由 {{ log.user.username }} 在 {{ formatDateTime(log.timestamp) }} 操作
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              @click="showDetails(log)"
            >
              查看详情
            </Button>
          </div>
          <p class="mt-2 text-gray-600">
            {{ getActionSummary(log) }}
          </p>
        </TimelineItem>
      </Timeline>
    </div>

    <!-- 空状态 -->
    <div
      v-else-if="!loading"
      class="bg-white rounded-lg shadow p-8 text-center"
    >
      <Icon name="ri:file-search-line" class="text-4xl text-gray-400 mb-2" />
      <p class="text-gray-600">暂无审计日志记录</p>
      <p class="text-sm text-gray-500 mt-1">请选择模块和目标ID进行查询</p>
    </div>

    <!-- 详情对话框 -->
    <Dialog v-model:open="detailsDialog.open">
      <DialogContent class="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>操作详情</DialogTitle>
          <DialogDescription>
            查看完整的操作信息
          </DialogDescription>
        </DialogHeader>
        <div class="py-4">
          <div v-if="detailsDialog.data" class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="text-sm font-medium text-gray-500">操作时间</label>
                <p>{{ formatDateTime(detailsDialog.data.timestamp) }}</p>
              </div>
              <div>
                <label class="text-sm font-medium text-gray-500">操作用户</label>
                <p>{{ detailsDialog.data.user.username }}</p>
              </div>
              <div>
                <label class="text-sm font-medium text-gray-500">IP地址</label>
                <p>{{ detailsDialog.data.ip || '-' }}</p>
              </div>
              <div>
                <label class="text-sm font-medium text-gray-500">浏览器</label>
                <p>{{ detailsDialog.data.userAgent || '-' }}</p>
              </div>
            </div>
            <div>
              <label class="text-sm font-medium text-gray-500">变更前</label>
              <pre v-if="detailsDialog.data.details.before" class="mt-1 p-2 bg-gray-50 rounded text-sm overflow-auto">{{ JSON.stringify(detailsDialog.data.details.before, null, 2) }}</pre>
              <p v-else class="mt-1 text-gray-500">无</p>
            </div>
            <div>
              <label class="text-sm font-medium text-gray-500">变更后</label>
              <pre v-if="detailsDialog.data.details.after" class="mt-1 p-2 bg-gray-50 rounded text-sm overflow-auto">{{ JSON.stringify(detailsDialog.data.details.after, null, 2) }}</pre>
              <p v-else class="mt-1 text-gray-500">无</p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button @click="detailsDialog.open = false">关闭</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { format } from 'date-fns'
import { useToast } from '@/composables/useToast'

const toast = useToast()

// 过滤条件
const filters = reactive({
  module: '',
  targetId: ''
})

// 模块选项
const moduleOptions = [
  { label: '用户', value: 'USER' },
  { label: '角色', value: 'ROLE' },
  { label: '权限', value: 'PERMISSION' },
  { label: '题目', value: 'QUESTION' },
  { label: '考试', value: 'EXAM' },
  { label: '测试', value: 'TEST' }
]

// 加载状态
const loading = ref(false)

// 审计日志数据
const auditLogs = ref([])

// 详情对话框
const detailsDialog = reactive({
  open: false,
  data: null as any
})

// 获取审计日志
const fetchAuditLogs = async () => {
  if (!filters.module || !filters.targetId) {
    toast.warning('请选择模块和输入目标ID')
    return
  }

  try {
    loading.value = true
    const response = await $fetch('/api/admin/logs/audit', {
      params: {
        module: filters.module,
        targetId: filters.targetId
      }
    })
    auditLogs.value = response
  } catch (error) {
    toast.error('获取审计日志失败')
    console.error('Failed to fetch audit logs:', error)
  } finally {
    loading.value = false
  }
}

// 显示详情
const showDetails = (log: any) => {
  detailsDialog.data = log
  detailsDialog.open = true
}

// 格式化操作类型
const formatAction = (action: string) => {
  const actionMap: Record<string, string> = {
    CREATE: '创建',
    UPDATE: '更新',
    DELETE: '删除',
    ASSIGN: '分配',
    UNASSIGN: '取消分配'
  }
  return actionMap[action] || action
}

// 获取操作图标
const getActionIcon = (action: string) => {
  const iconMap: Record<string, string> = {
    CREATE: 'ri:add-circle-line',
    UPDATE: 'ri:edit-line',
    DELETE: 'ri:delete-bin-line',
    ASSIGN: 'ri:link',
    UNASSIGN: 'ri:unlink'
  }
  return iconMap[action] || 'ri:question-line'
}

// 获取操作颜色
const getActionColor = (action: string) => {
  const colorMap: Record<string, string> = {
    CREATE: 'success',
    UPDATE: 'warning',
    DELETE: 'error',
    ASSIGN: 'info',
    UNASSIGN: 'default'
  }
  return colorMap[action] || 'default'
}

// 获取操作摘要
const getActionSummary = (log: any) => {
  const details = JSON.parse(log.details)
  switch (log.action) {
    case 'CREATE':
      return `创建了新的${getModuleName(log.module)}`
    case 'UPDATE':
      return `更新了${getModuleName(log.module)}的信息`
    case 'DELETE':
      return `删除了${getModuleName(log.module)}`
    case 'ASSIGN':
      return `分配了${getModuleName(log.module)}的权限`
    case 'UNASSIGN':
      return `取消了${getModuleName(log.module)}的权限`
    default:
      return `对${getModuleName(log.module)}进行了${formatAction(log.action)}操作`
  }
}

// 获取模块名称
const getModuleName = (module: string) => {
  const moduleMap: Record<string, string> = {
    USER: '用户',
    ROLE: '角色',
    PERMISSION: '权限',
    QUESTION: '题目',
    EXAM: '考试',
    TEST: '测试'
  }
  return moduleMap[module] || module
}

// 格式化日期时间
const formatDateTime = (date: string) => format(new Date(date), 'yyyy-MM-dd HH:mm:ss')
</script>
