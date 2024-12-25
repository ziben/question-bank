import type { TagCategory } from '~/types/tag'

export const useTagCategories = () => {
  const categories = ref<TagCategory[]>([])
  const loading = ref(false)
  const error = ref<Error | null>(null)

  // 获取所有分类
  const fetchCategories = async () => {
    loading.value = true
    error.value = null
    try {
      const { data } = await useFetch('/api/tag-categories')
      categories.value = data.value as TagCategory[]
    } catch (e) {
      error.value = e as Error
      throw e
    } finally {
      loading.value = false
    }
  }

  // 创建分类
  const createCategory = async (category: Partial<TagCategory>) => {
    const { data } = await useFetch('/api/tag-categories', {
      method: 'POST',
      body: category
    })
    return data.value
  }

  // 更新分类
  const updateCategory = async (id: number, category: Partial<TagCategory>) => {
    const { data } = await useFetch(`/api/tag-categories/${id}`, {
      method: 'PUT',
      body: category
    })
    return data.value
  }

  // 删除分类
  const deleteCategory = async (id: number) => {
    await useFetch(`/api/tag-categories/${id}`, {
      method: 'DELETE'
    })
  }

  // 获取单个分类
  const getCategory = async (id: number) => {
    const { data } = await useFetch(`/api/tag-categories/${id}`)
    return data.value as TagCategory
  }

  return {
    categories: readonly(categories),
    loading: readonly(loading),
    error: readonly(error),
    fetchCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory
  }
}
