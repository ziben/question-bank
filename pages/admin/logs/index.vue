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
        {{ exporting ? "导出中..." : "导出日志" }}
      </Button>
    </div>

    <!-- 日志过滤器 -->
    <LogsLogFilter v-model:filters="filters" @update:filters="handleFilterChange" />

    <!-- 日志列表 -->
    <MyNewDataTable :toolbar="true" :data="logs || []" :columns="columns" :filter_column="'content'" :pagination="{
      page: currentPage,
      pageSize: pageSize,
      total: total || 0,
      onPageChange: handlePageChange,
      onPageSizeChange: handlePageSizeChange,
    }" @action="handleAction" />

    <!-- 日志详情对话框 -->
    <Dialog :open="showDialog" @update:open="showDialog = $event">
      <DialogContent class="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>日志详情</DialogTitle>
          <DialogDescription> 查看日志的详细信息，包括操作内容、请求参数和响应结果 </DialogDescription>
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
import { ref, computed } from "vue";
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

  // 日志等级过滤
  if (filters.value.level) {
    where.level = filters.value.level;
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

  return {
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
const selectedLog = ref<SystemLog | null>(null);
const exporting = ref(false);

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
    showDialog.value = true;
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
</script>
