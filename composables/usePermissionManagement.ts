import { ref, computed } from 'vue'
import type { Permission } from '@prisma/client'
import {
  useCreatePermission,
  useUpdatePermission,
  useFindManyPermission,
  useCountPermission,
  useDeletePermission
} from '~/lib/hooks'
import { useToast } from '@/components/shadcn/toast/use-toast'
import { QUERY_OPTIONS, queryOptions, SORT_ORDER, type QueryOptions } from '~/types/query'

export const usePermissionManagement = () => {
  const { toast } = useToast()

  // 状态
  const loading = ref(false)
  const saving = ref(false)
  const showDialog = ref(false)
  const editing = ref<Permission | null>(null)
  const activeTab = ref('list')
  const searchQuery = ref('')
  const currentPage = ref(QUERY_OPTIONS.PAGINATION.DEFAULT_PAGE)
  const pageSize = ref(QUERY_OPTIONS.PAGINATION.DEFAULT_PAGE_SIZE)

  // 数据查询参数
  const queryArgs = computed<QueryOptions>(() => ({
    skip: (currentPage.value - 1) * pageSize.value,
    take: pageSize.value,
    orderBy: {
      [QUERY_OPTIONS.SORT.CREATED_AT]: SORT_ORDER.DESC
    }
  }))

  // 数据查询
  const { data: allPermissions } = useFindManyPermission({ orderBy: queryArgs.value.orderBy })
  const { data: permissions, refetch: refetchPermissions } = useFindManyPermission(queryArgs, queryOptions)
  const { data: total } = useCountPermission()

  // 计算属性：过滤后的权限列表
  const filteredPermissions = computed(() => {
    if (!searchQuery.value || !permissions.value) return permissions.value || []

    const query = searchQuery.value.toLowerCase()
    return permissions.value.filter(p =>
      p.groupName.toLowerCase().includes(query) ||
      p.groupCode.toLowerCase().includes(query) ||
      p.actionName.toLowerCase().includes(query) ||
      p.actionCode.toLowerCase().includes(query) ||
      p.code.toLowerCase().includes(query) ||
      (p.description && p.description.toLowerCase().includes(query))
    )
  })

  // 计算属性：按分组组织的权限列表
  const allPermissionGroups = computed(() => {
    if (!allPermissions.value) return []

    const groups: Record<string, {
      name: string
      code: string
      permissions: Permission[]
    }> = {}

    for (const permission of allPermissions.value) {
      if (!groups[permission.groupCode]) {
        groups[permission.groupCode] = {
          name: permission.groupName,
          code: permission.groupCode,
          permissions: []
        }
      }
      groups[permission.groupCode].permissions.push(permission)
    }

    return Object.values(groups)
  })

  // 分页处理
  const handlePageChange = (page: number) => {
    currentPage.value = page
  }

  const handlePageSizeChange = (size: number) => {
    pageSize.value = size
    currentPage.value = 1
  }

  const handlePagination = {
    onPageChange: handlePageChange,
    onPageSizeChange: handlePageSizeChange
  }

  // 权限操作
  const { mutateAsync: createPermission } = useCreatePermission()
  // 创建权限
  const addPermission = async (data: Partial<Permission>) => {
    try {
      await createPermission({
        data: {
          name: data.name || '',
          code: data.code || '',
          description: data.description || '',
          type: data.type || 'MENU',
          parentId: data.parentId || null,
          path: data.path || '',
          icon: data.icon || '',
          component: data.component || '',
          order: data.order || 0,
          hidden: data.hidden || false,
          isDeleted: false
        }
      })
      await refetchPermissions()
      toast({
        title: '成功',
        description: '权限已创建'
      })
    } catch (error) {
      console.error('Failed to create permission:', error)
      toast({
        title: '错误',
        description: '创建权限失败',
        variant: 'destructive'
      })
      throw error
    }
  }

  const { mutateAsync: updatePermission } = useUpdatePermission()
  // 切换权限状态
  const togglePermission = async (permission: Permission) => {
    try {
      await updatePermission({
        where: { id: permission.id },
        data: { isDeleted: !permission.isDeleted }
      })
      await refetchPermissions()
      toast({
        title: '成功',
        description: `权限已${permission.isDeleted ? '启用' : '禁用'}`
      })
    } catch (error) {
      console.error('Failed to toggle permission:', error)
      toast({
        title: '错误',
        description: '操作失败',
        variant: 'destructive'
      })
      throw error
    }
  }

  const { mutateAsync: deletePermission } = useDeletePermission()
  // 删除权限
  const removePermission = async (permission: Permission) => {
    try {
      await deletePermission({
        where: { id: permission.id }
      })
      await refetchPermissions()
      toast({
        title: '成功',
        description: '权限已删除'
      })
    } catch (error) {
      console.error('Failed to delete permission:', error)
      toast({
        title: '错误',
        description: '删除权限失败',
        variant: 'destructive'
      })
      throw error
    }
  }

  return {
    // 状态
    loading,
    saving,
    showDialog,
    editing,
    activeTab,
    searchQuery,
    currentPage,
    pageSize,
    total,
    allPermissions,
    filteredPermissions,
    allPermissionGroups,

    // 方法
    handlePagination,
    addPermission,
    togglePermission,
    removePermission,
    refetchPermissions
  }
}
