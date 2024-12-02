<template>
  <div class="container py-8 mx-auto">
    <h2 class="text-3xl font-bold tracking-tight mb-8">题库统计</h2>

    <!-- 统计卡片 -->
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium">总题目数</CardTitle>
          <BookOpen class="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">{{ statistics?.totalQuestions || 0 }}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium">科目数</CardTitle>
          <BookmarkIcon class="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">{{ statistics?.totalSubjects || 0 }}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium">本月新增</CardTitle>
          <TrendingUp class="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">{{ statistics?.questionsThisMonth || 0 }}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium">今日新增</CardTitle>
          <CalendarDays class="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">{{ statistics?.questionsToday || 0 }}</div>
        </CardContent>
      </Card>
    </div>

    <!-- 统计表格 -->
    <div class="grid gap-4 md:grid-cols-2">
      <!-- 题型分布 -->
      <Card>
        <CardHeader>
          <CardTitle>题型分布</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>题型</TableHead>
                <TableHead class="text-right">数量</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="item in statistics?.byType" :key="item.type">
                <TableCell>{{ formatType(item.type) }}</TableCell>
                <TableCell class="text-right">{{ item.count }}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <!-- 难度分布 -->
      <Card>
        <CardHeader>
          <CardTitle>难度分布</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>难度</TableHead>
                <TableHead class="text-right">数量</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="item in statistics?.byDifficulty" :key="item.difficulty">
                <TableCell>{{ formatDifficulty(item.difficulty) }}</TableCell>
                <TableCell class="text-right">{{ item.count }}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BookOpen, BookmarkIcon, TrendingUp, CalendarDays } from 'lucide-vue-next'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { DifficultyLevelLabels, type DifficultyLevel } from '~/types'
import { QuestionTypeLabels, type QuestionType } from '~/types'

interface Statistics {
  totalQuestions: number
  totalSubjects: number
  questionsToday: number
  questionsThisMonth: number
  byType: Array<{
    type: QuestionType
    count: number
  }>
  byDifficulty: Array<{
    difficulty: DifficultyLevel
    count: number
  }>
}

// 获取统计数据
const { data: statistics } = await useFetch<Statistics>('/api/statistics')

// 格式化题型
const formatType = (type: QuestionType) => {
  return QuestionTypeLabels[type] || type
}

// 格式化难度
const formatDifficulty = (difficulty: DifficultyLevel) => {
  return DifficultyLevelLabels[difficulty] || difficulty
}
</script>
