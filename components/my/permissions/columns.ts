import DataTableColumnHeader from '@/components/my/new-data-table/DataTableColumnHeader.vue'
import { Badge } from '@/components/shadcn/badge'
import { Button } from '@/components/shadcn/button'
import { Checkbox } from '@/components/shadcn/checkbox'
import type { ColumnDef } from '@tanstack/vue-table'
import { h } from 'vue'
import type { Permission } from '~/prisma/generated/zod'
import DataTableRowActions from './DataTableRowActions.vue'
export const columns: ColumnDef<Permission>[] = [
  {
    id: 'select',
    header: ({ table }) => h(Checkbox, {
      'checked': table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate'),
      'onUpdate:checked': value => table.toggleAllPageRowsSelected(!!value),
      'aria-label': 'Select all',
      'class': 'translate-y-0.5',
    }),
    cell: ({ row }) => h(Checkbox, {
      'checked': row.getIsSelected(),
      'onUpdate:checked': value => row.toggleSelected(!!value),
      'aria-label': 'Select row',
      'class': 'translate-y-0.5',
    }),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'groupName',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: '分组名称' }),
    cell: ({ row }) => h('div', { class: 'font-medium' }, row.getValue('groupName')),
  },
  {
    accessorKey: 'groupCode',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: '分组代码' }),
    cell: ({ row }) => h('div', { class: 'font-mono text-sm' }, row.getValue('groupCode')),
  },
  {
    accessorKey: 'actionName',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: '操作名称' }),
    cell: ({ row }) => h('div', { class: 'font-medium' }, row.getValue('actionName')),
  },
  {
    accessorKey: 'actionCode',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: '操作代码' }),
    cell: ({ row }) => h('div', { class: 'font-mono text-sm' }, row.getValue('actionCode')),
  },
  {
    accessorKey: 'code',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: '权限代码' }),
    cell: ({ row }) => h('code', { class: 'px-2 py-1 rounded bg-muted font-mono text-sm' }, row.getValue('code')),
  },
  {
    accessorKey: 'description',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: '描述' }),
    cell: ({ row }) => h('div', { class: 'text-muted-foreground' }, row.getValue('description') || '-'),
  },
  {
    accessorKey: 'isDeleted',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: '状态' }),
    cell: ({ row }) => h(Badge, {
      variant: row.getValue('isDeleted') ? 'destructive' : 'secondary',
    }, () => row.getValue('isDeleted') ? '已禁用' : '启用中'),
  },
  {
    id: 'actions',
    header: '操作',
    cell: ({ row }) => h(DataTableRowActions, { row }),
  },
]
