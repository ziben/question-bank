<!-- 日志管理页面 -->
<template>
  <div class="space-y-6">
    <PageHeader>
      <template #title>系统日志</template>
      <template #description>
        查看和管理系统操作日志
      </template>
    </PageHeader>

    <!-- 日志过滤器 -->
    <LogFilter
      v-model:filters="filters"
      @update:filters="handleFilterChange"
    />

    <!-- 日志列表 -->
    <LogList
      :logs="logs"
      :total="total"
      v-model:current-page="currentPage"
      :page-size="pageSize"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import LogFilter from '@/components/logs/LogFilter.vue'
import LogList from '@/components/logs/LogList.vue'

// 分页参数
const currentPage = ref(1)
const pageSize = ref(50)
const total = ref(0)

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
const logs = ref([])

// 获取日志数据
const fetchLogs = async () => {
  try {
    const response = await useFetch('/api/admin/logs', {
      query: {
        page: currentPage.value,
        pageSize: pageSize.value,
        ...filters.value
      }
    })

    if (response.data.value) {
      logs.value = response.data.value.items
      total.value = response.data.value.total
    }
  } catch (error) {
    console.error('Failed to fetch logs:', error)
  }
}

// 处理过滤器变化
const handleFilterChange = () => {
  currentPage.value = 1
  fetchLogs()
}

// 处理分页变化
const handlePageChange = (page: number) => {
  currentPage.value = page
  fetchLogs()
}

// 初始化
onMounted(() => {
  fetchLogs()
})
</script>
