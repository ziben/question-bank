<template>
  <div class="hidden h-full flex-1 flex-col space-y-8 p-1 md:flex">
    <div class="flex items-center justify-between space-y-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          用户管理
        </h2>
        <p class="text-muted-foreground">
          管理系统中的用户账号及其角色
        </p>
      </div>
      <Button @click="openUserDialog(null)">
        新建用户
      </Button>
    </div>

    <Card>
      <MyNewDataTable 
        :data="users || []" 
        :columns="columns" 
        :filter_column="'username'" 
        :pagination="{
          page: currentPage,
          pageSize: pageSize,
          total: total || 0,
          onPageChange: handlePagination.onPageChange,
          onPageSizeChange: handlePagination.onPageSizeChange
        }" 
        @action="handleAction" 
      />
    </Card>

    <!-- 用户表单对话框 -->
    <Dialog :open="showUserDialog" @update:open="showUserDialog = $event">
      <DialogContent class="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{{ editingUser ? '编辑用户（ID:' + editingUser.id + '）' : '新建用户' }}</DialogTitle>
          <DialogDescription>
            {{ editingUser ? '修改用户信息' : '创建新的用户并设置基本信息' }}
          </DialogDescription>
        </DialogHeader>
        <form @submit="onSubmit" class="space-y-4 py-4">
          <FormField v-slot="{ componentField }" name="username">
            <FormItem>
              <FormLabel required>用户名</FormLabel>
              <FormControl>
                <Input v-bind="componentField" placeholder="输入用户名" :disabled="!!editingUser" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="email">
            <FormItem>
              <FormLabel required>邮箱</FormLabel>
              <FormControl>
                <Input v-bind="componentField" placeholder="输入邮箱地址" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ value, handleChange }" name="roleIds">
            <FormItem>
              <FormLabel required>角色</FormLabel>
              <FormControl>
                <Select
                  :model-value="value"
                  :multiple="true"
                  @update:model-value="handleChange"
                >
                  <SelectTrigger class="w-full">
                    <SelectValue :placeholder="'选择用户角色'" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>角色列表</SelectLabel>
                      <SelectItem 
                        v-for="role in roles" 
                        :key="role.id" 
                        :value="role.id"
                      >
                        {{ role.name }}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                用户可以拥有多个角色，这将决定用户的权限范围
              </FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="password">
            <FormItem>
              <FormLabel>{{ editingUser ? '新密码' : '密码' }}</FormLabel>
              <FormControl>
                <Input 
                  v-bind="componentField" 
                  type="password" 
                  :placeholder="editingUser ? '不修改请留空' : '请输入密码'" 
                />
              </FormControl>
              <FormDescription v-if="editingUser">
                如果不需要修改密码，请留空
              </FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>

          <DialogFooter>
            <Button type="button" variant="outline" @click="showUserDialog = false">
              取消
            </Button>
            <Button type="submit" :loading="saving">
              {{ editingUser ? '保存' : '创建' }}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>

    <ConfirmDialog
      v-model:open="isOpen"
      v-bind="options"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    />
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
import { useToast } from '@/components/shadcn/toast/use-toast'
import { useConfirmDialog } from '@/composables/useConfirmDialog'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { columns } from '@/components/my/users/columns'
import { useUserManagement } from '~/composables/useUserManagement'
import { useCreateUser, useUpdateUser, useDeleteUser } from '~/lib/hooks'
import type { UserWithRelations } from '~/prisma/generated/zod'
import { ConfirmDialog } from '@/components/shadcn/confirm-dialog'
import { Button } from '@/components/shadcn/button'
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn/select'

const { toast } = useToast()
const { isOpen, options, confirm, handleConfirm, handleCancel } = useConfirmDialog()

// 用户表单模式
const userFormSchema = toTypedSchema(
  z.object({
    username: z.string().min(2, {
      message: '用户名至少需要2个字符'
    }),
    email: z.string().email({
      message: '请输入有效的邮箱地址'
    }),
    roleIds: z.array(z.string(), {
      required_error: '请选择用户角色'
    }),
    password: z.string().optional().transform(val => val || undefined)
  })
)

interface UserFormValues {
  username: string
  email: string
  roleIds: string[]
  password?: string
}

const form = useForm<UserFormValues>({
  validationSchema: userFormSchema,
})

const { mutateAsync: createUser } = useCreateUser()
const { mutateAsync: updateUser } = useUpdateUser()
const { mutateAsync: deleteUser } = useDeleteUser()

const {
  users,
  roles,
  saving,
  showUserDialog,
  editingUser,
  currentPage,
  pageSize,
  total,
  handlePagination,
  refetchUsers
} = useUserManagement()

// 处理表格操作
const handleAction = async (action: string, user?: UserWithRelations) => {
  if (!user) return

  switch (action) {
    case 'edit':
      openUserDialog(user)
      break
    case 'delete':
      await onDeleteUser(user)
      break
  }
}

// 打开用户对话框
const openUserDialog = (user: UserWithRelations | null = null) => {
  editingUser.value = user
  if (user) {
    form.setValues({
      username: user.username,
      email: user.email,
      roleIds: user.roles.map(role => role.id),
      password: undefined
    })
  } else {
    form.resetForm()
  }
  showUserDialog.value = true
}

// 删除用户
const onDeleteUser = async (user: UserWithRelations) => {
  const confirmed = await confirm({
    title: '确认操作',
    content: `确定要${user.isDeleted ? '恢复' : '禁用'}用户 "${user.username}" 吗？`,
    confirmText: user.isDeleted ? '恢复' : '禁用',
    cancelText: '取消',
    variant: user.isDeleted ? 'default' : 'destructive'
  })

  if (!confirmed) return

  try {
    await updateUser({
      where: { id: user.id },
      data: { isDeleted: !user.isDeleted }
    })
    toast({
      title: '操作成功',
      description: `用户 "${user.username}" 已${user.isDeleted ? '恢复' : '禁用'}`,
    })
    await refetchUsers()
  } catch (e) {
    console.error('操作失败:', e)
    toast({
      title: '错误',
      description: '操作失败，请重试',
      variant: 'destructive'
    })
  }
}

// 保存用户
const saveUser = async (values: UserFormValues) => {
  try {
    if (editingUser.value) {
      await updateUser({
        where: { id: editingUser.value.id },
        data: {
          email: values.email,
          password: values.password,
          roles: {
            set: values.roleIds.map(id => ({ id }))
          }
        }
      })
      toast({
        title: '更新成功',
        description: `用户 "${values.username}" 信息已更新`,
      })
    } else {
      await createUser({
        data: {
          username: values.username,
          email: values.email,
          password: values.password!,
          roles: {
            connect: values.roleIds.map(id => ({ id }))
          }
        }
      })
      toast({
        title: '创建成功',
        description: `用户 "${values.username}" 已创建`,
      })
    }
    showUserDialog.value = false
    await refetchUsers()
  } catch (e) {
    console.error(editingUser.value ? '更新失败:' : '创建失败:', e)
    toast({
      title: editingUser.value ? '更新失败' : '创建失败',
      description: '操作失败，请重试',
      variant: 'destructive'
    })
  }
}

// 表单提交处理
const onSubmit = async (e: Event) => {
  e.preventDefault()
  const result = await form.validate()
  if (result.valid) {
    await saveUser(form.values)
  }
}
</script>
