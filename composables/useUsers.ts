import { ref, computed } from 'vue'
import type { User, Role } from '@prisma/client'
import { useConfirm } from './useConfirm'
import { useDebouncedRef } from './useDebounce'

export interface UserWithRoles extends User {
  roles: Role[]
}

export interface UserFormData {
  username: string
  email: string
  name?: string
  password?: string
}

export function useUsers() {
  const loading = ref(false)
  const users = ref<UserWithRoles[]>([])
  const total = ref(0)
  const currentPage = ref(1)
  const pageSize = ref(10)
  const searchQuery = useDebouncedRef('', 300)



  async function fetchUsers() {
    try {
      loading.value = true
      const response = await fetch(
        `/api/users?page=${currentPage.value}&pageSize=${pageSize.value}&search=${searchQuery.value}`
      )
      if (!response.ok) throw new Error('Failed to fetch users')
      const data = await response.json()
      users.value = data.items
      total.value = data.total
    } catch (error) {
      console.error('Failed to fetch users:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  async function createUser(userData: UserFormData): Promise<void> {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to create user')
    }
  }

  async function updateUser(id: number, userData: Partial<UserFormData>): Promise<void> {
    const response = await fetch(`/api/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to update user')
    }
  }

  async function deleteUser(user: User): Promise<boolean> {
    const confirmed = await useConfirm({
      title: 'Confirm Delete',
      content: `Are you sure you want to delete user "${user.username}"? This action cannot be undone.`,
      type: 'error',
      confirmButton: {
        text: 'Delete',
        variant: 'destructive'
      }
    })

    if (!confirmed) return false

    const response = await fetch(`/api/users/${user.id}`, {
      method: 'DELETE'
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to delete user')
    }

    return true
  }

  async function updateUserRoles(userId: number, roleIds: number[]): Promise<void> {
    const response = await fetch(`/api/users/${userId}/roles`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ roleIds })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to update user roles')
    }
  }

  function onPageChange(page: number) {
    currentPage.value = page
    fetchUsers()
  }

  function onPageSizeChange(size: number) {
    pageSize.value = size
    currentPage.value = 1
    fetchUsers()
  }

  return {
    // State
    users,
    total,
    loading,
    currentPage,
    pageSize,
    searchQuery,

    // Methods
    fetchUsers,
    createUser,
    updateUser,
    deleteUser,
    updateUserRoles,
    onPageChange,
    onPageSizeChange
  }
}
