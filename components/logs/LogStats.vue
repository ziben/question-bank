<!-- 日志统计组件 -->
<template>
  <div class="space-y-6">
    <!-- 统计卡片 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="bg-white rounded-lg shadow p-6"
      >
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <component
              :is="stat.icon"
              class="h-6 w-6 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <div class="ml-4">
            <div class="text-sm font-medium text-gray-500">
              {{ stat.label }}
            </div>
            <div class="mt-1 text-2xl font-semibold text-gray-900">
              {{ stat.value }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 图表区域 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- 时间趋势图 -->
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-medium text-gray-900">日志趋势</h3>
          <Select
            v-model="timeGranularity"
            :options="granularityOptions"
            class="w-32"
          />
        </div>
        <div class="h-80">
          <LineChart
            :data="timeSeriesData"
            :options="lineChartOptions"
          />
        </div>
      </div>

      <!-- 模块分布图 -->
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-lg font-medium text-gray-900 mb-4">模块分布</h3>
        <div class="h-80">
          <DoughnutChart
            :data="moduleDistributionData"
            :options="doughnutChartOptions"
          />
        </div>
      </div>

      <!-- 日志等级分布图 -->
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-lg font-medium text-gray-900 mb-4">日志等级分布</h3>
        <div class="h-80">
          <BarChart
            :data="levelDistributionData"
            :options="barChartOptions"
          />
        </div>
      </div>

      <!-- 操作类型TOP10 -->
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-lg font-medium text-gray-900 mb-4">操作类型 TOP10</h3>
        <div class="h-80">
          <BarChart
            :data="actionDistributionData"
            :options="horizontalBarChartOptions"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line as LineChart, Bar as BarChart, Doughnut as DoughnutChart } from 'vue-chartjs'
import { LOG_MODULES, LOG_ACTIONS, LOG_LEVELS } from '~/server/config/logger'

// 注册 Chart.js 组件
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

const props = defineProps<{
  statistics: any
}>()

// 时间粒度选择
const timeGranularity = ref('day')
const granularityOptions = [
  { value: 'hour', label: '按小时' },
  { value: 'day', label: '按天' },
  { value: 'week', label: '按周' },
  { value: 'month', label: '按月' }
]

// 统计卡片数据
const stats = computed(() => [
  {
    label: '总日志数',
    value: props.statistics.overview.totalLogs,
    icon: 'DocumentTextIcon'
  },
  {
    label: '错误日志',
    value: props.statistics.overview.errorLogs,
    icon: 'ExclamationCircleIcon'
  },
  {
    label: '安全日志',
    value: props.statistics.overview.securityLogs,
    icon: 'ShieldCheckIcon'
  },
  {
    label: '活跃用户',
    value: props.statistics.overview.uniqueUsers,
    icon: 'UserGroupIcon'
  }
])

// 时间趋势数据
const timeSeriesData = computed(() => ({
  labels: props.statistics.details.timeStats.map((stat: any) => stat.time_bucket),
  datasets: [{
    label: '日志数量',
    data: props.statistics.details.timeStats.map((stat: any) => stat.count),
    borderColor: 'rgb(59, 130, 246)',
    backgroundColor: 'rgba(59, 130, 246, 0.5)',
    tension: 0.4
  }]
}))

// 模块分布数据
const moduleDistributionData = computed(() => {
  const data = props.statistics.details.moduleStats
  return {
    labels: data.map((stat: any) => stat.config.name),
    datasets: [{
      data: data.map((stat: any) => stat._count),
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(139, 92, 246, 0.8)',
        'rgba(236, 72, 153, 0.8)',
        'rgba(75, 85, 99, 0.8)'
      ]
    }]
  }
})

// 日志等级分布数据
const levelDistributionData = computed(() => {
  const data = props.statistics.details.levelStats
  const levelNames = ['DEBUG', 'INFO', 'WARN', 'ERROR', 'SECURITY']
  return {
    labels: levelNames,
    datasets: [{
      label: '日志数量',
      data: levelNames.map((_, index) => 
        data.find((stat: any) => stat.level === index)?._count || 0
      ),
      backgroundColor: [
        'rgba(156, 163, 175, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(139, 92, 246, 0.8)'
      ]
    }]
  }
})

// 操作类型分布数据
const actionDistributionData = computed(() => {
  const data = props.statistics.details.actionStats
    .sort((a: any, b: any) => b._count - a._count)
    .slice(0, 10)
  
  return {
    labels: data.map((stat: any) => stat.config.name),
    datasets: [{
      label: '操作次数',
      data: data.map((stat: any) => stat._count),
      backgroundColor: 'rgba(59, 130, 246, 0.8)'
    }]
  }
})

// 图表配置
const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      beginAtZero: true
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

const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
}

const horizontalBarChartOptions = {
  ...barChartOptions,
  indexAxis: 'y' as const
}

// 监听时间粒度变化
watch(timeGranularity, (value) => {
  emit('update:granularity', value)
})

const emit = defineEmits<{
  (e: 'update:granularity', value: string): void
}>()
</script>
