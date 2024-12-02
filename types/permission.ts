export type Permission = 
  | 'user.create' 
  | 'user.read' 
  | 'user.update' 
  | 'user.delete'
  | 'subject.create'
  | 'subject.read'
  | 'subject.update'
  | 'subject.delete'
  | 'question.create'
  | 'question.read'
  | 'question.update'
  | 'question.delete'
  | 'grade.manage'
  | 'source.manage'
  | 'log.view'

export type Role = {
  id: number
  name: string
  description: string
  permissions: Permission[]
  createdAt: string
  updatedAt: string
}

export type UserRole = {
  id: number
  userId: number
  roleId: number
  role: Role
  createdAt: string
  updatedAt: string
}

export interface PermissionGroup {
  name: string
  permissions: {
    value: Permission
    label: string
    description: string
  }[]
}

export const permissionGroups: PermissionGroup[] = [
  {
    name: '用户管理',
    permissions: [
      { value: 'user.create', label: '创建用户', description: '允许创建新用户' },
      { value: 'user.read', label: '查看用户', description: '允许查看用户信息' },
      { value: 'user.update', label: '更新用户', description: '允许更新用户信息' },
      { value: 'user.delete', label: '删除用户', description: '允许删除用户' }
    ]
  },
  {
    name: '题目管理',
    permissions: [
      { value: 'question.create', label: '创建题目', description: '允许创建新题目' },
      { value: 'question.read', label: '查看题目', description: '允许查看题目' },
      { value: 'question.update', label: '更新题目', description: '允许更新题目' },
      { value: 'question.delete', label: '删除题目', description: '允许删除题目' }
    ]
  },
  {
    name: '科目管理',
    permissions: [
      { value: 'subject.create', label: '创建科目', description: '允许创建新科目' },
      { value: 'subject.read', label: '查看科目', description: '允许查看科目' },
      { value: 'subject.update', label: '更新科目', description: '允许更新科目' },
      { value: 'subject.delete', label: '删除科目', description: '允许删除科目' }
    ]
  },
  {
    name: '其他权限',
    permissions: [
      { value: 'grade.manage', label: '年级管理', description: '允许管理年级信息' },
      { value: 'source.manage', label: '来源管理', description: '允许管理题目来源' },
      { value: 'log.view', label: '查看日志', description: '允许查看操作日志' }
    ]
  }
]
