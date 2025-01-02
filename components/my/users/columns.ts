import type { ColumnDef } from '@tanstack/vue-table'
import type { UserWithRelations } from '~/prisma/generated/zod'

export const columns: ColumnDef<UserWithRelations>[] = [
  {
    accessorKey: 'username',
    header: '用户名',
  },
  {
    accessorKey: 'email',
    header: '邮箱',
  },
  {
    accessorKey: 'role',
    header: '角色',
    cell: ({ row }) => {
      const role = row.original.roles.map(role => role.name).join(', ')
      return role
    },
  },
  {
    accessorKey: 'status',
    header: '状态',
    cell: ({ row }) => {
      const status = row.original.isDeleted
      return !status ? '活跃' : '禁用'
    },
  },
  {
    accessorKey: 'createdAt',
    header: '创建时间',
    cell: ({ row }) => {
      return new Date(row.original.createdAt).toLocaleString('zh-CN')
    },
  },
]
