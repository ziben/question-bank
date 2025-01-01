import DataTableColumnHeader from '@/components/my/new-data-table/DataTableColumnHeader.vue'
import { Checkbox } from '@/components/shadcn/checkbox'
import type { ColumnDef } from '@tanstack/vue-table'
import { h } from 'vue'
import type { RoleWithRelations } from '~/prisma/generated/zod'
import DataTableRowActions from './DataTableRowActions.vue'
export const columns: ColumnDef<RoleWithRelations>[] = [
  {
    id: 'select',
    header: ({ table }) => h(Checkbox, {
      'checked': table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate'),
      'onUpdate:checked': value => table.toggleAllPageRowsSelected(!!value),
      'ariaLabel': 'Select all',
      'class': 'translate-y-0.5',
    }),
    cell: ({ row }) => h(Checkbox, { 'checked': row.getIsSelected(), 'onUpdate:checked': value => row.toggleSelected(!!value), 'ariaLabel': 'Select row', 'class': 'translate-y-0.5' }),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'code',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: '代码' }),
    cell: ({ row }) => h('div', { class: 'w-5' }, row.getValue('code')),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'name',
    accessorKey: 'name',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: '名称' }),

    cell: ({ row }) => {
      return h('div', { class: 'flex space-x-2' }, [
        h('span', { class: 'max-w-[500px] truncate font-medium' }, row.getValue('name')),
      ])
    },
  },
  {
    id: 'description',
    accessorKey: 'description',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: '描述' }),
    cell: ({ row }) => h('div', { class: 'w-200' }, row.getValue('description')),
  },
  {
    id: 'actions',
    cell: ({ row }) => h(DataTableRowActions, { row }),
  },
]
