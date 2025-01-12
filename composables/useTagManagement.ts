import { computed, ref } from 'vue'
import { useToast } from '@/components/shadcn/toast/use-toast'
import { QUERY_OPTIONS, queryOptions, SORT_ORDER, type QueryOptions } from '~/types/query'
import { DEFAULT_TAG_FILTER, type TagFilter } from '~/types/filters'
import {
  useCreateTag,
  useDeleteTag,
  useFindManyTag,
  useUpdateTag,
  useCountTag
} from '~/lib/hooks'

export const useTagManagement = () => {
  const { toast } = useToast()
  const loading = ref(false)

  // 分页参数
  const currentPage = ref(1)
  const pageSize = ref<number>(QUERY_OPTIONS.PAGINATION.DEFAULT_PAGE_SIZE)

  // 过滤器
  const filters = ref<TagFilter>(DEFAULT_TAG_FILTER)

  // 查询参数
  const queryArgs = computed(() => {
    const where: any = {}

    // 搜索条件
    if (filters.value.search) {
      where.OR = [
        { name: { contains: filters.value.search } },
        { description: { contains: filters.value.search } }
      ]
    }

    // 创建时间范围
    if (filters.value.startDate || filters.value.endDate) {
      where.createdAt = {}
      if (filters.value.startDate) {
        where.createdAt.gte = filters.value.startDate
      }
      if (filters.value.endDate) {
        where.createdAt.lte = filters.value.endDate
      }
    }

    return {
      where,
      skip: (currentPage.value - 1) * (pageSize.value),
      take: pageSize.value,
      orderBy: {
        createdAt: SORT_ORDER.DESC
      }
    }
  })

  // 数据查询
  const { data: tags, refetch: refetchTags } = useFindManyTag(queryArgs, queryOptions)
  const { data: total } = useCountTag({ where: queryArgs.value.where })

  // 计算属性：过滤后的标签列表
  const filteredTags = computed(() => {
    return tags.value || []
  })

  // 分页处理
  const handlePagination = ({ page, size }: { page?: number; size?: number }) => {
    if (page) currentPage.value = page
    if (size) pageSize.value = size
  }

  const handlePageSizeChange = (size: number) => {
    handlePagination({ size })
  }

  // 过滤器处理
  const handleFilterChange = (newFilters: TagFilter) => {
    filters.value = newFilters
    currentPage.value = 1
  }

  // 创建标签
  const { mutateAsync: createTagMutation } = useCreateTag()
  const createTag = async (data: any) => {
    try {
      loading.value = true
      await createTagMutation(data)
      toast({
        title: '创建成功',
        description: '标签已创建'
      })
    } catch (error: any) {
      toast({
        title: '创建失败',
        description: error.message,
        variant: 'destructive'
      })
      throw error
    } finally {
      loading.value = false
    }
  }

  // 更新标签
  const { mutateAsync: updateTagMutation } = useUpdateTag()
  const updateTag = async (data: any) => {
    try {
      loading.value = true
      await updateTagMutation(data)
      toast({
        title: '更新成功',
        description: '标签已更新'
      })
    } catch (error: any) {
      toast({
        title: '更新失败',
        description: error.message,
        variant: 'destructive'
      })
      throw error
    } finally {
      loading.value = false
    }
  }

  // 删除标签
  const { mutateAsync: deleteTagMutation } = useDeleteTag()
  const deleteTag = async (id: string) => {
    try {
      loading.value = true
      await deleteTagMutation({ where: { id } })
      toast({
        title: '删除成功',
        description: '标签已删除'
      })
    } catch (error: any) {
      toast({
        title: '删除失败',
        description: error.message,
        variant: 'destructive'
      })
      throw error
    } finally {
      loading.value = false
    }
  }

  return {
    // 状态
    loading,
    currentPage,
    pageSize,
    total,
    filters,
    filteredTags,

    // 方法
    handlePagination,
    handlePageSizeChange,
    handleFilterChange,
    createTag,
    updateTag,
    deleteTag,
    refetchTags
  }
}
