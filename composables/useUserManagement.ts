import { ref, computed } from 'vue'
import type { User, Role } from '@prisma/client'
import { useToast } from '@/components/shadcn/toast/use-toast'
import { useConfirm } from '@/composables/useConfirm'
import {
  useFindManyUser,
  useCountUser,
  useFindManyRole
} from '~/lib/hooks'
import type { UserWithRelations } from '~/prisma/generated/zod'

export type UserWithRole = User & {
  role: Role | null
}

export const useUserManagement = () => {
  const { toast } = useToast()

  // 状态
  const saving = ref(false)
  const showUserDialog = ref(false)
  const editingUser = ref<UserWithRelations | null>(null)
  const currentPage = ref(1)
  const pageSize = ref(10)

  // 数据查询
  const queryOptions = computed(() => ({
    include: {
      roles: true
    },
    skip: (currentPage.value - 1) * pageSize.value,
    take: pageSize.value
  }))

  const { data: users, refetch: refetchUsers } = useFindManyUser(queryOptions)
  const { data: total } = useCountUser()
  const { data: roles } = useFindManyRole()

  // 分页处理
  const handlePagination = {
    onPageChange: (page: number) => {
      currentPage.value = page
      refetchUsers()
    },
    onPageSizeChange: (size: number) => {
      pageSize.value = size
      currentPage.value = 1
      refetchUsers()
    }
  }

  // 状态选项
  const statusOptions = [
    { label: '活跃', value: 'active' },
    { label: '禁用', value: 'inactive' }
  ]

  // 创建用户
  
  return {
    // 状态
    saving,
    showUserDialog,
    editingUser,
    currentPage,
    pageSize,
    total,
    users,
    roles,
    statusOptions,

    // 方法
    handlePagination,
    refetchUsers
  }
}