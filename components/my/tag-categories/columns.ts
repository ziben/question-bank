import DataTableColumnHeader from '@/components/my/new-data-table/DataTableColumnHeader.vue'
import { Checkbox } from '@/components/shadcn/checkbox'
import type { ColumnDef } from '@tanstack/vue-table'
import { h } from 'vue'
import type { TagCategory } from '~/types/tag'
import DataTableRowActions from './DataTableRowActions.vue'

export const columns: ColumnDef<TagCategory>[] = [
  {
    id: 'select',
    header: ({ table }) => h(Checkbox, {
      'checked': table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate'),
      'onUpdate:checked': value => table.toggleAllPageRowsSelected(!!value),
      'ariaLabel': 'Select all',
      'class': 'translate-y-0.5',
    }),
    cell: ({ row }) => h(Checkbox, {
      'checked': row.getIsSelected(),
      'onUpdate:checked': value => row.toggleSelected(!!value),
      'ariaLabel': 'Select row',
      'class': 'translate-y-0.5'
    }),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'ID' }),
    cell: ({ row }) => h('div', { class: 'w-5' }, row.getValue('id')),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'code',
    accessorKey: 'code',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: '代码' }),
    cell: ({ row }) => h('div', { class: 'flex space-x-2' }, [
      h('span', { class: 'max-w-[200px] truncate font-medium' }, row.getValue('code')),
    ]),
  },
  {
    id: 'name',
    accessorKey: 'name',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: '名称' }),
    cell: ({ row }) => h('div', { class: 'flex space-x-2' }, [
      h('span', { class: 'max-w-[200px] truncate font-medium' }, row.getValue('name')),
    ]),
  },
  {
    accessorKey: 'description',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: '描述' }),
    cell: ({ row }) => h('div', { class: 'w-[300px] truncate' }, row.getValue('description')),
  },
  {
    accessorKey: 'sortOrder',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: '排序' }),
    cell: ({ row }) => h('div', { class: 'w-[80px] text-center' }, row.getValue('sortOrder')),
  },
  {
    id: 'actions',
    cell: ({ row }) => h(DataTableRowActions, { row }),
  },
]
