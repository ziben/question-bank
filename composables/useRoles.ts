import { ref, computed } from 'vue'
import type { Role } from '@prisma/client'

export function useRoles() {
  const roles = ref<Role[]>([])
  const selectedRoles = ref<Role[]>([])
  const loading = ref(false)

  const availableRoles = computed(() => {
    return roles.value.filter(role => 
      !selectedRoles.value.some(selected => selected.id === role.id)
    )
  })

  async function fetchRoles() {
    try {
      loading.value = true
      const response = await fetch('/api/roles')
      if (!response.ok) throw new Error('Failed to fetch roles')
      const data = await response.json()
      roles.value = data
    } catch (error) {
      console.error('Failed to fetch roles:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  function setSelectedRoles(newRoles: Role[]) {
    selectedRoles.value = [...newRoles]
  }

  function addRole(role: Role) {
    selectedRoles.value.push(role)
  }

  function removeRole(role: Role) {
    selectedRoles.value = selectedRoles.value.filter(r => r.id !== role.id)
  }

  return {
    roles,
    selectedRoles,
    loading,
    availableRoles,
    fetchRoles,
    setSelectedRoles,
    addRole,
    removeRole
  }
}
