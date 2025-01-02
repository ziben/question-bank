<template>
  <div class="hidden h-full flex-1 flex-col space-y-8 p-1 md:flex">
    <div class="flex items-center justify-between space-y-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          角色管理
        </h2>
        <p class="text-muted-foreground">
          管理系统中的角色及其权限
        </p>
      </div>
    </div>
    <MyNewDataTable :data="roles || []" :columns="columns" :filter_column="'name'" :pagination="{
      page: currentPage,
      pageSize: pageSize,
      total: total || 0,
      onPageChange: handlePagination.onPageChange,
      onPageSizeChange: handlePagination.onPageSizeChange
    }" @action="handleAction" />

    <!-- 确认删除对话框 -->
    <ConfirmDialog
      v-model:open="isConfirmOpen"
      :title="options.title"
      :content="options.content"
      :confirm-text="options.confirmText"
      :cancel-text="options.cancelText"
      :variant="options.variant"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    />

    <!-- 角色表单对话框 -->
    <Dialog :open="showRoleDialog" @update:open="showRoleDialog = $event">
      <DialogContent class="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{{ editingRole ? '编辑角色（ID:' + editingRole.id + '）' : '新建角色' }}</DialogTitle>
          <DialogDescription>
            {{ editingRole ? '修改角色信息' : '创建新的角色并设置基本信息' }}
          </DialogDescription>
        </DialogHeader>
        <form @submit="onSubmit" class="space-y-4 py-4">
          <FormField v-slot="{ componentField }" name="code">
            <FormItem>
              <FormLabel required>角色代码</FormLabel>
              <FormControl>
                <Input v-bind="componentField" placeholder="输入角色代码" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="name">
            <FormItem>
              <FormLabel required>角色名称</FormLabel>
              <FormControl>
                <Input v-bind="componentField" placeholder="输入角色名称" />
              </FormControl>
              <FormDescription>
                角色名称用于标识不同的用户组，例如：管理员、教师、学生等
              </FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="description">
            <FormItem>
              <FormLabel>角色描述</FormLabel>
              <FormControl>
                <Textarea v-bind="componentField" placeholder="输入角色描述信息" :rows="3" />
              </FormControl>
              <FormDescription>
                描述该角色的主要职责和权限范围
              </FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>

          <DialogFooter>
            <Button type="button" variant="outline" @click="showRoleDialog = false">
              取消
            </Button>
            <Button type="submit" :loading="saving">
              {{ editingRole ? '保存' : '创建' }}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>

    <!-- 权限设置对话框 -->
    <Dialog :open="showPermissionDialog" @update:open="showPermissionDialog = $event">
      <DialogContent class="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>权限设置 - {{ editingRole?.name }}</DialogTitle>
          <DialogDescription>
            为角色分配可访问的权限，权限更改将立即生效
          </DialogDescription>
        </DialogHeader>
        <ScrollArea class="h-[60vh] pr-4">
          <div class="space-y-6 py-3">
            <div v-for="(group, key) in permissionGroups" :key="key" class="space-y-2">
              <div class="flex items-center justify-between">
                <div>
                  <Label class="text-base font-medium">{{ key }}</Label>
                  <p class="text-sm text-muted-foreground">
                    选择该模块下的权限
                  </p>
                </div>
                <Button variant="outline" size="sm" class="h-8 px-3 text-sm" @click="toggleGroupPermissions(key)">
                  {{ isGroupSelected(key) ? '取消全选' : '全选' }}
                </Button>
              </div>
              <Separator class="my-1.5" />
              <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1.5">
                <div v-for="permission in group" :key="permission.id"
                  class="flex items-start space-x-2 p-1.5 rounded hover:bg-muted/50 transition-colors">
                  <Checkbox :id="'permission-' + permission.id"
                    :checked="selectedPermissions.some(p => p.code === permission.code)" @update:checked="(checked) => {
                      if (checked) {
                        selectedPermissions = [...selectedPermissions, permission]
                      } else {
                        selectedPermissions = selectedPermissions.filter(p => p.code !== permission.code)
                      }
                    }" class="h-4 w-4 translate-y-[1px]" />
                  <div class="space-y-0.5 min-w-0">
                    <label :for="'permission-' + permission.id"
                      class="text-sm font-medium leading-none cursor-pointer truncate block">
                      {{ permission.code }}
                    </label>
                    <p class="text-xs text-muted-foreground line-clamp-1">
                      {{ permission.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
        <DialogFooter class="mt-4">
          <Button type="button" variant="outline" @click="showPermissionDialog = false">
            取消
          </Button>
          <Button @click="savePermissions" :loading="savingPermissions">
            保存更改
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/shadcn/form'
import { ScrollArea } from '@/components/shadcn/scroll-area'
import { Separator } from '@/components/shadcn/separator'
import { useToast } from '@/components/shadcn/toast/use-toast'
import { useConfirm } from '@/composables/useConfirm'
import type { Permission } from '@prisma/client'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { ConfirmDialog } from '@/components/shadcn/confirm-dialog'
import { columns } from '@/components/my/roles/columns'
import { type RoleWithRelations } from '~/prisma/generated/zod'
import { useRoleManagement } from '~/composables/useRoleManagement'
import { useCreateRole, useUpdateRole, useDeleteRole } from '~/lib/hooks'
import type { Row } from '@tanstack/vue-table'

const { toast } = useToast()
const { isOpen: isConfirmOpen, options, confirm, handleConfirm, handleCancel } = useConfirmDialog()

const {
  saving,
  savingPermissions,
  showRoleDialog,
  showPermissionDialog,
  editingRole,
  selectedPermissions,
  currentPage,
  pageSize,
  total,
  roles,
  permissionGroups,
  isGroupSelected,
  toggleGroupPermissions,
  handlePagination,
  refetchRoles
} = useRoleManagement()

// Role form schema
const roleFormSchema = toTypedSchema(
  z.object({
    code: z.string().min(2, {
      message: '角色标识至少需要2个字符'
    }).max(50, {
      message: '角色标识不能超过50个字符'
    }),
    name: z.string().min(2, {
      message: '角色名称至少需要2个字符'
    }).max(50, {
      message: '角色名称不能超过50个字符'
    }),
    description: z.string().max(200, {
      message: '描述不能超过200个字符'
    }).optional()
  })
)

type RoleFormValues = {
  code: string
  name: string
  description?: string
}

const form = useForm<RoleFormValues>({
  validationSchema: roleFormSchema,
})

const { mutateAsync: createRole } = useCreateRole()
const { mutateAsync: updateRole } = useUpdateRole()
const { mutateAsync: deleteRole } = useDeleteRole()

// 处理表格操作
const handleAction = async (action: string, role?: Row<RoleWithRelations>) => {
  switch (action) {
    case 'edit':
      if (role) openRoleDialog(role.original)
      break
    case 'delete':
      if (role) await onDeleteRole(role.original)
      break
    case 'permissions':
      if (role) openPermissionDialog(role.original)
      break
    case 'add':
      openRoleDialog()
      break
  }
}

// 打开角色对话框
const openRoleDialog = (role: RoleWithRelations | null = null) => {
  editingRole.value = role
  if (role) {
    form.setValues({
      code: role.code,
      name: role.name,
      description: role.description || ''
    })
  } else {
    form.resetForm()
  }
  showRoleDialog.value = true
}

// 打开权限设置对话框
const openPermissionDialog = (role: RoleWithRelations) => {
  editingRole.value = role
  selectedPermissions.value = role.permissions || []
  showPermissionDialog.value = true
}

// 保存权限设置
const savePermissions = async () => {
  if (!editingRole.value) return

  try {
    savingPermissions.value = true
    await updateRole({
      where: { id: editingRole.value.id },
      data: {
        permissions: {
          set: selectedPermissions.value.map(p => ({ id: p.id }))
        }
      }
    })

    await refetchRoles()
    showPermissionDialog.value = false
    toast({
      title: '成功',
      description: '权限设置已更新'
    })
  } catch (error) {
    toast({
      title: '错误',
      description: '保存权限设置失败',
      variant: 'destructive'
    })
  } finally {
    savingPermissions.value = false
  }
}

// 删除角色
const onDeleteRole = async (role: RoleWithRelations) => {
  const confirmed = await confirm({
    title: '确认删除',
    content: `确定要删除角色 "${role.name}" 吗？此操作无法撤销。`,
    confirmText: '删除',
    cancelText: '取消',
    variant: 'destructive'
  })

  if (!confirmed) return

  try {
    await deleteRole({
      where: { id: role.id }
    })

    await refetchRoles()
    toast({
      title: '成功',
      description: '角色已删除'
    })
  } catch (error) {
    toast({
      title: '错误',
      description: '删除角色失败',
      variant: 'destructive'
    })
  }
}

// 保存角色
const saveRole = async (values: RoleFormValues) => {
  try {
    saving.value = true
    if (editingRole.value) {
      await updateRole({
        where: { id: editingRole.value.id },
        data: values
      })
    } else {
      await createRole({
        data: values
      })
    }

    await refetchRoles()
    showRoleDialog.value = false
    toast({
      title: '成功',
      description: `角色已${editingRole.value ? '更新' : '创建'}`
    })
  } catch (error) {
    toast({
      title: '错误',
      description: `${editingRole.value ? '更新' : '创建'}角色失败`,
      variant: 'destructive'
    })
  } finally {
    saving.value = false
  }
}

// 表单提交处理
const onSubmit = async (e: Event) => {
  e.preventDefault()
  const result = await form.validate()
  if (result.valid) {
    await saveRole(form.values)
  }
}
</script>
