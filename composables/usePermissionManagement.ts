import { ref, computed } from 'vue'
import type { Permission } from '~/prisma/generated/zod'
import { useToast } from '@/components/shadcn/toast/use-toast'
import {
  useFindManyPermission,
  useCreatePermission,
  useUpdatePermission,
  useDeletePermission,
  useCountPermission
} from '~/lib/hooks'

export const usePermissionManagement = () => {
  const { toast } = useToast()

  // 状态
  const loading = ref(false)
  const saving = ref(false)
  const showDialog = ref(false)
  const editing = ref<Permission | null>(null)
  const activeTab = ref('list')
  const searchQuery = ref('')
  const currentPage = ref(1)
  const pageSize = ref(10)

  // 数据查询参数
  const queryOptions = computed(() => ({
    skip: (currentPage.value - 1) * pageSize.value,
    take: pageSize.value,
    orderBy: {
      createdAt: 'desc' as const
    }
  }))

  // 数据查询
  const { data: permissions, refetch: refetchPermissions } = useFindManyPermission(queryOptions)
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
  const permissionGroups = computed(() => {
    if (!permissions.value) return []

    const groups: Record<string, {
      name: string
      code: string
      permissions: Permission[]
    }> = {}

    for (const permission of permissions.value) {
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
  const handlePagination = {
    onPageChange: (page: number) => {
      currentPage.value = page
    },
    onPageSizeChange: (size: number) => {
      pageSize.value = size
      currentPage.value = 1
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
      toast({
        title: '错误',
        description: '操作失败',
        variant: 'destructive'
      })
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
    permissions,
    filteredPermissions,
    permissionGroups,

    // 方法
    togglePermission,
    refetchPermissions,
    handlePagination
  }
}
