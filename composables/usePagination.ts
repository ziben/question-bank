import { ref, computed } from 'vue'

export function usePagination(options = { pageSize: 10 }) {
  const currentPage = ref(1)
  const totalItems = ref(0)
  const pageSize = ref(options.pageSize)

  const totalPages = computed(() => Math.ceil(totalItems.value / pageSize.value))
  const isFirstPage = computed(() => currentPage.value === 1)
  const isLastPage = computed(() => currentPage.value === totalPages.value)

  const startIndex = computed(() => (currentPage.value - 1) * pageSize.value)
  const endIndex = computed(() => Math.min(startIndex.value + pageSize.value, totalItems.value))

  function goToPage(page: number) {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page
    }
  }

  function nextPage() {
    if (!isLastPage.value) {
      currentPage.value++
    }
  }

  function prevPage() {
    if (!isFirstPage.value) {
      currentPage.value--
    }
  }

  function setTotalItems(total: number) {
    totalItems.value = total
    if (currentPage.value > totalPages.value) {
      currentPage.value = totalPages.value
    }
  }

  return {
    currentPage,
    totalItems,
    pageSize,
    totalPages,
    isFirstPage,
    isLastPage,
    startIndex,
    endIndex,
    goToPage,
    nextPage,
    prevPage,
    setTotalItems
  }
}
