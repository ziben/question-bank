import { computed, ref } from 'vue'
import { useToast } from '@/components/shadcn/toast/use-toast'
import { QUERY_OPTIONS, queryOptions, SORT_ORDER, type QueryOptions } from '~/types/query'
import { DEFAULT_TAG_CATEGORY_FILTER, type TagCategoryFilter } from '~/types/filters'
import {
  useCreateTagCategory,
  useDeleteTagCategory,
  useFindManyTagCategory,
  useUpdateTagCategory,
  useCountTagCategory
} from '~/lib/hooks'

export const useTagCategoryManagement = () => {
  const { toast } = useToast()
  const loading = ref(false)

  // 分页参数
  const currentPage = ref(1)
  const pageSize = ref<number>(QUERY_OPTIONS.PAGINATION.DEFAULT_PAGE_SIZE)

  // 过滤器
  const filters = ref<TagCategoryFilter>(DEFAULT_TAG_CATEGORY_FILTER)

  // 查询参数
  const queryArgs = computed(() => {
    const where: any = {}

    // 搜索条件
    if (filters.value.search) {
      where.OR = [
        { name: { contains: filters.value.search } },
        { code: { contains: filters.value.search } },
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
        sortOrder: SORT_ORDER.ASC,
        createdAt: SORT_ORDER.DESC
      }
    }
  })

  // 数据查询
  const { data: tagCategories, refetch: refetchTagCategories } = useFindManyTagCategory(queryArgs, queryOptions)
  const { data: total } = useCountTagCategory({ where: queryArgs.value.where })

  // 计算属性：过滤后的标签分类列表
  const filteredTagCategories = computed(() => {
    return tagCategories.value || []
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
  const handleFilterChange = (newFilters: TagCategoryFilter) => {
    filters.value = newFilters
    currentPage.value = 1
  }

  // 创建标签分类
  const { mutateAsync: createTagCategoryMutation } = useCreateTagCategory()
  const createTagCategory = async (data: any) => {
    try {
      loading.value = true
      await createTagCategoryMutation(data)
      toast({
        title: '创建成功',
        description: '标签分类已创建'
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

  // 更新标签分类
  const { mutateAsync: updateTagCategoryMutation } = useUpdateTagCategory()
  const updateTagCategory = async (data: any) => {
    try {
      loading.value = true
      await updateTagCategoryMutation(data)
      toast({
        title: '更新成功',
        description: '标签分类已更新'
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

  // 删除标签分类
  const { mutateAsync: deleteTagCategoryMutation } = useDeleteTagCategory()
  const deleteTagCategory = async (id: string) => {
    try {
      loading.value = true
      await deleteTagCategoryMutation({ where: { id } })
      toast({
        title: '删除成功',
        description: '标签分类已删除'
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
    filteredTagCategories,

    // 方法
    handlePagination,
    handlePageSizeChange,
    handleFilterChange,
    createTagCategory,
    updateTagCategory,
    deleteTagCategory,
    refetchTagCategories
  }
}
