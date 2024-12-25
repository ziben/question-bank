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
    <MyNewDataTable :data="roles" :columns="columns" :filter_column="'name'" :pagination="{
      page: currentPage,
      pageSize: pageSize,
      total: total,
      onPageChange,
      onPageSizeChange
    }" @action="handleAction" />
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
                  <Checkbox :id="'permission-' + permission.id" :checked="selectedPermissions.includes(permission.code)"
                    @update:checked="(checked) => {
                      if (checked) {
                        selectedPermissions = [...selectedPermissions, permission.code]
                      } else {
                        selectedPermissions = selectedPermissions.filter(code => code !== permission.code)
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
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/shadcn/card'
import {
  Form,
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
import type { Permission, Role } from '@prisma/client'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { computed, onMounted, ref, watch, nextTick } from 'vue'
import * as z from 'zod'

import { columns } from '@/components/my/roles/columns'
import { RoleOptionalDefaultsSchema, type RoleWithRelations } from '~/prisma/generated/zod'
import type { Row } from '@tanstack/vue-table'
import type { PaginatedResponse } from '~/types'

// 获取角色列表的响应类型
type RolesResponse = ApiResponse<PaginatedResponse<RoleWithRelations>>
  
// 状态管理
const loading = ref(false)
const saving = ref(false)
const savingPermissions = ref(false)
const showRoleDialog = ref(false)
const showPermissionDialog = ref(false)
const editingRole = ref<RoleWithRelations | null>(null)
const roles = ref<RoleWithRelations[]>([])
const permissions = ref<Permission[]>([])
const selectedPermissions = ref<string[]>([])
const total = ref(0)
const currentPage = ref(1)
const pageSize = ref(10)
const searchQuery = ref('')

const confirm = useConfirm()
const { toast } = useToast()

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
  code: string;
  name: string;
  description?: string;
}

const form = useForm({
  validationSchema: roleFormSchema,
  initialValues: {
    code: '',
    name: '',
    description: ''
  }
})

const handleAction = (action: string, ...args: any[]) => {
  console.log('当前[action]是:' + action + ', 当前[args]是:' + JSON.stringify(args))

  switch (action) {
    case 'edit':
      openRoleDialog(args[0].original)
      break;
    case 'permissions':
      openPermissionDialog(args[0].original)
      break;
    case 'delete':
      deleteRole(args[0].original)
      break;
    case 'add':
      openRoleDialog()
      break;
    default:
      break;
  }

  // openRoleDialog(row.original)
}

// 打开角色对话框
function openRoleDialog(role: RoleWithRelations | null = null) {
  editingRole.value = role
  if (role) {
    form.resetForm({
      values: {
        code: role.code,
        name: role.name,
        description: role.description || ''
      }
    })
  } else {
    form.resetForm({
      values: {
        code: '',
        name: '',
        description: ''
      }
    })
  }
  showRoleDialog.value = true
}



// 获取角色列表
async function fetchRoles() {
  try {
    loading.value = true
    const { data } = await $fetch<RolesResponse>(`/api/admin/roles?page=${currentPage.value}&pageSize=${pageSize.value}&search=${searchQuery.value}`)
    roles.value = data?.items || []
    total.value = data?.meta?.total || 0
  } catch (error) {
    console.error('获取角色列表失败:', error)
  } finally {
    loading.value = false
  }
}

// 获取权限列表
async function fetchPermissions() {
  try {
    const response = await useFetch('/api/admin/permissions')
    // const data = await response.json()
    permissions.value = response.data?.value?.items
  } catch (error) {
    console.error('获取权限列表失败:', error)
  }
}

// 按模块分组的权限列表
const permissionGroups = computed(() => {
  const groups: Record<string, Permission[]> = {}
  permissions.value.forEach(permission => {
    const module = permission.groupCode
    if (!groups[module]) {
      groups[module] = []
    }
    groups[module].push(permission)
  })
  return groups
})

// 检查权限组是否全部选中
function isGroupSelected(groupCode: string) {
  const groupPermissions = permissionGroups.value[groupCode]
  return groupPermissions.every(permission =>
    selectedPermissions.value.includes(permission.code)
  )
}

// 切换权限组的选中状态
function toggleGroupPermissions(groupCode: string) {
  const groupPermissions = permissionGroups.value[groupCode]
  const allSelected = isGroupSelected(groupCode)

  if (allSelected) {
    selectedPermissions.value = selectedPermissions.value.filter(code =>
      !groupPermissions.some(p => p.code === code)
    )
  } else {
    const newPermissions = groupPermissions
      .map(p => p.code)
      .filter(code => !selectedPermissions.value.includes(code))
    selectedPermissions.value = [...selectedPermissions.value, ...newPermissions]
  }
}

// 打开权限设置对话框
async function openPermissionDialog(role: RoleWithRelations) {
  editingRole.value = role
  await fetchPermissions()
  // const rolePermissions = JSON.parse(role.permissions)
  selectedPermissions.value = role.permissions
  showPermissionDialog.value = true
}

// 保存权限设置
async function savePermissions() {
  if (!editingRole.value) return

  try {
    savingPermissions.value = true
    const { error } = await useFetch(`/api/admin/roles/${editingRole.value.id}/permissions`, {
      method: 'PUT',
      body: {
        permissions: selectedPermissions.value
      }
    })

    if (error.value) {
      throw new Error(error.value?.data?.message || '保存失败')
    }

    showPermissionDialog.value = false
    toast({ title: '权限设置已更新' })
    await fetchRoles()
  } catch (error) {
    console.error('保存权限失败:', error)
    toast({
      variant: 'destructive',
      title: '保存失败',
      description: error instanceof Error ? error.message : '保存权限失败'
    })
  } finally {
    savingPermissions.value = false
  }
}

// 删除角色
async function deleteRole(role: Role) {
  const confirmed = await useConfirm({
    title: '确认删除',
    content: `确定要删除角色 "${role.name}" 吗？此操作不可恢复。`,
    type: 'error',
    confirmButton: {
      text: '删除',
      variant: 'destructive'
    },
    cancelButton: {
      text: '取消'
    }
  })

  if (!confirmed) return

  try {
    const response = await fetch(`/api/admin/roles/${role.id}`, {
      method: 'DELETE'
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || '删除失败')
    }

    toast({ title: '角色删除成功' })
    await fetchRoles()
  } catch (error) {
    console.error('删除角色失败:', error)
    toast({ title: error instanceof Error ? error.message : '删除角色失败' })
  }
}

// 分页处理
function onPageChange(page: number) {
  currentPage.value = page
}

function onPageSizeChange(size: number) {
  nextTick(() => {
    pageSize.value = size
    currentPage.value = 1
  })
}

// 监听分页和搜索变化
watch([currentPage, pageSize, searchQuery], () => {
  fetchRoles()
})

// 监听 selectedPermissions 变化
watch(selectedPermissions, (newValue) => {
  console.log('selectedPermissions changed:', newValue)
}, { deep: true })

// 表单提交处理
const onSubmit = async (e: Event) => {
  e.preventDefault()
  const { valid } = await form.validate()
  if (valid) {
    await saveRole(form.values as RoleFormValues)
  }
}

// 初始化
onMounted(() => {
  fetchRoles()
})

async function saveRole(values: RoleFormValues) {
  try {
    saving.value = true
    const url = editingRole.value
      ? `/api/admin/roles/${editingRole.value.id}`
      : '/api/admin/roles'

    const { data, error } = await $fetch(url, {
      method: editingRole.value ? 'PUT' : 'POST',
      body: values
    })

    if (error.value) {
      throw new Error(error.value?.data?.message || '保存失败')
    }

    showRoleDialog.value = false
    toast({
      title: editingRole.value ? '角色更新成功' : '角色创建成功',
      description: `角色"${values.name}"${editingRole.value ? '已更新' : '已创建'}`
    })
    await fetchRoles()
  } catch (error) {
    console.error('保存角色失败:', error)
    toast({
      variant: 'destructive',
      title: '保存失败',
      description: error instanceof Error ? error.message : '保存角色失败'
    })
  } finally {
    saving.value = false
  }
}
</script>
