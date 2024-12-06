<!-- 日志统计分析页面 -->
<template>
  <div class="container mx-auto p-4">
    <div class="mb-6">
      <h1 class="text-2xl font-bold">日志统计分析</h1>
      <p class="text-gray-600">系统操作数据分析和趋势</p>
    </div>

    <!-- 时间范围选择 -->
    <div class="bg-white rounded-lg shadow p-4 mb-6">
      <div class="flex items-center space-x-4">
        <DateRangePicker
          v-model="dateRange"
          class="w-72"
          @update:model-value="fetchData"
        />
        <Select
          v-model="timeGranularity"
          :options="granularityOptions"
          class="w-36"
          @update:model-value="fetchData"
        />
      </div>
    </div>

    <!-- 统计卡片 -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div v-for="stat in statistics" :key="stat.title" class="bg-white rounded-lg shadow p-4">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-600">{{ stat.title }}</p>
            <p class="text-2xl font-semibold">{{ stat.value }}</p>
          </div>
          <div :class="stat.trend === 'up' ? 'text-green-500' : 'text-red-500'" class="text-2xl">
            <Icon :name="stat.trend === 'up' ? 'ri:arrow-up-line' : 'ri:arrow-down-line'" />
          </div>
        </div>
        <div class="mt-2">
          <p class="text-sm text-gray-500">{{ stat.description }}</p>
        </div>
      </div>
    </div>

    <!-- 图表区域 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- 操作趋势图 -->
      <div class="bg-white rounded-lg shadow p-4">
        <h3 class="text-lg font-medium mb-4">操作趋势</h3>
        <Line
          :data="operationTrendData"
          :options="lineChartOptions"
        />
      </div>

      <!-- 模块分布图 -->
      <div class="bg-white rounded-lg shadow p-4">
        <h3 class="text-lg font-medium mb-4">模块分布</h3>
        <Pie
          :data="moduleDistributionData"
          :options="pieChartOptions"
        />
      </div>

      <!-- 用户活跃度图 -->
      <div class="bg-white rounded-lg shadow p-4">
        <h3 class="text-lg font-medium mb-4">用户活跃度</h3>
        <Bar
          :data="userActivityData"
          :options="barChartOptions"
        />
      </div>

      <!-- 操作类型分布图 -->
      <div class="bg-white rounded-lg shadow p-4">
        <h3 class="text-lg font-medium mb-4">操作类型分布</h3>
        <Doughnut
          :data="actionDistributionData"
          :options="doughnutChartOptions"
        />
      </div>
    </div>

    <!-- 详细数据表格 -->
    <div class="mt-6 bg-white rounded-lg shadow overflow-hidden">
      <Table
        :data="detailedStats"
        :columns="columns"
        :loading="loading"
      >
        <!-- 趋势列 -->
        <template #trend="{ row }">
          <div class="flex items-center">
            <span :class="row.trend >= 0 ? 'text-green-500' : 'text-red-500'">
              {{ formatTrend(row.trend) }}
            </span>
            <Icon
              :name="row.trend >= 0 ? 'ri:arrow-up-line' : 'ri:arrow-down-line'"
              class="ml-1"
              :class="row.trend >= 0 ? 'text-green-500' : 'text-red-500'"
            />
          </div>
        </template>
      </Table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { Line, Pie, Bar, Doughnut } from 'vue-chartjs'
import { useToast } from '@/composables/useToast'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
} from 'chart.js'

// 注册 ChartJS 组件
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
)

const toast = useToast()

// 时间粒度选项
const granularityOptions = [
  { label: '小时', value: 'hour' },
  { label: '天', value: 'day' },
  { label: '周', value: 'week' },
  { label: '月', value: 'month' }
]

// 状态变量
const dateRange = ref<[Date, Date]>([new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), new Date()])
const timeGranularity = ref('day')
const loading = ref(false)

// 统计数据
const statistics = ref([
  {
    title: '总操作次数',
    value: '0',
    trend: 'up',
    description: '较上期增长 20%'
  },
  {
    title: '异常操作',
    value: '0',
    trend: 'down',
    description: '较上期减少 5%'
  },
  {
    title: '活跃用户数',
    value: '0',
    trend: 'up',
    description: '较上期增长 15%'
  },
  {
    title: '平均响应时间',
    value: '0ms',
    trend: 'up',
    description: '较上期提升 10%'
  }
])

// 图表数据
const operationTrendData = ref({
  labels: [],
  datasets: [
    {
      label: '操作次数',
      data: [],
      fill: false,
      borderColor: '#3b82f6',
      tension: 0.1
    }
  ]
})

const moduleDistributionData = ref({
  labels: [],
  datasets: [
    {
      data: [],
      backgroundColor: [
        '#3b82f6',
        '#10b981',
        '#f59e0b',
        '#ef4444',
        '#8b5cf6',
        '#ec4899',
        '#6366f1'
      ]
    }
  ]
})

const userActivityData = ref({
  labels: [],
  datasets: [
    {
      label: '活跃用户数',
      data: [],
      backgroundColor: '#3b82f6'
    }
  ]
})

const actionDistributionData = ref({
  labels: [],
  datasets: [
    {
      data: [],
      backgroundColor: [
        '#3b82f6',
        '#10b981',
        '#f59e0b',
        '#ef4444',
        '#8b5cf6'
      ]
    }
  ]
})

// 图表配置
const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const
    }
  }
}

const pieChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right' as const
    }
  }
}

const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const
    }
  }
}

const doughnutChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right' as const
    }
  }
}

// 表格列定义
const columns = [
  {
    title: '指标',
    key: 'metric'
  },
  {
    title: '当前值',
    key: 'current'
  },
  {
    title: '上期值',
    key: 'previous'
  },
  {
    title: '变化趋势',
    key: 'trend',
    slot: 'trend'
  }
]

// 详细统计数据
const detailedStats = ref([])

// 获取统计数据
const fetchData = async () => {
  try {
    loading.value = true
    const [startDate, endDate] = dateRange.value

    const response = await $fetch('/api/admin/logs/statistics', {
      params: {
        startDate,
        endDate,
        granularity: timeGranularity.value
      }
    })

    // 更新统计卡片数据
    updateStatistics(response.overview)

    // 更新图表数据
    updateCharts(response.charts)

    // 更新详细统计数据
    updateDetailedStats(response.details)
  } catch (error) {
    toast.error('获取统计数据失败')
    console.error('Failed to fetch statistics:', error)
  } finally {
    loading.value = false
  }
}

// 更新统计卡片数据
const updateStatistics = (overview: any) => {
  statistics.value = [
    {
      title: '总操作次数',
      value: overview.totalOperations.toString(),
      trend: overview.operationsTrend >= 0 ? 'up' : 'down',
      description: `较上期${overview.operationsTrend >= 0 ? '增长' : '减少'} ${Math.abs(overview.operationsTrend)}%`
    },
    {
      title: '异常操作',
      value: overview.abnormalOperations.toString(),
      trend: overview.abnormalTrend >= 0 ? 'up' : 'down',
      description: `较上期${overview.abnormalTrend >= 0 ? '增长' : '减少'} ${Math.abs(overview.abnormalTrend)}%`
    },
    {
      title: '活跃用户数',
      value: overview.activeUsers.toString(),
      trend: overview.usersTrend >= 0 ? 'up' : 'down',
      description: `较上期${overview.usersTrend >= 0 ? '增长' : '减少'} ${Math.abs(overview.usersTrend)}%`
    },
    {
      title: '平均响应时间',
      value: `${overview.averageResponse}ms`,
      trend: overview.responseTrend >= 0 ? 'up' : 'down',
      description: `较上期${overview.responseTrend >= 0 ? '提升' : '降低'} ${Math.abs(overview.responseTrend)}%`
    }
  ]
}

// 更新图表数据
const updateCharts = (charts: any) => {
  // 更新操作趋势图
  operationTrendData.value = {
    labels: charts.operationTrend.labels,
    datasets: [{
      label: '操作次数',
      data: charts.operationTrend.data,
      fill: false,
      borderColor: '#3b82f6',
      tension: 0.1
    }]
  }

  // 更新模块分布图
  moduleDistributionData.value = {
    labels: charts.moduleDistribution.labels,
    datasets: [{
      data: charts.moduleDistribution.data,
      backgroundColor: [
        '#3b82f6',
        '#10b981',
        '#f59e0b',
        '#ef4444',
        '#8b5cf6',
        '#ec4899',
        '#6366f1'
      ]
    }]
  }

  // 更新用户活跃度图
  userActivityData.value = {
    labels: charts.userActivity.labels,
    datasets: [{
      label: '活跃用户数',
      data: charts.userActivity.data,
      backgroundColor: '#3b82f6'
    }]
  }

  // 更新操作类型分布图
  actionDistributionData.value = {
    labels: charts.actionDistribution.labels,
    datasets: [{
      data: charts.actionDistribution.data,
      backgroundColor: [
        '#3b82f6',
        '#10b981',
        '#f59e0b',
        '#ef4444',
        '#8b5cf6'
      ]
    }]
  }
}

// 更新详细统计数据
const updateDetailedStats = (details: any) => {
  detailedStats.value = details
}

// 格式化趋势数据
const formatTrend = (trend: number) => {
  const prefix = trend >= 0 ? '+' : ''
  return `${prefix}${trend}%`
}

// 初始化
onMounted(() => {
  fetchData()
})
</script>
