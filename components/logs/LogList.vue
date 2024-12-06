<!-- 日志列表组件 -->
<template>
  <div class="space-y-4">
    <!-- 日志表格 -->
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              时间
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              模块/操作
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              用户
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              等级
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              详情
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              操作
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="log in logs" :key="log.id" class="hover:bg-gray-50">
            <!-- 时间 -->
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ formatDate(log.timestamp) }}
            </td>

            <!-- 模块/操作 -->
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex flex-col">
                <span class="text-sm font-medium text-gray-900">
                  {{ log.moduleConfig.name }}
                </span>
                <span class="text-sm text-gray-500">
                  {{ log.actionConfig.name }}
                </span>
              </div>
            </td>

            <!-- 用户 -->
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-8 w-8">
                  <UserAvatar :user="log.user" class="h-8 w-8" />
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">
                    {{ log.user.username }}
                  </div>
                  <div class="text-sm text-gray-500">
                    {{ log.user.email }}
                  </div>
                </div>
              </div>
            </td>

            <!-- 等级 -->
            <td class="px-6 py-4 whitespace-nowrap">
              <LogLevelBadge :level="log.level" />
            </td>

            <!-- 详情 -->
            <td class="px-6 py-4 text-sm text-gray-500">
              <div class="max-w-xs truncate">
                {{ getLogSummary(log.details) }}
              </div>
            </td>

            <!-- 操作 -->
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <Button
                variant="ghost"
                size="sm"
                @click="showLogDetails(log)"
              >
                查看详情
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 分页 -->
    <div class="flex justify-between items-center bg-white px-4 py-3 rounded-lg shadow">
      <div class="flex items-center">
        <span class="text-sm text-gray-700">
          共 {{ total }} 条记录
        </span>
      </div>
      <div class="flex justify-end">
        <Pagination
          :model-value="currentPage"
          :total="total"
          :page-size="pageSize"
          @update:model-value="handlePageChange"
        />
      </div>
    </div>

    <!-- 日志详情对话框 -->
    <Dialog v-model="showDialog" title="日志详情">
      <div class="space-y-4">
        <!-- 基本信息 -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="text-sm font-medium text-gray-500">模块</label>
            <div class="mt-1 text-sm text-gray-900">
              {{ selectedLog?.moduleConfig.name }}
            </div>
          </div>
          <div>
            <label class="text-sm font-medium text-gray-500">操作</label>
            <div class="mt-1 text-sm text-gray-900">
              {{ selectedLog?.actionConfig.name }}
            </div>
          </div>
          <div>
            <label class="text-sm font-medium text-gray-500">时间</label>
            <div class="mt-1 text-sm text-gray-900">
              {{ formatDate(selectedLog?.timestamp) }}
            </div>
          </div>
          <div>
            <label class="text-sm font-medium text-gray-500">用户</label>
            <div class="mt-1 text-sm text-gray-900">
              {{ selectedLog?.user.username }}
            </div>
          </div>
          <div>
            <label class="text-sm font-medium text-gray-500">IP</label>
            <div class="mt-1 text-sm text-gray-900">
              {{ selectedLog?.ip }}
            </div>
          </div>
          <div>
            <label class="text-sm font-medium text-gray-500">User Agent</label>
            <div class="mt-1 text-sm text-gray-900 truncate">
              {{ selectedLog?.userAgent }}
            </div>
          </div>
        </div>

        <!-- 详细信息 -->
        <div>
          <label class="text-sm font-medium text-gray-500">详细信息</label>
          <pre class="mt-1 p-4 bg-gray-50 rounded-lg text-sm text-gray-900 overflow-auto max-h-96">
            {{ JSON.stringify(selectedLog?.details, null, 2) }}
          </pre>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { formatDistance } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import LogLevelBadge from './LogLevelBadge.vue'

interface Props {
  logs: any[]
  total: number
  currentPage: number
  pageSize: number
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:currentPage': [page: number]
}>()

// 日志详情对话框
const showDialog = ref(false)
const selectedLog = ref<any>(null)

// 格式化日期
const formatDate = (date: string | Date) => {
  if (!date) return ''
  return formatDistance(new Date(date), new Date(), {
    addSuffix: true,
    locale: zhCN
  })
}

// 获取日志摘要
const getLogSummary = (details: any) => {
  if (typeof details === 'string') {
    try {
      details = JSON.parse(details)
    } catch {
      return details
    }
  }
  return details.description || JSON.stringify(details)
}

// 显示日志详情
const showLogDetails = (log: any) => {
  selectedLog.value = log
  showDialog.value = true
}

// 处理分页变化
function handlePageChange(page: number) {
  emit('update:currentPage', page)
}
</script>
