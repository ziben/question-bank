<script setup lang="ts">
import type { Question, PaginatedResponse } from '~/types'
import QuestionsDataTable from '@/components/questions/data-table.vue'

const route = useRoute()
const router = useRouter()
const alert = useAlert()

const { data, refresh, error: fetchError } = await useFetch<PaginatedResponse<Question>>('/api/questions', {
  query: computed(() => ({
    page: route.query.page || 1,
    limit: route.query.limit || 10,
    search: route.query.search || '',
    sort: route.query.sort || 'createdAt',
    order: route.query.order || 'desc',
    category: route.query.category,
    difficulty: route.query.difficulty
  }))
})

const questions = computed(() => data.value?.items || [])
const pagination = computed(() => data.value?.pagination)

// 监听获取数据的错误
watch(fetchError, (newError) => {
  if (newError) {
    alert.error('获取题目列表失败', '错误')
  }
})

// 监听路由变化，刷新数据
watch(() => route.query, () => {
  refresh()
}, { deep: true })

const handleDelete = async (id: number) => {
  try {
    await $fetch(`/api/questions/${id}`, {
      method: 'DELETE'
    })
    alert.success('删除成功')
    refresh()
  } catch (error) {
    console.error('删除失败:', error)
    alert.error('删除失败，请稍后重试')
  }
}

const handleBatchDelete = async (ids: number[]) => {
  if (ids.length === 0) {
    alert.warning('请先选择要删除的题目')
    return
  }

  const confirmDelete = window.confirm(`确定要删除选中的 ${ids.length} 个题目吗？`)
  if (!confirmDelete) return

  try {
    await $fetch('/api/questions/batch', {
      method: 'DELETE',
      body: { ids }
    })
    alert.success(`成功删除 ${ids.length} 个题目`)
    refresh()
  } catch (error) {
    console.error('批量删除失败:', error)
    alert.error('批量删除失败，请稍后重试')
  }
}

const handleEdit = (id: number) => {
  router.push(`/questions/${id}/edit`)
}

const previewQuestion = ref<Question | null>(null)
const showPreview = ref(false)

const handlePreview = (question: Question) => {
  previewQuestion.value = question
  showPreview.value = true
}

const closePreview = () => {
  showPreview.value = false
  previewQuestion.value = null
}

// 处理查询参数变化
const handleQueryChange = (query: Record<string, any>) => {
  router.push({
    query: {
      ...route.query,
      ...query,
      page: query.page || 1
    }
  })
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <QuestionsDataTable :questions="questions" :pagination="pagination" @delete="handleDelete"
      @batch-delete="handleBatchDelete" @edit="handleEdit" @preview="handlePreview" @refresh="refresh"
      @query-change="handleQueryChange" />

    <!-- 预览对话框 -->
    <div v-if="showPreview" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
      @click.self="closePreview">
      <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <h3 class="text-lg font-medium mb-4">{{ previewQuestion?.title }}</h3>
          <div class="prose max-w-none">
            <div v-html="previewQuestion?.content"></div>
          </div>
        </div>
        <div class="bg-gray-50 px-6 py-3 flex justify-end">
          <button class="btn-primary" @click="closePreview">关闭</button>
        </div>
      </div>
    </div>
  </div>
</template>
