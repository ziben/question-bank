<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">用户管理</h1>
      <button @click="showCreateModal = true" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        添加用户
      </button>
      <button @click="exportAllData" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        导出全部数据
      </button>
    </div>

    <!-- 用户列表 -->
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <DataTable
        :columns="columns"
        :data="users"
        :loading="loading"
        :selected-items="selectedUsers"
        @update:selected-items="selectedUsers = $event"
        :show-batch-actions="true"
        :batch-actions="batchActions"
        @apply-filters="applyFilters"
        @reset-filters="resetFilters"
      >
        <template #cell-role="{ item }">
          {{ formatRole(item.role) }}
        </template>
        <template #cell-createdAt="{ item }">
          {{ new Date(item.createdAt).toLocaleString() }}
        </template>
        <template #cell-actions="{ item }">
          <div class="flex items-center space-x-2">
            <Button variant="outline" size="sm" @click="() => editUser(item)">
              <Pencil class="h-4 w-4" />
            </Button>
            <Button variant="destructive" size="sm" @click="() => confirmDelete(item)">
              <Trash class="h-4 w-4" />
            </Button>
          </div>
        </template>
      </DataTable>
    </div>

    <!-- 创建/编辑用户模态框 -->
    <Dialog :open="showCreateModal" @update:open="(value) => showCreateModal = value">
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{{ isEditing ? '编辑用户' : '创建用户' }}</DialogTitle>
          <DialogDescription>
            填写以下信息{{ isEditing ? '修改' : '创建' }}用户。
          </DialogDescription>
        </DialogHeader>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <FormField name="username">
            <FormItem>
              <FormLabel>用户名</FormLabel>
              <FormControl>
                <Input v-model="form.username" type="text" required />
              </FormControl>
            </FormItem>
          </FormField>

          <FormField name="email">
            <FormItem>
              <FormLabel>邮箱</FormLabel>
              <FormControl>
                <Input v-model="form.email" type="email" required />
              </FormControl>
            </FormItem>
          </FormField>

          <FormField name="password">
            <FormItem>
              <FormLabel>密码</FormLabel>
              <FormControl>
                <Input v-model="form.password" type="password" :required="!isEditing" />
              </FormControl>
            </FormItem>
          </FormField>

          <FormField name="role">
            <FormItem>
              <FormLabel>角色</FormLabel>
              <Select v-model="form.role">
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="选择用户角色" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="USER">用户</SelectItem>
                  <SelectItem value="EDITOR">编辑</SelectItem>
                  <SelectItem value="ADMIN">管理员</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          </FormField>

          <DialogFooter>
            <Button type="button" variant="outline" @click="showCreateModal = false">
              取消
            </Button>
            <Button type="submit">
              {{ isEditing ? '保存' : '创建' }}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>

    <!-- 删除确认模态框 -->
    <Dialog :open="showDeleteModal" @update:open="showDeleteModal = false">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>确认删除</DialogTitle>
          <DialogDescription>
            确定要删除用户 "{{ selectedUser?.username }}" 吗？此操作无法撤销。
          </DialogDescription>
        </DialogHeader>
        <div class="flex justify-end space-x-3">
          <Button variant="outline" @click="showDeleteModal = false">
            取消
          </Button>
          <Button variant="destructive" @click="deleteUser">
            删除
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { User } from '~/types'
import type { Permission } from '~/types/permission'
import DataTable, { type BatchAction } from '@/components/ui/data-table.vue'
import { usePermission } from '~/composables/usePermission'
import { useLogger } from '~/composables/useLogger'
import { useExport } from '@/composables/useExport'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const { createLog } = useLogger()
const { exportToExcel } = useExport()
// 状态管理
const loading = ref(false)
const selectedUsers = ref<User[]>([])
const showBatchActionMenu = ref(false)
const showFilters = ref(false)
const showCreateModal = ref(false)
const showDeleteModal = ref(false)
const isEditing = ref(false)
const selectedUser = ref<User | null>(null)
const users = ref<User[]>([])
const alert = useAlert()
// 表单状态
const form = reactive({
  username: '',
  email: '',
  role: '',
  password: ''
})

// 筛选条件
const filters = reactive({
  role: '',
  startDate: '',
  endDate: '',
  status: ''
})

// 表格列配置
const columns = [
  { key: 'username', title: '用户名', sortable: true },
  { key: 'email', title: '邮箱' },
  { key: 'role', title: '角色', sortable: true },
  { key: 'createdAt', title: '创建时间', sortable: true },
  { key: 'status', title: '状态', sortable: true },
  { key: 'actions', title: '操作' }
]

// 处理批量删除
async function handleBatchDelete() {
  if (!selectedUsers.value.length) return

  const confirmed = confirm(`确定要删除选中的 ${selectedUsers.value.length} 个用户吗？此操作不可撤销。`)

  if (!confirmed) return

  loading.value = true
  try {
    await $fetch('/api/users/batch', {
      method: 'DELETE',
      body: { ids: selectedUsers.value.map(user => user.id) }
    })

    await createLog('user.delete', `批量删除用户`, `删除了 ${selectedUsers.value.length} 个用户`)
    alert.success('删除成功')
    selectedUsers.value = []
    await fetchUsers()
  } catch (error) {
    alert.error('删除失败')
  } finally {
    loading.value = false
  }
}

// 处理导出选中数据
async function handleExportSelected() {
  const headers = {
    username: '用户名',
    email: '邮箱',
    role: '角色',
    createdAt: '创建时间',
    status: '状态'
  }

  const data = selectedUsers.value.map(user => ({
    ...user,
    createdAt: new Date(user.createdAt).toLocaleString(),
    role: formatRole(user.role)
  }))

  await exportToExcel(data, '用户数据')
  await createLog('user.export', '导出选中用户数据', `导出了 ${data.length} 条用户数据`)
  alert.success('导出成功')
}

// 处理批量更新角色
async function handleBatchUpdateRole() {
  return
}

// 批量操作选项
const batchActions : BatchAction[] = [
  {
    label: '批量删除',
    action: handleBatchDelete,
    permission: 'user:delete',
    variant: 'destructive'
  },
  {
    label: '导出选中',
    action: handleExportSelected,
    permission: 'user:export'
  },
  {
    label: '批量更新角色',
    action: handleBatchUpdateRole,
    permission: 'user:update'
  }
]

// 处理表单提交
const handleSubmit = async () => {
  try {
    loading.value = true
    const data = { ...form }

    if (isEditing.value && selectedUser.value) {
      await $fetch(`/api/users/${selectedUser.value.id}`, {
        method: 'PUT',
        body: data
      })
      await createLog('user.update', `更新用户 ${selectedUser.value.username}`)
    } else {
      await $fetch('/api/users', {
        method: 'POST',
        body: data
      })
      await createLog('user.create', `创建用户 ${data.username}`)
    }

    showCreateModal.value = false
    await fetchUsers()
  } catch (error) {
    console.error('Failed to submit form:', error)
  } finally {
    loading.value = false
  }
}

// 删除用户
const deleteUser = async () => {
  if (!selectedUser.value) return

  try {
    loading.value = true
    await $fetch(`/api/users/${selectedUser.value.id}`, {
      method: 'DELETE'
    })
    await createLog('user.delete', `删除用户 ${selectedUser.value.username}`)
    showDeleteModal.value = false
    await fetchUsers()
  } catch (error) {
    console.error('Failed to delete user:', error)
  } finally {
    loading.value = false
  }
}

// 应用筛选
const applyFilters = () => {
  currentPage.value = 1
  fetchUsers()
}

// 重置筛选
const resetFilters = () => {
  Object.assign(filters, {
    role: '',
    startDate: '',
    endDate: '',
    status: ''
  })
  applyFilters()
}

// 导出全部数据
const exportAllData = async () => {
  loading.value = true
  try {
    const { users } = await $fetch<{ users: User[] }>('/api/users/export')
    const headers = {
      username: '用户名',
      email: '邮箱',
      role: '角色',
      createdAt: '创建时间',
      status: '状态'
    }

    const data = users.map(user => ({
      ...user,
      createdAt: new Date(user.createdAt).toLocaleString(),
      role: formatRole(user.role)
    }))

    await exportToExcel(data, '用户数据')
    await createLog('user.export', '导出全部用户数据', `导出了 ${data.length} 条用户数据`)
    alert.success('导出成功')
  } catch (error) {
    alert.error('导出失败')
  } finally {
    loading.value = false
  }
}

const searchQuery = ref('')

// 获取用户列表
const fetchUsers = async () => {
  loading.value = true
  try {
    const response = await $fetch<{ users: User[], total: number }>('/api/users', {
      query: {
        page: currentPage.value,
        limit: pageSize.value,
        ...filters,
        search: searchQuery.value
      }
    })
    users.value = response.users
    total.value = response.total
  } catch (error) {
    alert.error('获取用户列表失败')
  } finally {
    loading.value = false
  }
}

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

const formatRole = (role: string) => {
  const roleMap: Record<string, string> = {
    'ADMIN': '管理员',
    'USER': '普通用户',
    'EDITOR': '编辑'
  }
  return roleMap[role] || role
}

const editUser = (user: User) => {
  isEditing.value = true
  selectedUser.value = user
  Object.assign(form, user)
  showCreateModal.value = true
}

const confirmDelete = (user: User) => {
  selectedUser.value = user
  showDeleteModal.value = true
}
</script>
