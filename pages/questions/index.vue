<script setup lang="ts">
import type { Question, PaginatedResponse } from '~/types/question'
import { formatType, formatDifficulty, formatDate } from '~/utils/format'

const { data, refresh, error: fetchError } = await useFetch<PaginatedResponse<Question>>('/api/questions')
const questions = computed(() => data.value?.data || [])
const isDeleting = ref<number | null>(null)
const alert = useAlert()

// 批量操作相关状态
const selectedIds = ref<Set<number>>(new Set())
const isBatchDeleting = ref(false)

// 监听获取数据的错误
watch(fetchError, (newError) => {
  if (newError) {
    alert.error('获取题目列表失败', '错误')
  }
})

// 选择相关方法
function toggleSelect(id: number) {
  if (selectedIds.value.has(id)) {
    selectedIds.value.delete(id)
  } else {
    selectedIds.value.add(id)
  }
}

function selectAll() {
  if (selectedIds.value.size === questions.value.length) {
    selectedIds.value.clear()
  } else {
    selectedIds.value = new Set(questions.value.map(q => q.id))
  }
}

// 删除相关方法
async function deleteQuestion(id: number) {
  try {
    isDeleting.value = id
    await $fetch(`/api/questions/${id}`, {
      method: 'DELETE'
    })
    alert.success('删除成功')
    refresh()
  } catch (error) {
    console.error('删除失败:', error)
    alert.error('删除失败，请稍后重试')
  } finally {
    isDeleting.value = null
  }
}

async function batchDelete() {
  if (selectedIds.value.size === 0) {
    alert.warning('请先选择要删除的题目')
    return
  }

  const confirmDelete = window.confirm(`确定要删除选中的 ${selectedIds.value.size} 个题目吗？`)
  if (!confirmDelete) return

  try {
    isBatchDeleting.value = true
    await $fetch('/api/questions/batch', {
      method: 'DELETE',
      body: {
        ids: Array.from(selectedIds.value)
      }
    })
    alert.success(`成功删除 ${selectedIds.value.size} 个题目`)
    selectedIds.value.clear()
    refresh()
  } catch (error) {
    console.error('批量删除失败:', error)
    alert.error('批量删除失败，请稍后重试')
  } finally {
    isBatchDeleting.value = false
  }
}

const previewQuestion = ref<Question | null>(null)
const showPreview = ref(false)

function openPreview(question: Question) {
  previewQuestion.value = question
  showPreview.value = true
}

function closePreview() {
  showPreview.value = false
  previewQuestion.value = null
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <!-- 批量操作工具栏 -->
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center space-x-4">
        <button
          class="btn-secondary"
          @click="selectAll"
        >
          {{ selectedIds.size === questions.length ? '取消全选' : '全选' }}
          <span class="text-sm text-gray-500 ml-2">
            ({{ selectedIds.size }}/{{ questions.length }})
          </span>
        </button>
        <button
          v-if="selectedIds.size > 0"
          class="btn-danger"
          :disabled="isBatchDeleting"
          @click="batchDelete"
        >
          <span v-if="isBatchDeleting">
            <i class="fas fa-spinner fa-spin mr-2"></i>
            正在删除...
          </span>
          <span v-else>
            <i class="fas fa-trash-alt mr-2"></i>
            批量删除
          </span>
        </button>
      </div>
      <NuxtLink
        to="/questions/new"
        class="btn-primary"
      >
        <i class="fas fa-plus mr-2"></i>
        新建题目
      </NuxtLink>
    </div>

    <!-- 题目列表 -->
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="w-8 px-6 py-3">
              <input
                type="checkbox"
                class="rounded border-gray-300"
                :checked="selectedIds.size === questions.length"
                :indeterminate="selectedIds.size > 0 && selectedIds.size < questions.length"
                @change="selectAll"
              >
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              标题
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              类型
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              难度
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              分类
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              创建时间
            </th>
            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              操作
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr
            v-for="question in questions"
            :key="question.id"
            class="hover:bg-gray-50"
          >
            <td class="px-6 py-4 whitespace-nowrap">
              <input
                type="checkbox"
                class="rounded border-gray-300"
                :checked="selectedIds.has(question.id)"
                @change="toggleSelect(question.id)"
              >
            </td>
            <td class="px-6 py-4">
              <div class="text-sm font-medium text-gray-900">
                {{ question.title }}
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span
                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                :class="{
                  'bg-blue-100 text-blue-800': question.type === 'multiple_choice',
                  'bg-green-100 text-green-800': question.type === 'true_false',
                  'bg-purple-100 text-purple-800': question.type === 'essay'
                }"
              >
                {{ formatType(question.type) }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span
                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                :class="{
                  'bg-green-100 text-green-800': question.difficulty === 'easy',
                  'bg-yellow-100 text-yellow-800': question.difficulty === 'medium',
                  'bg-red-100 text-red-800': question.difficulty === 'hard'
                }"
              >
                {{ formatDifficulty(question.difficulty) }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ question.category.name }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ formatDate(question.createdAt) }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
              <button
                class="text-indigo-600 hover:text-indigo-900"
                @click="openPreview(question)"
              >
                预览
              </button>
              <NuxtLink
                :to="`/questions/${question.id}/edit`"
                class="text-blue-600 hover:text-blue-900"
              >
                编辑
              </NuxtLink>
              <button
                class="text-red-600 hover:text-red-900"
                :disabled="isDeleting === question.id"
                @click="deleteQuestion(question.id)"
              >
                <span v-if="isDeleting === question.id">
                  <i class="fas fa-spinner fa-spin"></i>
                </span>
                <span v-else>删除</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 预览对话框 -->
    <div
      v-if="showPreview"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
      @click.self="closePreview"
    >
      <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <h3 class="text-lg font-medium text-gray-900 mb-4">
            {{ previewQuestion?.title }}
          </h3>
          <div class="prose max-w-none">
            <div class="mb-4">
              <strong>题目内容：</strong>
              <div class="mt-2">{{ previewQuestion?.content }}</div>
            </div>
            <div v-if="previewQuestion?.options" class="mb-4">
              <strong>选项：</strong>
              <div class="mt-2">{{ previewQuestion?.options }}</div>
            </div>
            <div class="mb-4">
              <strong>答案：</strong>
              <div class="mt-2">{{ previewQuestion?.answer }}</div>
            </div>
            <div v-if="previewQuestion?.explanation" class="mb-4">
              <strong>解析：</strong>
              <div class="mt-2">{{ previewQuestion?.explanation }}</div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-6 py-3 flex justify-end">
          <button
            class="btn-secondary"
            @click="closePreview"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
