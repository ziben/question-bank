<!-- 标签过滤器组件 -->
<template>
  <Card>
    <CardHeader class="p-4 flex flex-row items-center justify-between space-y-0">
      <CardTitle class="text-base">
        筛选
        <Badge variant="secondary" class="ml-2">
          {{ Object.values(filters).filter(Boolean).length }}
        </Badge>
      </CardTitle>
      <Button variant="ghost" size="icon" @click="isExpanded = !isExpanded">
        <Icon
          :name="isExpanded ? 'material-symbols:expand-less' : 'material-symbols:expand-more'"
          class="h-4 w-4"
        />
      </Button>
    </CardHeader>
    <CardContent v-show="isExpanded" class="p-4 pt-0 space-y-4">
      <!-- 搜索框 -->
      <div class="flex items-center gap-2">
        <Label class="min-w-16 shrink-0">搜索</Label>
        <div class="flex-1">
          <Input
            v-model="filters.search"
            placeholder="搜索标签名称或描述"
            class="w-full"
          >
            <template #prefix>
              <Icon name="material-symbols:search" class="h-4 w-4 text-muted-foreground" />
            </template>
            <template #suffix v-if="filters.search">
              <Button
                variant="ghost"
                size="icon"
                class="h-4 w-4 hover:bg-accent hover:text-accent-foreground"
                @click="clearFilter('search')"
                @mousedown.prevent
              >
                <Icon name="material-symbols:close" class="h-4 w-4" />
              </Button>
            </template>
          </Input>
        </div>
      </div>

      <!-- 创建时间范围 -->
      <div class="flex items-center gap-2">
        <Label class="min-w-16 shrink-0">创建时间</Label>
        <div class="flex-1">
          <DateRangePicker
            v-model="dateRange"
            :locale="zhCN"
            class="w-full"
            :placeholder="['开始日期', '结束日期']"
          />
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { zhCN } from 'date-fns/locale'
import type { DateRange } from '@/types/date'
import type { TagFilter } from '@/types/filters'

// Props 和 Emits
const props = defineProps<{
  filters: TagFilter
}>()

const emit = defineEmits<{
  'update:filters': [filters: TagFilter]
}>()

// 展开状态
const isExpanded = ref(false)

// 双向绑定
const filters = useVModel(props, 'filters', emit)

// 日期范围
const dateRange = computed<DateRange>({
  get: () => ({
    from: filters.value.startDate,
    to: filters.value.endDate
  }),
  set: (range) => {
    filters.value = {
      ...filters.value,
      startDate: range.from,
      endDate: range.to
    }
  }
})

// 清除过滤器
const clearFilter = (key: keyof TagFilter) => {
  if (key === 'search') {
    filters.value[key] = ''
  } else {
    filters.value[key] = undefined
  }
}
</script>
