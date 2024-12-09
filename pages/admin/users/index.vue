<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-semibold tracking-tight">用户管理</h1>
      <div class="flex items-center gap-4">
        <div class="relative w-64">
          <Input v-model="searchQuery" placeholder="搜索用户..." class="w-full">
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
      <DataTable :columns="columns" :data="users" :total="total" :loading="loading" :current-page="currentPage"
        :page-size="pageSize" @page-change="onPageChange" @page-size-change="onPageSizeChange">
        <template #roles="{ value }">
          <div class="flex flex-wrap gap-2">
            <Badge v-for="role in value" :key="role.id" variant="secondary">
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
                <TrashIcon class="h-4 w-4 mr-2" />
                角色设置
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem @click="handleDeleteUser(row)" class="text-destructive">
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
        <Form :initial-values="initialValues" @submit="onSubmit" class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <FormField
              name="username"
              :validate="validationRules.username.validate"
              v-slot="{ field, errors }"
            >
              <FormItem>
                <FormLabel>用户名</FormLabel>
                <FormControl>
                  <Input v-bind="field" :disabled="!!editingUser" />
                </FormControl>
                <FormMessage>{{ errors[0] }}</FormMessage>
              </FormItem>
            </FormField>

            <FormField
              name="email"
              :validate="validationRules.email.validate"
              v-slot="{ field, errors }"
            >
              <FormItem>
                <FormLabel>邮箱</FormLabel>
                <FormControl>
                  <Input type="email" v-bind="field" />
                </FormControl>
                <FormMessage>{{ errors[0] }}</FormMessage>
              </FormItem>
            </FormField>

            <FormField
              name="name"
              v-slot="{ field }"
            >
              <FormItem>
                <FormLabel>姓名</FormLabel>
                <FormControl>
                  <Input v-bind="field" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField
              name="password"
              :validate="validationRules.password"
              v-slot="{ field, errors }"
            >
              <FormItem>
                <FormLabel>密码</FormLabel>
                <FormControl>
                  <Input type="password" v-bind="field" :placeholder="editingUser ? '不修改请留空' : ''" />
                </FormControl>
                <FormMessage>{{ errors[0] }}</FormMessage>
              </FormItem>
            </FormField>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" @click="showUserDialog = false">
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
              <Badge v-for="role in selectedRoles" :key="role.id" variant="secondary"
                class="cursor-pointer hover:bg-destructive" @click="removeRole(role)">
                {{ role.name }}
                <XIcon class="h-3 w-3 ml-1" />
              </Badge>
            </div>
          </div>
          <div class="space-y-2">
            <Label>可选角色</Label>
            <div class="flex flex-wrap gap-2">
              <Badge v-for="role in availableRoles" :key="role.id" variant="outline"
                class="cursor-pointer hover:bg-primary hover:text-primary-foreground" @click="addRole(role)">
                {{ role.name }}
                <PlusIcon class="h-3 w-3 ml-1" />
              </Badge>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" @click="showRoleDialog = false">
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
import { ref, computed, onMounted } from 'vue'
import { SearchIcon, PlusIcon, MoreHorizontalIcon, PencilIcon, TrashIcon, XIcon } from 'lucide-vue-next'
import { useUsers, type UserWithRoles, type UserFormData } from '@/composables/useUsers'
import { useRoles } from '@/composables/useRoles'
import type { User, Role } from '@prisma/client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/shadcn/form'

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

// 用户管理
const {
  users,
  total,
  loading,
  currentPage,
  pageSize,
  searchQuery,
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
  updateUserRoles,
  onPageChange,
  onPageSizeChange
} = useUsers()

// 角色管理
const {
  roles,
  selectedRoles,
  availableRoles,
  fetchRoles,
  setSelectedRoles,
  addRole,
  removeRole
} = useRoles()

// 状态管理
const saving = ref(false)
const savingRoles = ref(false)
const showUserDialog = ref(false)
const showRoleDialog = ref(false)
const editingUser = ref<UserWithRoles | null>(null)

// 表单验证规则
const validationRules = {
  username: {
    required: true,
    min: 3,
    validate: (value: string) => value.length >= 3 || '用户名至少3个字符'
  },
  email: {
    required: true,
    email: true,
    validate: (value: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) || '请输入有效的邮箱地址'
  },
  password: computed(() => ({
    required: !editingUser.value,
    min: 6,
    validate: (value: string) => {
      if (!editingUser.value && !value) return '密码不能为空'
      if (value && value.length < 6) return '密码至少6个字符'
      return true
    }
  }))
}

// 打开用户对话框
const openUserDialog = (user: UserWithRoles | null = null) => {
  editingUser.value = user
  if (user) {
    initialValues.value = {
      username: user.username,
      email: user.email,
      name: user.name || '',
      password: ''
    }
  } else {
    initialValues.value = {
      username: '',
      email: '',
      name: '',
      password: ''
    }
  }
  showUserDialog.value = true
}

// 保存用户信息
const onSubmit = async (values: any) => {
  saving.value = true
  try {
    if (editingUser.value) {
      await updateUser(editingUser.value.id, values)
    } else {
      await createUser(values)
    }
    showUserDialog.value = false
    await fetchUsers()
  } catch (error) {
    console.error('保存用户失败:', error)
  } finally {
    saving.value = false
  }
}

const initialValues = ref({
  username: '',
  email: '',
  name: '',
  password: ''
})

// 打开角色设置对话框
const openRoleDialog = (user: UserWithRoles) => {
  editingUser.value = user
  setSelectedRoles(user.roles)
  showRoleDialog.value = true
}

// 保存角色设置
async function saveRoles() {
  if (!editingUser.value) return

  try {
    savingRoles.value = true
    await updateUserRoles(
      editingUser.value.id,
      selectedRoles.value.map(role => role.id)
    )
    showRoleDialog.value = false
    await fetchUsers()
  } catch (error) {
    console.error('保存角色失败:', error)
  } finally {
    savingRoles.value = false
  }
}

// 处理删除用户
async function handleDeleteUser(user: User) {
  try {
    const success = await deleteUser(user)
    if (success) {
      await fetchUsers()
    }
  } catch (error) {
    console.error('删除用户失败:', error)
  }
}

// 初始化
onMounted(async () => {
  await Promise.all([fetchUsers(), fetchRoles()])
})

// 监听分页和搜索变化
watch([currentPage, pageSize, searchQuery], () => {
  fetchUsers()
})
</script>
