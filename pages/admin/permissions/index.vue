<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-semibold tracking-tight">权限管理</h1>
      <div class="flex items-center gap-4">
        <div class="relative w-64">
          <Input
            v-model="searchQuery"
            placeholder="搜索权限..."
            class="w-full"
          >
            <template #prefix>
              <SearchIcon class="h-4 w-4 text-muted-foreground" />
            </template>
          </Input>
        </div>
        <Button @click="openPermissionDialog()">
          <PlusIcon class="h-4 w-4 mr-2" />
          新建权限
        </Button>
      </div>
    </div>

    <Card>
      <DataTable
        :columns="columns"
        :data="permissions"
        :total="total"
        :loading="loading"
        :current-page="currentPage"
        :page-size="pageSize"
        @page-change="onPageChange"
        @page-size-change="onPageSizeChange"
      >
        <template #module="{ value }">
          <Badge variant="secondary">
            {{ value }}
          </Badge>
        </template>
        <template #roles="{ value }">
          <div class="flex flex-wrap gap-2">
            <Badge
              v-for="role in value"
              :key="role.id"
              variant="outline"
            >
              {{ role.name }}
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
              <DropdownMenuItem @click="openPermissionDialog(row)">
                <PencilIcon class="h-4 w-4 mr-2" />
                编辑
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                @click="deletePermission(row)"
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

    <!-- 权限表单对话框 -->
    <Dialog :open="showDialog" @update:open="showDialog = $event">
      <DialogContent class="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{{ editingPermission ? '编辑权限' : '新建权限' }}</DialogTitle>
          <DialogDescription>
            权限标识符格式为: 模块.操作，例如: user.create
          </DialogDescription>
        </DialogHeader>
        <Form
          :validation-schema="permissionFormSchema"
          @submit="form.handleSubmit(savePermission)"
          v-slot="{ errors }"
          class="space-y-4"
        >
          <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2">
                <Label for="module">所属模块</Label>
                <Field
                  name="module"
                  v-slot="{ field }"
                >
                  <Select
                    v-bind="field"
                    :class="{ 'border-destructive': errors.module }"
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="选择模块" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>系统模块</SelectLabel>
                        <SelectItem value="system">系统管理</SelectItem>
                        <SelectItem value="user">用户管理</SelectItem>
                        <SelectItem value="role">角色管理</SelectItem>
                        <SelectItem value="permission">权限管理</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>业务模块</SelectLabel>
                        <SelectItem value="question">题目管理</SelectItem>
                        <SelectItem value="category">分类管理</SelectItem>
                        <SelectItem value="tag">标签管理</SelectItem>
                        <SelectItem value="subject">学科管理</SelectItem>
                        <SelectItem value="grade">年级管理</SelectItem>
                        <SelectItem value="source">来源管理</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <ErrorMessage name="module" class="text-sm text-destructive" />
              </div>
              <div class="space-y-2">
                <Label for="action">操作类型</Label>
                <Field
                  name="action"
                  v-slot="{ field }"
                >
                  <Select
                    v-bind="field"
                    :class="{ 'border-destructive': errors.action }"
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="选择操作" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="create">创建</SelectItem>
                      <SelectItem value="read">查看</SelectItem>
                      <SelectItem value="update">更新</SelectItem>
                      <SelectItem value="delete">删除</SelectItem>
                      <SelectItem value="manage">管理</SelectItem>
                      <SelectItem value="import">导入</SelectItem>
                      <SelectItem value="export">导出</SelectItem>
                      <SelectItem value="publish">发布</SelectItem>
                      <SelectItem value="audit">审核</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <ErrorMessage name="action" class="text-sm text-destructive" />
              </div>
            </div>
            <div class="space-y-2">
              <Label for="description">权限描述</Label>
              <Field
                name="description"
                v-slot="{ field }"
              >
                <Input
                  id="description"
                  v-bind="field"
                  :class="{ 'border-destructive': errors.description }"
                />
              </Field>
              <ErrorMessage name="description" class="text-sm text-destructive" />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              @click="showDialog = false"
            >
              取消
            </Button>
            <Button type="submit" :loading="saving">
              {{ editingPermission ? '保存' : '创建' }}
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { SearchIcon, PlusIcon, MoreHorizontalIcon, PencilIcon, TrashIcon } from 'lucide-vue-next'
import { useConfirm } from '@/composables/useConfirm'
import type { Permission, Role } from '@prisma/client'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

interface PermissionWithRoles extends Permission {
  roles: Role[]
}

// 表格列定义
const columns = [
  {
    key: 'name',
    title: '权限标识符'
  },
  {
    key: 'module',
    title: '所属模块',
    format: (value: string) => value.split('.')[0]
  },
  {
    key: 'description',
    title: '描述'
  },
  {
    key: 'roles',
    title: '已分配角色'
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

// 状态管理
const loading = ref(false)
const saving = ref(false)
const showDialog = ref(false)
const editingPermission = ref<PermissionWithRoles | null>(null)
const permissions = ref<PermissionWithRoles[]>([])
const total = ref(0)
const currentPage = ref(1)
const pageSize = ref(10)
const searchQuery = ref('')

const confirm = useConfirm()

// Permission form schema
const permissionFormSchema = toTypedSchema(
  z.object({
    module: z.string().min(1, {
      message: '请选择所属模块'
    }),
    action: z.string().min(1, {
      message: '请选择操作类型'
    }),
    description: z.string().min(2, {
      message: '描述至少需要2个字符'
    })
  })
)

type PermissionFormValues = {
  module: string;
  action: string;
  description: string;
}

const form = useForm({
  validationSchema: permissionFormSchema,
  initialValues: {
    module: '',
    action: '',
    description: ''
  }
})

// 获取权限列表
async function fetchPermissions() {
  try {
    loading.value = true
    const response = await fetch(`/api/permissions?page=${currentPage.value}&pageSize=${pageSize.value}&search=${searchQuery.value}`)
    const data = await response.json()
    permissions.value = data.items
    total.value = data.total
  } catch (error) {
    console.error('获取权限列表失败:', error)
  } finally {
    loading.value = false
  }
}

// 打开权限对话框
function openPermissionDialog(permission: PermissionWithRoles | null = null) {
  editingPermission.value = permission
  if (permission) {
    const [module, action] = permission.name.split('.')
    form.resetForm({
      values: {
        module,
        action,
        description: permission.description || ''
      }
    })
  } else {
    form.resetForm()
  }
  showDialog.value = true
}

// 保存权限信息
async function savePermission(values: PermissionFormValues) {
  const permissionName = `${values.module}.${values.action}`
  
  try {
    saving.value = true
    const url = editingPermission.value
      ? `/api/permissions/${editingPermission.value.id}`
      : '/api/permissions'
    const method = editingPermission.value ? 'PUT' : 'POST'
    
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: permissionName,
        description: values.description
      })
    })
    
    if (!response.ok) throw new Error('保存失败')
    
    showDialog.value = false
    fetchPermissions()
  } catch (error) {
    console.error('保存权限失败:', error)
  } finally {
    saving.value = false
  }
}

// 删除权限
async function deletePermission(permission: Permission) {
  const confirmed = await useConfirm({
    title: '确认删除',
    content: `确定要删除权限 "${permission.name}" 吗？此操作不可恢复。`,
    type: 'error',
    confirmButton: {
      text: '删除',
      variant: 'destructive'
    }
  })
  
  if (!confirmed) return
  
  try {
    const response = await fetch(`/api/permissions/${permission.id}`, {
      method: 'DELETE'
    })
    
    if (!response.ok) throw new Error('删除失败')
    
    fetchPermissions()
  } catch (error) {
    console.error('删除权限失败:', error)
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
  fetchPermissions()
})

// 初始化
onMounted(() => {
  fetchPermissions()
})
</script>
