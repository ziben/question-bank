<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-semibold tracking-tight">权限管理</h1>
    </div>
    <!-- 确认对话框 -->
    <ConfirmDialog v-model:open="isConfirmOpen" :title="options.title" :content="options.content"
      :confirm-text="options.confirmText" :cancel-text="options.cancelText" :variant="options.variant"
      @confirm="handleConfirm" @cancel="handleCancel" />
    <Tabs v-model="activeTab" class="w-full">
      <TabsList class="grid w-full grid-cols-2">
        <TabsTrigger value="list">权限列表</TabsTrigger>
        <TabsTrigger value="preview">权限预览</TabsTrigger>
      </TabsList>
      <TabsContent value="list">
        <MyNewDataTable :data="filteredPermissions || []" :columns="columns" filter_column="groupName" :pagination="{
          page: currentPage,
          pageSize: pageSize,
          total: total || 0,
          onPageChange: handlePagination.onPageChange,
          onPageSizeChange: handlePagination.onPageSizeChange
        }" @action="handleAction" />
      </TabsContent>
      <TabsContent value="preview">
        <Card>
          <CardHeader>
            <CardTitle>权限预览</CardTitle>
            <CardDescription>
              查看所有可用的权限及其组织结构
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-6">
              <div v-for="group in permissionGroups" :key="group.code" class="space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold">{{ group.name }}</h3>
                  <Badge variant="secondary">{{ group.code }}</Badge>
                </div>
                <div class="pl-4 space-y-2">
                  <div v-for="permission in group.permissions" :key="permission.code"
                    class="flex items-center justify-between p-2 rounded-lg hover:bg-muted">
                    <div>
                      <p class="font-medium">{{ permission.actionName }}</p>
                      <p class="text-sm text-muted-foreground">
                        {{ permission.description || '无描述' }}
                      </p>
                    </div>
                    <div class="flex items-center gap-2">
                      <code class="px-2 py-1 rounded bg-muted">
                        {{ permission.code }}
                      </code>
                      <Badge v-if="permission.isDeleted" variant="destructive">
                        已禁用
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>

    <!-- 权限对话框 -->
    <Dialog :open="showDialog" @update:open="showDialog = $event">
      <DialogContent class="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{{ editing ? '编辑权限（ID:' + editing.id + '）' : '新建权限' }}</DialogTitle>
          <DialogDescription>
            {{ editing ? '修改权限信息' : '创建新的权限' }}
          </DialogDescription>
        </DialogHeader>
        <form @submit="onSubmit" class="space-y-4 py-4">
          <div class="grid grid-cols-2 gap-4">
            <FormField v-slot="{ componentField }" name="groupName">
              <FormItem>
                <FormLabel required>分组名称</FormLabel>
                <FormControl>
                  <Input v-bind="componentField" placeholder="例如：用户管理" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="groupCode">
              <FormItem>
                <FormLabel required>分组代码</FormLabel>
                <FormControl>
                  <Input v-bind="componentField" placeholder="例如：user" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <FormField v-slot="{ componentField }" name="actionName">
              <FormItem>
                <FormLabel required>操作名称</FormLabel>
                <FormControl>
                  <Input v-bind="componentField" placeholder="例如：创建用户" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="actionCode">
              <FormItem>
                <FormLabel required>操作代码</FormLabel>
                <FormControl>
                  <Input v-bind="componentField" placeholder="例如：create" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <FormField v-slot="{ componentField }" name="description">
            <FormItem>
              <FormLabel>描述</FormLabel>
              <FormControl>
                <Textarea v-bind="componentField" placeholder="请输入权限描述" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <DialogFooter>
            <Button type="button" variant="outline" @click="showDialog = false">
              取消
            </Button>
            <Button type="submit" :loading="saving">
              {{ editing ? '保存' : '创建' }}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import type { Permission } from '~/prisma/generated/zod'
import { useToast } from '~/components/shadcn/toast/use-toast'
import { columns } from '~/components/my/permissions/columns'
import { usePermissionManagement } from '~/composables/usePermissionManagement'
import { useConfirmDialog } from '~/composables/useConfirmDialog'
import { useCreatePermission, useUpdatePermission } from '~/lib/hooks'
import { ConfirmDialog } from '@/components/shadcn/confirm-dialog'

const { toast } = useToast()
const { isOpen: isConfirmOpen, options, confirm, handleConfirm, handleCancel } = useConfirmDialog()

const {
  currentPage,
  total,
  pageSize,
  loading,
  saving,
  showDialog,
  editing,
  activeTab,
  searchQuery,
  permissions,
  filteredPermissions,
  permissionGroups,
  togglePermission,
  refetchPermissions,
  handlePagination
} = usePermissionManagement()

// 表单 schema
const formSchema = toTypedSchema(
  z.object({
    groupName: z.string().min(2, { message: '名称至少需要2个字符' }),
    groupCode: z.string().min(1, { message: '请输入分组代码' }),
    actionName: z.string().min(2, { message: '名称至少需要2个字符' }),
    actionCode: z.string().min(1, { message: '请输入操作代码' }),
    description: z.string().optional()
  })
)

type PermissionFormValues = {
  groupName: string
  groupCode: string
  actionName: string
  actionCode: string
  description?: string
}

const form = useForm<PermissionFormValues>({
  validationSchema: formSchema
})

const { mutateAsync: createPermission } = useCreatePermission()
const { mutateAsync: updatePermission } = useUpdatePermission()

// 处理表格操作
const handleAction = async (action: string, permission?: Permission) => {
  switch (action) {
    case 'edit':
      if (permission) openPermissionDialog(permission)
      break
    case 'toggle':
      if (permission) await onDeletePermission(permission)
      break
    case 'add':
      openPermissionDialog()
      break
  }
}

// 打开权限对话框
const openPermissionDialog = (permission: Permission | null = null) => {
  editing.value = permission
  if (permission) {
    form.setValues({
      groupName: permission.groupName,
      groupCode: permission.groupCode,
      actionName: permission.actionName,
      actionCode: permission.actionCode,
      description: permission.description || ''
    })
  } else {
    form.resetForm()
  }
  showDialog.value = true
}

// 保存权限
const savePermission = async (values: PermissionFormValues) => {
  try {
    saving.value = true
    const code = `${values.groupCode}.${values.actionCode}`
    const data = {
      ...values,
      code
    }

    if (editing.value) {
      await updatePermission({
        where: { id: editing.value.id },
        data
      })
    } else {
      await createPermission({
        data
      })
    }

    await refetchPermissions()
    showDialog.value = false
    toast({
      title: '成功',
      description: `权限已${editing.value ? '更新' : '创建'}`
    })
  } catch (error) {
    toast({
      title: '错误',
      description: `${editing.value ? '更新' : '创建'}权限失败`,
      variant: 'destructive'
    })
  } finally {
    saving.value = false
  }
}
const onDeletePermission = async (permission: Permission) => {
  const confirmed = await confirm({
    title: '确认操作',
    content: `确定要${permission.isDeleted ? '启用' : '禁用'}权限 "${permission.actionName}" 吗？`,
    confirmText: permission.isDeleted ? '启用' : '禁用',
    cancelText: '取消',
    variant: permission.isDeleted ? 'default' : 'destructive'
  })
  if (confirmed) await togglePermission(permission)
}
// 提交表单
const onSubmit = async (e: Event) => {
  e.preventDefault()
  const result = await form.validate()
  if (result.valid) {
    await savePermission(form.values)
  }
}
</script>
