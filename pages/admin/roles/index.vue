<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-semibold tracking-tight">角色管理</h1>
      <div class="flex items-center gap-4">
        <div class="relative w-64">
          <Input
            v-model="searchQuery"
            placeholder="搜索角色..."
            class="w-full"
          >
            <template #prefix>
              <SearchIcon class="h-4 w-4 text-muted-foreground" />
            </template>
          </Input>
        </div>
        <Button @click="openRoleDialog()">
          <PlusIcon class="h-4 w-4 mr-2" />
          新建角色
        </Button>
      </div>
    </div>

    <Card>
      <DataTable
        :columns="columns"
        :data="roles"
        :total="total"
        :loading="loading"
        :current-page="currentPage"
        :page-size="pageSize"
        @page-change="onPageChange"
        @page-size-change="onPageSizeChange"
      >
        <template #permissions="{ value }">
          <div class="flex flex-wrap gap-2">
            <Badge
              v-for="permission in value"
              :key="permission.id"
              variant="secondary"
            >
              {{ permission.name }}
            </Badge>
          </div>
        </template>
        <template #actions="{ row }">
          <DropdownMenu>
            <DropdownMenuTrigger as="div">
              <Button variant="ghost" size="icon">
                <MoreHorizontalIcon class="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem @click="openRoleDialog(row)">
                <PencilIcon class="h-4 w-4 mr-2" />
                编辑
              </DropdownMenuItem>
              <DropdownMenuItem @click="openPermissionDialog(row)">
                <KeyIcon class="h-4 w-4 mr-2" />
                权限设置
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                @click="deleteRole(row)"
                class="text-destructive"
                :disabled="row.isSystem"
              >
                <TrashIcon class="h-4 w-4 mr-2" />
                删除
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </template>
      </DataTable>
    </Card>

    <!-- 角色表单对话框 -->
    <Dialog :open="showRoleDialog" @update:open="showRoleDialog = $event">
      <DialogContent class="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{{ editingRole ? '编辑角色' : '新建角色' }}</DialogTitle>
        </DialogHeader>
        <Form @submit="form.handleSubmit(saveRole)" class="space-y-4">
          <FormField
            v-slot="{ componentField }"
            name="name"
          >
            <FormItem>
              <FormLabel>角色名称</FormLabel>
              <FormControl>
                <Input v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField
            v-slot="{ componentField }"
            name="description"
          >
            <FormItem>
              <FormLabel>角色描述</FormLabel>
              <FormControl>
                <Textarea v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              @click="showRoleDialog = false"
            >
              取消
            </Button>
            <Button type="submit" :loading="saving">
              {{ editingRole ? '保存' : '创建' }}
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>

    <!-- 权限设置对话框 -->
    <Dialog :open="showPermissionDialog" @update:open="showPermissionDialog = $event">
      <DialogContent class="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>权限设置 - {{ editingRole?.name }}</DialogTitle>
          <DialogDescription>
            为角色分配可访问的权限
          </DialogDescription>
        </DialogHeader>
        <div class="space-y-6 py-4">
          <div v-for="(group, key) in permissionGroups" :key="key" class="space-y-4">
            <div class="flex items-center justify-between">
              <Label class="text-base">{{ key }}</Label>
              <Button 
                variant="ghost" 
                size="sm"
                @click="toggleGroupPermissions(key)"
              >
                {{ isGroupSelected(key) ? '取消全选' : '全选' }}
              </Button>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div
                v-for="permission in group"
                :key="permission.id"
                class="flex items-start space-x-2"
              >
                <Checkbox
                  :id="'permission-' + permission.id"
                  v-model="selectedPermissions"
                  :value="String(permission.id)"
                />
                <div class="grid gap-1.5 leading-none">
                  <label
                    :for="'permission-' + permission.id"
                    class="text-sm font-medium leading-none cursor-pointer"
                  >
                    {{ permission.name }}
                  </label>
                  <p class="text-sm text-muted-foreground">
                    {{ permission.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              @click="showPermissionDialog = false"
            >
              取消
            </Button>
            <Button @click="savePermissions" :loading="savingPermissions">
              保存
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { SearchIcon, PlusIcon, MoreHorizontalIcon, PencilIcon, KeyIcon, TrashIcon } from 'lucide-vue-next'
import { useConfirm } from '@/composables/useConfirm'
import type { Role, Permission, RolePermission } from '@prisma/client'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/shadcn/form'

// 表格列定义
const columns = [
  {
    key: 'name',
    title: '角色名称'
  },
  {
    key: 'description',
    title: '描述'
  },
  {
    key: 'permissions',
    title: '已分配权限'
  },
  {
    key: 'createdAt',
    title: '创建时间',
    format: (value: string) => new Date(value).toLocaleString()
  },
  {
    key: 'actions',
    title: '操作',
    width: 100
  }
]

interface RoleWithPermissions extends Role {
  permissions: Permission[]
}

// 状态管理
const loading = ref(false)
const saving = ref(false)
const savingPermissions = ref(false)
const showRoleDialog = ref(false)
const showPermissionDialog = ref(false)
const editingRole = ref<RoleWithPermissions | null>(null)
const roles = ref<RoleWithPermissions[]>([])
const permissions = ref<Permission[]>([])
const selectedPermissions = ref<number[]>([])
const total = ref(0)
const currentPage = ref(1)
const pageSize = ref(10)
const searchQuery = ref('')

const confirm = useConfirm()

// Role form schema
const roleFormSchema = toTypedSchema(
  z.object({
    name: z.string().min(2, {
      message: '角色名称至少需要2个字符'
    }),
    description: z.string().optional()
  })
)

type RoleFormValues = {
  name: string;
  description?: string;
}

const form = useForm({
  validationSchema: roleFormSchema,
  initialValues: {
    name: '',
    description: ''
  }
})

// 打开角色对话框
function openRoleDialog(role: RoleWithPermissions | null = null) {
  editingRole.value = role
  if (role) {
    form.resetForm({
      values: {
        name: role.name,
        description: role.description || ''
      }
    })
  } else {
    form.resetForm({
      values: {
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
    const response = await fetch(`/api/roles?page=${currentPage.value}&pageSize=${pageSize.value}&search=${searchQuery.value}`)
    const data = await response.json()
    roles.value = data.items
    total.value = data.total
  } catch (error) {
    console.error('获取角色列表失败:', error)
  } finally {
    loading.value = false
  }
}

// 获取权限列表
async function fetchPermissions() {
  try {
    const response = await fetch('/api/permissions')
    const data = await response.json()
    permissions.value = data
  } catch (error) {
    console.error('获取权限列表失败:', error)
  }
}

// 按模块分组的权限列表
const permissionGroups = computed(() => {
  const groups: Record<string, Permission[]> = {}
  permissions.value.forEach(permission => {
    const [module] = permission.name.split('.')
    if (!groups[module]) {
      groups[module] = []
    }
    groups[module].push(permission)
  })
  return groups
})

// 检查权限组是否全部选中
function isGroupSelected(groupName: string) {
  const groupPermissions = permissionGroups.value[groupName]
  return groupPermissions.every(permission => 
    selectedPermissions.value.includes(permission.id)
  )
}

// 切换权限组的选中状态
function toggleGroupPermissions(groupName: string) {
  const groupPermissions = permissionGroups.value[groupName]
  const allSelected = isGroupSelected(groupName)
  
  if (allSelected) {
    selectedPermissions.value = selectedPermissions.value.filter(id => 
      !groupPermissions.some(p => p.id === id)
    )
  } else {
    const newPermissions = groupPermissions
      .map(p => p.id)
      .filter(id => !selectedPermissions.value.includes(id))
    selectedPermissions.value.push(...newPermissions)
  }
}

// 打开权限设置对话框
async function openPermissionDialog(role: RoleWithPermissions) {
  editingRole.value = role
  await fetchPermissions()
  selectedPermissions.value = role.permissions.map(p => p.id)
  showPermissionDialog.value = true
}

// 保存权限设置
async function savePermissions() {
  if (!editingRole.value) return
  
  try {
    savingPermissions.value = true
    const response = await fetch(`/api/roles/${editingRole.value.id}/permissions`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        permissionIds: selectedPermissions.value
      })
    })
    
    if (!response.ok) throw new Error('保存失败')
    
    showPermissionDialog.value = false
    fetchRoles()
  } catch (error) {
    console.error('保存权限失败:', error)
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
    }
  })
  
  if (!confirmed) return
  
  try {
    const response = await fetch(`/api/roles/${role.id}`, {
      method: 'DELETE'
    })
    
    if (!response.ok) throw new Error('删除失败')
    
    fetchRoles()
  } catch (error) {
    console.error('删除角色失败:', error)
  }
}

// 分页处理
function onPageChange(page: number) {
  currentPage.value = page
}

function onPageSizeChange(size: number) {
  pageSize.value = size
  currentPage.value = 1
}

// 监听分页和搜索变化
watch([currentPage, pageSize, searchQuery], () => {
  fetchRoles()
})

// 初始化
onMounted(() => {
  fetchRoles()
})

async function saveRole(values: RoleFormValues) {
  try {
    saving.value = true
    const url = editingRole.value
      ? `/api/roles/${editingRole.value.id}`
      : '/api/roles'
    const method = editingRole.value ? 'PUT' : 'POST'
    
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    
    if (!response.ok) throw new Error('保存失败')
    
    showRoleDialog.value = false
    fetchRoles()
  } catch (error) {
    console.error('保存角色失败:', error)
  } finally {
    saving.value = false
  }
}
</script>
