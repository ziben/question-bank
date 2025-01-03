<!-- 日志管理页面 -->
<template>
  <div class="hidden h-full flex-1 flex-col space-y-8 p-1 md:flex">
    <div class="flex items-center justify-between space-y-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">系统日志</h2>
        <p class="text-muted-foreground">查看和管理系统操作日志，追踪用户行为和系统变更</p>
      </div>
      <Button variant="outline" @click="handleExport" :loading="exporting">
        <Icon name="download" class="mr-2 h-4 w-4" />
        {{ exporting ? '导出中...' : '导出日志' }}
      </Button>
    </div>

    <!-- 日志过滤器 -->
    <LogFilter v-model:filters="filters" @update:filters="handleFilterChange" />

    <!-- 日志列表 -->
    <MyNewDataTable :toolbar="true" :data="logs" :columns="columns" :filter_column="'content'" :pagination="{
      page: currentPage,
      pageSize: pageSize,
      total: total || 0,
      onPageChange: handlePageChange,
      onPageSizeChange: handlePageSizeChange
    }" @action="handleAction" />

    <!-- 日志详情对话框 -->
    <Dialog :open="showDialog" @update:open="showDialog = $event">
      <DialogContent class="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>日志详情</DialogTitle>
          <DialogDescription>
            查看日志的详细信息，包括操作内容、请求参数和响应结果
          </DialogDescription>
        </DialogHeader>

        <div v-if="selectedLog" class="space-y-6">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <Label class="text-sm font-medium text-muted-foreground">模块</Label>
              <div class="mt-1">{{ selectedLog.module }}</div>
            </div>
            <div>
              <Label class="text-sm font-medium text-muted-foreground">操作</Label>
              <div class="mt-1">{{ selectedLog.action }}</div>
            </div>
            <div>
              <Label class="text-sm font-medium text-muted-foreground">时间</Label>
              <div class="mt-1">{{ selectedLog.createdAt }}</div>
            </div>
            <div>
              <Label class="text-sm font-medium text-muted-foreground">用户</Label>
              <div class="mt-1">{{ selectedLog.userId }}</div>
            </div>
            <div>
              <Label class="text-sm font-medium text-muted-foreground">IP</Label>
              <div class="mt-1">{{ selectedLog.ip }}</div>
            </div>
            <div>
              <Label class="text-sm font-medium text-muted-foreground">User Agent</Label>
              <div class="mt-1 truncate">{{ selectedLog.userAgent }}</div>
            </div>
          </div>

          <div>
            <Label class="text-sm font-medium text-muted-foreground">详细信息</Label>
            <ScrollArea class="mt-2 h-[300px]">
              <pre class="p-4 rounded-lg bg-muted text-sm">{{ JSON.stringify(selectedLog.detail, null, 2) }}</pre>
            </ScrollArea>
          </div>
        </div>

        <DialogFooter>
          <Button @click="showDialog = false">关闭</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LogFilter from '@/components/logs/LogFilter.vue'
import type { SystemLog } from '@prisma/client'
import { columns } from '@/components/logs/columns'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/shadcn/dialog'
import { ScrollArea } from '@/components/shadcn/scroll-area'
import { Card, CardContent } from '@/components/shadcn/card'
import { Label } from '@/components/shadcn/label'
import { Button } from '@/components/shadcn/button'
import { useCountSystemLog, useFindManySystemLog } from '~/lib/hooks'

// 分页参数
const currentPage = ref(1)
const pageSize = ref(10)

// 过滤参数
const filters = ref({
  module: null,
  action: null,
  level: null,
  userId: null,
  search: '',
  startDate: null,
  endDate: null
})

// 日志数据
// 数据查询
const qureyOptions = computed(() => ({
  skip: (currentPage.value - 1) * pageSize.value,
  take: pageSize.value,
  orderBy: {
    createdAt: 'desc' as const
  },
}))

const { data: total } = useCountSystemLog()
const { data: logs } = useFindManySystemLog(qureyOptions)

const showDialog = ref(false)
const selectedLog = ref<SystemLog | null>(null)
const exporting = ref(false)

// 处理过滤器变化
const handleFilterChange = () => {
  currentPage.value = 1
}

// 处理分页变化
const handlePageChange = (page: number) => {
  currentPage.value = page
}

// 处理分页变化
const handlePageSizeChange = (size: number) => {
  currentPage.value = 1
  pageSize.value = size
}

// 处理表格操作
const handleAction = (action: string, log: SystemLog) => {
  if (action === 'view') {
    selectedLog.value = log
    showDialog.value = true
  }
}

// 处理导出
const handleExport = async () => {
  exporting.value = true
  try {
    const response = await useFetch('/api/admin/logs/export', {
      query: filters.value
    })
    // 处理导出响应
  } catch (error) {
    console.error('Failed to export logs:', error)
  } finally {
    exporting.value = false
  }
}
</script>
