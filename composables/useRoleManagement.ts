import { ref, computed } from 'vue'
import type { Permission, Role } from '@prisma/client'
import { type RoleWithRelations } from '~/prisma/generated/zod'
import { useToast } from '@/components/shadcn/toast/use-toast'
import { useConfirm } from '@/composables/useConfirm'
import {
  useFindManyRole,
  useCreateRole,
  useUpdateRole,
  useDeleteRole,
  useCountRole,
  useFindManyPermission
} from '~/lib/hooks'

export const useRoleManagement = () => {
  const { toast } = useToast()

  // 状态
  const saving = ref(false)
  const savingPermissions = ref(false)
  const showRoleDialog = ref(false)
  const showPermissionDialog = ref(false)
  const editingRole = ref<RoleWithRelations | null>(null)
  const selectedPermissions = ref<Permission[]>([])
  const currentPage = ref(1)
  const pageSize = ref(10)

  // 数据查询
  const qureyOptions = computed(() => ({
    include: {
      permissions: true
    },
    skip: (currentPage.value - 1) * pageSize.value,
    take: pageSize.value
  }))

  const { data: roles, refetch: refetchRoles } = useFindManyRole(qureyOptions)

  const { data: total } = useCountRole()
  const { data: permissions } = useFindManyPermission()

  // 权限分组
  const permissionGroups = computed(() => {
    const groups: Record<string, Permission[]> = {}
    permissions.value?.forEach(permission => {
      const [module] = permission.code.split('.')
      if (!groups[module]) {
        groups[module] = []
      }
      groups[module].push(permission)
    })
    return groups
  })

  // 方法
  const isGroupSelected = (groupCode: string) => {
    const groupPermissions = permissionGroups.value[groupCode] || []
    return groupPermissions.every(permission =>
      selectedPermissions.value.some(p => p.code === permission.code)
    )
  }

  const toggleGroupPermissions = (groupCode: string) => {
    const groupPermissions = permissionGroups.value[groupCode] || []
    const isSelected = isGroupSelected(groupCode)

    if (isSelected) {
      selectedPermissions.value = selectedPermissions.value.filter(
        p => !groupPermissions.some(gp => gp.code === p.code)
      )
    } else {
      const newPermissions = groupPermissions.filter(
        p => !selectedPermissions.value.some(sp => sp.code === p.code)
      )
      selectedPermissions.value = [...selectedPermissions.value, ...newPermissions]
    }
  }

  const handlePagination = {
    onPageChange: (page: number) => {
      currentPage.value = page
    },
    onPageSizeChange: (size: number) => {
      pageSize.value = size
      currentPage.value = 1
    }
  }

  return {
    // 状态
    saving,
    savingPermissions,
    showRoleDialog,
    showPermissionDialog,
    editingRole,
    selectedPermissions,
    currentPage,
    pageSize,
    total,
    roles,
    permissions,
    permissionGroups,

    // 方法
    isGroupSelected,
    toggleGroupPermissions,
    handlePagination,
    refetchRoles
  }
}
