<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-semibold tracking-tight">用户管理</h1>
      <div class="flex items-center gap-4">
        <div class="relative w-64">
          <Input
            v-model="searchQuery"
            placeholder="搜索用户..."
            class="w-full"
          >
            <template #prefix>
              <SearchIcon class="h-4 w-4 text-muted-foreground" />
            </template>
          </Input>
        </div>
        <Button @click="openUserDialog()">
          <PlusIcon class="h-4 w-4 mr-2" />
          新建用户
        </Button>
      </div>
    </div>

    <Card>
      <DataTable
        :columns="columns"
        :data="users"
        :total="total"
        :loading="loading"
        :current-page="currentPage"
        :page-size="pageSize"
        @page-change="onPageChange"
        @page-size-change="onPageSizeChange"
      >
        <template #roles="{ value }">
          <div class="flex flex-wrap gap-2">
            <Badge
              v-for="role in value"
              :key="role.id"
              variant="secondary"
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
              <DropdownMenuItem @click="openUserDialog(row)">
                <PencilIcon class="h-4 w-4 mr-2" />
                编辑
              </DropdownMenuItem>
              <DropdownMenuItem @click="openRoleDialog(row)">
                <UserGroupIcon class="h-4 w-4 mr-2" />
                角色设置
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem @click="deleteUser(row)" class="text-destructive">
                <TrashIcon class="h-4 w-4 mr-2" />
                删除
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </template>
      </DataTable>
    </Card>

    <!-- 用户表单对话框 -->
    <Dialog :open="showUserDialog" @update:open="showUserDialog = $event">
      <DialogContent class="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{{ editingUser ? '编辑用户' : '新建用户' }}</DialogTitle>
        </DialogHeader>
        <Form
          :validation-schema="userSchema"
          @submit="saveUser"
          v-slot="{ errors }"
          class="space-y-4"
        >
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-2">
              <Label for="username">用户名</Label>
              <Field
                name="username"
                v-slot="{ field }"
                :rules="{ required: true, min: 3 }"
              >
                <Input
                  id="username"
                  v-bind="field"
                  :disabled="!!editingUser"
                  :class="{ 'border-destructive': errors.username }"
                />
              </Field>
              <ErrorMessage name="username" class="text-sm text-destructive" />
            </div>
            <div class="space-y-2">
              <Label for="email">邮箱</Label>
              <Field
                name="email"
                v-slot="{ field }"
                :rules="{ required: true, email: true }"
              >
                <Input
                  id="email"
                  type="email"
                  v-bind="field"
                  :class="{ 'border-destructive': errors.email }"
                />
              </Field>
              <ErrorMessage name="email" class="text-sm text-destructive" />
            </div>
            <div class="space-y-2">
              <Label for="name">姓名</Label>
              <Field name="name" v-slot="{ field }">
                <Input id="name" v-bind="field" />
              </Field>
            </div>
            <div class="space-y-2">
              <Label for="password">密码</Label>
              <Field
                name="password"
                v-slot="{ field }"
                :rules="{ required: !editingUser, min: 6 }"
              >
                <Input
                  id="password"
                  type="password"
                  v-bind="field"
                  :placeholder="editingUser ? '不修改请留空' : ''"
                  :class="{ 'border-destructive': errors.password }"
                />
              </Field>
              <ErrorMessage name="password" class="text-sm text-destructive" />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              @click="showUserDialog = false"
            >
              取消
            </Button>
            <Button type="submit" :loading="saving">
              {{ editingUser ? '保存' : '创建' }}
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>

    <!-- 角色设置对话框 -->
    <Dialog :open="showRoleDialog" @update:open="showRoleDialog = $event">
      <DialogContent class="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>角色设置 - {{ editingUser?.username }}</DialogTitle>
        </DialogHeader>
        <div class="space-y-4">
          <div class="space-y-2">
            <Label>已分配角色</Label>
            <div class="flex flex-wrap gap-2">
              <Badge
                v-for="role in selectedRoles"
                :key="role.id"
                variant="secondary"
                class="cursor-pointer hover:bg-destructive"
                @click="removeRole(role)"
              >
                {{ role.name }}
                <XIcon class="h-3 w-3 ml-1" />
              </Badge>
            </div>
          </div>
          <div class="space-y-2">
            <Label>可选角色</Label>
            <div class="flex flex-wrap gap-2">
              <Badge
                v-for="role in availableRoles"
                :key="role.id"
                variant="outline"
                class="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                @click="addRole(role)"
              >
                {{ role.name }}
                <PlusIcon class="h-3 w-3 ml-1" />
              </Badge>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              @click="showRoleDialog = false"
            >
              取消
            </Button>
            <Button @click="saveRoles" :loading="savingRoles">
              保存
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useForm } from 'vee-validate'
import { SearchIcon, PlusIcon, MoreHorizontalIcon, PencilIcon, UserGroupIcon, TrashIcon, XIcon } from 'lucide-vue-next'
import { useConfirm } from '@/composables/useConfirm'
import type { User, Role } from '@prisma/client'

interface UserWithRoles extends User {
  roles: Role[]
}

// 表格列定义
const columns = [
  {
    key: 'username',
    title: '用户名'
  },
  {
    key: 'email',
    title: '邮箱'
  },
  {
    key: 'name',
    title: '姓名'
  },
  {
    key: 'roles',
    title: '角色'
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
const savingRoles = ref(false)
const showUserDialog = ref(false)
const showRoleDialog = ref(false)
const editingUser = ref<UserWithRoles | null>(null)
const users = ref<UserWithRoles[]>([])
const roles = ref<Role[]>([])
const selectedRoles = ref<Role[]>([])
const total = ref(0)
const currentPage = ref(1)
const pageSize = ref(10)
const searchQuery = ref('')

const confirm = useConfirm()

// 用户表单验证规则
const userSchema = {
  username: 'required|min:3',
  email: 'required|email',
  password: computed(() => editingUser.value ? 'min:6' : 'required|min:6'),
  name: 'string'
}

// 获取用户列表
async function fetchUsers() {
  try {
    loading.value = true
    const response = await fetch(`/api/users?page=${currentPage.value}&pageSize=${pageSize.value}&search=${searchQuery.value}`)
    const data = await response.json()
    users.value = data.items
    total.value = data.total
  } catch (error) {
    console.error('获取用户列表失败:', error)
  } finally {
    loading.value = false
  }
}

// 获取角色列表
async function fetchRoles() {
  try {
    const response = await fetch('/api/roles')
    const data = await response.json()
    roles.value = data
  } catch (error) {
    console.error('获取角色列表失败:', error)
  }
}

// 打开用户对话框
function openUserDialog(user: UserWithRoles | null = null) {
  editingUser.value = user
  if (user) {
    form.resetForm({
      values: {
        username: user.username,
        email: user.email,
        name: user.name || '',
        password: ''
      }
    })
  } else {
    form.resetForm()
  }
  showUserDialog.value = true
}

// 打开角色设置对话框
function openRoleDialog(user: UserWithRoles) {
  editingUser.value = user
  selectedRoles.value = [...user.roles]
  showRoleDialog.value = true
}

// 计算可选角色列表
const availableRoles = computed(() => {
  return roles.value.filter(role => 
    !selectedRoles.value.some(selected => selected.id === role.id)
  )
})

// 添加角色
function addRole(role: Role) {
  selectedRoles.value.push(role)
}

// 移除角色
function removeRole(role: Role) {
  selectedRoles.value = selectedRoles.value.filter(r => r.id !== role.id)
}

// 保存用户信息
const { handleSubmit } = useForm({
  validationSchema: userSchema
})

const saveUser = handleSubmit(async (values) => {
  try {
    saving.value = true
    const url = editingUser.value
      ? `/api/users/${editingUser.value.id}`
      : '/api/users'
    const method = editingUser.value ? 'PUT' : 'POST'
    
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    
    if (!response.ok) throw new Error('保存失败')
    
    showUserDialog.value = false
    fetchUsers()
  } catch (error) {
    console.error('保存用户失败:', error)
  } finally {
    saving.value = false
  }
})

// 保存角色设置
async function saveRoles() {
  if (!editingUser.value) return
  
  try {
    savingRoles.value = true
    const response = await fetch(`/api/users/${editingUser.value.id}/roles`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        roleIds: selectedRoles.value.map(role => role.id)
      })
    })
    
    if (!response.ok) throw new Error('保存失败')
    
    showRoleDialog.value = false
    fetchUsers()
  } catch (error) {
    console.error('保存角色失败:', error)
  } finally {
    savingRoles.value = false
  }
}

// 删除用户
async function deleteUser(user: User) {
  const confirmed = await confirm({
    title: '确认删除',
    content: `确定要删除用户 "${user.username}" 吗？此操作不可恢复。`,
    type: 'error',
    confirmButton: {
      text: '删除',
      variant: 'destructive'
    }
  })
  
  if (!confirmed) return
  
  try {
    const response = await fetch(`/api/users/${user.id}`, {
      method: 'DELETE'
    })
    
    if (!response.ok) throw new Error('删除失败')
    
    fetchUsers()
  } catch (error) {
    console.error('删除用户失败:', error)
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
  fetchUsers()
})

// 初始化
onMounted(() => {
  fetchUsers()
  fetchRoles()
})
</script>
