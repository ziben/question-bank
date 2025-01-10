<!-- 日期范围选择组件 -->
<template>
  <div class="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
    <div class="flex-1">
      <Popover>
        <PopoverTrigger as-child>
          <Button variant="outline" class="w-full justify-start text-left font-normal h-10 px-3 py-2 relative" :class="[
            'w-full border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
            'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
            'disabled:cursor-not-allowed disabled:opacity-50'
          ]">
            <Icon name="lucide:calendar" class="mr-2 h-4 w-4 shrink-0" />
            <span class="truncate">{{ displayDateRange }}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0" align="start" :class="[
          'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          'data-[side=bottom]:slide-in-from-top-2',
          'data-[side=left]:slide-in-from-right-2',
          'data-[side=right]:slide-in-from-left-2',
          'data-[side=top]:slide-in-from-bottom-2',
        ]">
          <RangeCalendarRoot v-slot="{ weekDays }" v-model="selectedRange" class="p-1.5">
            <div class="flex gap-x-1">
              <div class="flex flex-col gap-1.5">
                <div class="flex items-center justify-between">
                  <button :class="cn(
                    buttonVariants({ variant: 'outline' }),
                    'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                  )
                    " @click="updateMonth('first', -1)">
                    <ChevronLeft class="h-4 w-4" />
                  </button>
                  <div :class="cn('text-sm font-medium')">
                    {{
                      formatter.format(toDate(firstMonth.value))
                    }}
                  </div>
                  <button :class="cn(
                    buttonVariants({ variant: 'outline' }),
                    'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                  )
                    " @click="updateMonth('first', 1)">
                    <ChevronRight class="h-4 w-4" />
                  </button>
                </div>
                <RangeCalendarGrid>
                  <RangeCalendarGridHead>
                    <RangeCalendarGridRow>
                      <RangeCalendarHeadCell v-for="day in weekDays" :key="day" class="w-full text-xs">
                        {{ day }}
                      </RangeCalendarHeadCell>
                    </RangeCalendarGridRow>
                  </RangeCalendarGridHead>
                  <RangeCalendarGridBody>
                    <RangeCalendarGridRow v-for="(
                    weekDates, index
                  ) in firstMonth.rows" :key="`weekDate-${index}`" class="mt-1 w-full">
                      <RangeCalendarCell v-for="weekDate in weekDates" :key="weekDate.toString()" :date="weekDate">
                        <RangeCalendarCellTrigger :day="weekDate" :month="firstMonth.value" />
                      </RangeCalendarCell>
                    </RangeCalendarGridRow>
                  </RangeCalendarGridBody>
                </RangeCalendarGrid>
              </div>
              <div class="flex flex-col gap-1.5">
                <div class="flex items-center justify-between">
                  <button :class="cn(
                    buttonVariants({ variant: 'outline' }),
                    'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                  )
                    " @click="updateMonth('second', -1)">
                    <ChevronLeft class="h-4 w-4" />
                  </button>
                  <div :class="cn('text-sm font-medium')">
                    {{
                      formatter.format(toDate(secondMonth.value))
                    }}
                  </div>

                  <button :class="cn(
                    buttonVariants({ variant: 'outline' }),
                    'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                  )
                    " @click="updateMonth('second', 1)">
                    <ChevronRight class="h-4 w-4" />
                  </button>
                </div>
                <RangeCalendarGrid>
                  <RangeCalendarGridHead>
                    <RangeCalendarGridRow>
                      <RangeCalendarHeadCell v-for="day in weekDays" :key="day" class="w-full text-xs">
                        {{ day }}
                      </RangeCalendarHeadCell>
                    </RangeCalendarGridRow>
                  </RangeCalendarGridHead>
                  <RangeCalendarGridBody>
                    <RangeCalendarGridRow v-for="(
                    weekDates, index
                  ) in secondMonth.rows" :key="`weekDate-${index}`" class="mt-1 w-full">
                      <RangeCalendarCell v-for="weekDate in weekDates" :key="weekDate.toString()" :date="weekDate">
                        <RangeCalendarCellTrigger :day="weekDate" :month="secondMonth.value" />
                      </RangeCalendarCell>
                    </RangeCalendarGridRow>
                  </RangeCalendarGridBody>
                </RangeCalendarGrid>
              </div>
            </div>
          </RangeCalendarRoot>
          <div class="border-t p-1.5">
            <div class="flex flex-wrap gap-1">
              <Button v-for="preset in presets" :key="preset.label" variant="outline" size="sm" class="h-6 text-xs px-2"
                @click="selectPreset(preset)">
                {{ preset.label }}
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, shallowRef, watch, onMounted } from 'vue'
import { createMonth, type Grid, toDate } from 'radix-vue/date'
import { type DateRange, RangeCalendarRoot, useDateFormatter } from 'radix-vue'
import { RangeCalendar } from '@/components/shadcn/range-calendar'
import { Button, buttonVariants } from '@/components/shadcn/button'
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from 'lucide-vue-next'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/shadcn/popover'
import {
  RangeCalendarCell,
  RangeCalendarCellTrigger,
  RangeCalendarGrid,
  RangeCalendarGridBody,
  RangeCalendarGridHead,
  RangeCalendarGridRow,
  RangeCalendarHeadCell,
} from '@/components/shadcn/range-calendar'

import { cn } from '@/lib/utils'
import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
  isEqualMonth,
  today,
  type DateValue,
} from '@internationalized/date'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  modelValue?: DateRange
}>()

const emit = defineEmits<{
  'update:modelValue': [value: DateRange]
}>()

// 获取当前月份的起始和结束日期
const getCurrentMonthRange = () => {
  const now = today(getLocalTimeZone())
  return {
    start: new CalendarDate(now.year, now.month, 1),
    end: now
  }
}

// 使用 useVModel 简化数据绑定，如果没有传入值则使用当前月
const selectedRange = useVModel(props, 'modelValue', emit, {
  defaultValue: getCurrentMonthRange()
})

const placeholder = ref<CalendarDate>(
  selectedRange.value?.start as CalendarDate || today(getLocalTimeZone())
)

// 初始化时如果没有选择日期，则设置为当前月
onMounted(() => {
  if (!props.modelValue) {
    selectedRange.value = getCurrentMonthRange()
  }
})

// 使用 shallowRef 优化性能
const formatter = shallowRef(new DateFormatter('zh-CN', {
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}))

// 预设范围 - 使用 @internationalized/date
const presets = computed(() => {
  const now = today(getLocalTimeZone())
  const currentMonth = new CalendarDate(now.year, now.month, 1)
  const lastMonth = currentMonth.subtract({ months: 1 })

  return [
    {
      label: '今天',
      range: { start: now, end: now }
    },
    {
      label: '本周',
      range: {
        start: now.subtract({ days: toDate(now).getDay() || 7 - 1 }),
        end: now
      }
    },
    {
      label: '本月',
      range: {
        start: currentMonth,
        end: now
      }
    },
    {
      label: '上月',
      range: {
        start: lastMonth,
        end: new CalendarDate(lastMonth.year, lastMonth.month + 1, 0)
      }
    },
    {
      label: '近7天',
      range: {
        start: now.subtract({ days: 6 }),
        end: now
      }
    },
    {
      label: '近30天',
      range: {
        start: now.subtract({ days: 29 }),
        end: now
      }
    }
  ]
})

// 显示日期范围
const displayDateRange = computed(() => {
  if (!selectedRange.value?.start && !selectedRange.value?.end) {
    return '选择日期范围'
  }

  try {
    const start = selectedRange.value.start
    const end = selectedRange.value.end

    if (!start) {
      return '选择日期范围'
    }

    return `${formatter.value.format(toDate(start))} - ${formatter.value.format(toDate(end))}`
  } catch (error) {
    console.error('格式化日期范围失败:', error)
    return '选择日期范围'
  }
})

// 月份状态
const firstMonth = shallowRef(createMonth({
  dateObj: placeholder.value as DateValue,
  weekStartsOn: 1,
  locale: 'zh-CN',
  fixedWeeks: true
}))

// 第二个月始终显示第一个月的下一个月
const secondMonth = computed(() => {
  // 如果有结束日期，使用结束日期所在的月份
  if (selectedRange.value?.end) {
    return createMonth({
      dateObj: selectedRange.value.end,
      weekStartsOn: 1,
      locale: 'zh-CN',
      fixedWeeks: true
    })
  }
  
  // 否则显示下一个月
  const nextMonth = firstMonth.value.value.add({ months: 1 })
  return createMonth({
    dateObj: nextMonth,
    weekStartsOn: 1,
    locale: 'zh-CN',
    fixedWeeks: true
  })
})

// 更新月份
const updateMonth = (reference: 'first' | 'second', months: number) => {
  try {
    const currentValue = reference === 'first' ? firstMonth.value.value : secondMonth.value.value
    const newValue = currentValue.add({ months })
    
    firstMonth.value = createMonth({
      dateObj: newValue,
      weekStartsOn: 1,
      locale: 'zh-CN',
      fixedWeeks: true
    })
  } catch (error) {
    console.error('更新月份失败:', error)
  }
}

// 选择预设范围
const selectPreset = (preset: typeof presets.value[number]) => {
  try {
    selectedRange.value = preset.range
    
    // 更新第一个月为选中范围的开始月份
    firstMonth.value = createMonth({
      dateObj: preset.range.start,
      weekStartsOn: 1,
      locale: 'zh-CN',
      fixedWeeks: true
    })
    
    // secondMonth会通过computed自动更新为下一个月
  } catch (error) {
    console.error('选择预设范围失败:', error)
  }
}

// 监听占位符变化
watch(placeholder, (_placeholder) => {
  firstMonth.value = createMonth({
    dateObj: _placeholder as DateValue,
    weekStartsOn: 1,
    locale: 'zh-CN',
    fixedWeeks: true
  })
  // secondMonth会通过computed自动更新为下一个月
})
</script>

<style scoped>
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
}

.calendar-cell {
  @apply flex h-9 w-9 items-center justify-center rounded-md p-0 text-sm font-normal aria-selected:opacity-100;
}

.calendar-cell:hover:not([disabled]) {
  @apply bg-accent text-accent-foreground;
}

.calendar-cell[disabled] {
  @apply opacity-50 cursor-not-allowed;
}

.calendar-cell[aria-selected="true"] {
  @apply bg-primary text-primary-foreground;
}
</style>
