import type { Permission } from '~/types/permission'

export function usePermission() {
  const user = useUser()
  
  const hasPermission = (permission: Permission): boolean => {
    if (!user.value) return false
    return user.value.roles.some(role => 
      role.permissions.includes(permission)
    )
  }

  const hasAnyPermission = (permissions: Permission[]): boolean => {
    return permissions.some(permission => hasPermission(permission))
  }

  const hasAllPermissions = (permissions: Permission[]): boolean => {
    return permissions.every(permission => hasPermission(permission))
  }

  const requirePermission = (permission: Permission) => {
    if (!hasPermission(permission)) {
      throw new Error('没有权限执行此操作')
    }
  }

  return {
    hasPermission,
    hasAnyPermission,
    hasAllPermissions,
    requirePermission
  }
}
