<!-- 日志管理页面 -->
<template>
  <div class="hidden h-full flex-1 flex-col space-y-8 p-1 md:flex">
    <div class="flex items-center justify-between space-y-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">系统日志</h2>
        <p class="text-muted-foreground">查看和管理系统操作日志，追踪用户行为和系统变更</p>
      </div>
      <Button variant="outline" @click="handleExport" :loading="exporting">
        <Icon name="material-symbols:download" class="mr-2 h-4 w-4" />
        {{ exporting ? "导出中..." : "导出日志" }}
      </Button>
    </div>

    <!-- 日志过滤器 -->
    <LogsLogFilter v-model:filters="filters" @update:filters="handleFilterChange" />

    <!-- 日志列表 -->
    <MyNewDataTable 
      :toolbar="'test'" 
      :data="logs || []" 
      :columns="columns" 
      :filter_column="'detail'" 
      class="mt-2"
      :pagination="{
        page: currentPage,
        pageSize: pageSize,
        total: total || 0,
        onPageChange: handlePageChange,
        onPageSizeChange: handlePageSizeChange,
      }" 
      @action="handleAction" 
    />

    <!-- 日志详情对话框 -->
    <Dialog :open="showDetailDialog" @update:open="showDetailDialog = $event">
      <DialogContent class="max-w-[800px]">
        <DialogHeader>
          <DialogTitle>日志详情</DialogTitle>
          <DialogDescription>
            {{ $dayjs(selectedLog?.createdAt).format('YYYY-MM-DD HH:mm:ss') }}
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-6 py-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <Label class="text-sm font-medium text-muted-foreground">模块</Label>
              <div class="mt-1">{{ selectedLog?.module }}</div>
            </div>
            <div>
              <Label class="text-sm font-medium text-muted-foreground">操作</Label>
              <div class="mt-1">{{ selectedLog?.action }}</div>
            </div>
            <div>
              <Label class="text-sm font-medium text-muted-foreground">用户</Label>
              <div class="mt-1">{{ selectedLog?.user?.name }}</div>
            </div>
            <div>
              <Label class="text-sm font-medium text-muted-foreground">IP</Label>
              <div class="mt-1">{{ selectedLog?.ip }}</div>
            </div>
          </div>
          
          <div>
            <div>
              <Label class="text-sm font-medium text-muted-foreground">User Agent</Label>
              <div class="mt-1 break-words whitespace-pre-wrap">{{ selectedLog?.userAgent }}</div>
            </div>
          </div>

          <div>
            <Label class="text-sm font-medium text-muted-foreground">详细信息</Label>
            <ScrollArea class="mt-2 h-[300px]">
              <pre class="p-4 rounded-lg bg-muted text-sm break-all whitespace-pre-wrap overflow-x-hidden">{{ formattedDetail }}</pre>
            </ScrollArea>
          </div>
        </div>

        <DialogFooter>
          <Button @click="showDetailDialog = false">关闭</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import type { SystemLog } from "@prisma/client";
import type { LogFilter } from "~/types/filters";
import { DEFAULT_LOG_FILTER } from "~/types/filters";
import { columns } from "@/components/logs/columns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/shadcn/dialog";
import { ScrollArea } from "@/components/shadcn/scroll-area";
import { Card, CardContent } from "@/components/shadcn/card";
import { Label } from "@/components/shadcn/label";
import { Button } from "@/components/shadcn/button";
import { useCountSystemLog, useFindManySystemLog } from "~/lib/hooks";
import { keepPreviousData } from "@tanstack/vue-query";
import { queryOptions } from "~/types/query";

// 分页参数
const currentPage = ref(1);
const pageSize = ref(10);

// 过滤参数
const filters = ref<LogFilter>({ ...DEFAULT_LOG_FILTER });

// 日志数据
// 数据查询
const qureyArgs = computed(() => {
  // 构建where条件
  const where: any = {};

  // 模块过滤
  if (filters.value.module) {
    where.module = filters.value.module;
  }

  // 操作类型过滤
  if (filters.value.action) {
    where.action = filters.value.action;
  }

  // 用户ID过滤
  if (filters.value.userId) {
    where.userId = filters.value.userId;
  }

  // 内容搜索
  if (filters.value.search) {
    where.OR = [{ content: { contains: filters.value.search } }, { detail: { contains: filters.value.search } }];
  }

  // 时间范围过滤
  if (filters.value.startDate || filters.value.endDate) {
    where.createdAt = {};
    if (filters.value.startDate) {
      where.createdAt.gte = filters.value.startDate;
    }
    if (filters.value.endDate) {
      where.createdAt.lte = new Date(new Date(filters.value.endDate).setHours(23, 59, 59, 999));
    }
  }

  console.log(`过滤条件：${JSON.stringify(where)}`);

  return {
    include: {
      user: true,
    },
    where,
    skip: (currentPage.value - 1) * pageSize.value,
    take: pageSize.value,
    orderBy: {
      createdAt: "desc" as const,
    },
  };
});

const { data: total } = useCountSystemLog(computed(() => ({ where: qureyArgs.value.where })));
const { data: logs } = useFindManySystemLog(qureyArgs, queryOptions);

const showDialog = ref(false);
const showDetailDialog = ref(false);
const selectedLog = ref<SystemLog | null>(null);
const exporting = ref(false);

// 格式化详情JSON
const formattedDetail = computed(() => {
  if (!selectedLog.value?.detail) return ''
  try {
    const detail = typeof selectedLog.value.detail === 'string'
      ? JSON.parse(selectedLog.value.detail)
      : selectedLog.value.detail
    return JSON.stringify(detail, null, 2)
  } catch (error) {
    return selectedLog.value.detail
  }
})

// 处理过滤器变化
const handleFilterChange = (newFilters: LogFilter) => {
  filters.value = newFilters;
  currentPage.value = 1;
};

// 处理分页变化
const handlePageChange = (page: number) => {
  currentPage.value = page;
};

// 处理分页变化
const handlePageSizeChange = (size: number) => {
  currentPage.value = 1;
  pageSize.value = size;
};

// 处理表格操作
const handleAction = (action: string, log: SystemLog) => {
  if (action === "view") {
    selectedLog.value = log;
    showDetailDialog.value = true;
  } else if (action === "delete") {
    // TODO: 处理删除逻辑
  }
};

// 处理导出
const handleExport = async () => {
  exporting.value = true;
  try {
    const response = await useFetch("/api/admin/logs/export", {
      query: filters.value,
    });
    // 处理导出响应
  } catch (error) {
    console.error("Failed to export logs:", error);
  } finally {
    exporting.value = false;
  }
};

// 处理日志详情事件
const handleViewLogDetail = (event: CustomEvent) => {
  console.log('查看日志详情：', event.detail);
  // TODO: 在这里处理日志详情的显示逻辑
}

// 处理导出日志事件
const handleExportLog = (event: CustomEvent) => {
  console.log('导出日志：', event.detail);
  // TODO: 实现单条日志导出逻辑
}

// 处理删除日志事件
const handleDeleteLog = (event: CustomEvent) => {
  console.log('删除日志：', event.detail);
  // TODO: 实现删除日志逻辑
}

// 监听日志相关事件
onMounted(() => {
  window.addEventListener('view-log-detail', handleViewLogDetail as EventListener);
  window.addEventListener('export-log', handleExportLog as EventListener);
  window.addEventListener('delete-log', handleDeleteLog as EventListener);
});

onUnmounted(() => {
  window.removeEventListener('view-log-detail', handleViewLogDetail as EventListener);
  window.removeEventListener('export-log', handleExportLog as EventListener);
  window.removeEventListener('delete-log', handleDeleteLog as EventListener);
});
</script>
