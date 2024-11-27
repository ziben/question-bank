<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">用户管理</h1>
      <button @click="showCreateModal = true" 
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        添加用户
      </button>
    </div>

    <!-- 用户列表 -->
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">用户名</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">邮箱</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">角色</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">创建时间</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="user in users" :key="user.id">
            <td class="px-6 py-4 whitespace-nowrap">{{ user.username }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ user.email }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    :class="{
                      'bg-green-100 text-green-800': user.role === 'ADMIN',
                      'bg-blue-100 text-blue-800': user.role === 'EDITOR',
                      'bg-gray-100 text-gray-800': user.role === 'USER'
                    }">
                {{ user.role }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">{{ formatDate(user.createdAt) }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button @click="editUser(user)" 
                      class="text-indigo-600 hover:text-indigo-900 mr-3">
                编辑
              </button>
              <button @click="confirmDelete(user)" 
                      class="text-red-600 hover:text-red-900">
                删除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 创建/编辑用户模态框 -->
    <Dialog :open="showCreateModal" @update:open="(value) => showCreateModal = value">
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{{ isEditing ? '编辑用户' : '创建用户' }}</DialogTitle>
          <DialogDescription>
            填写以下信息{{ isEditing ? '修改' : '创建' }}用户。
          </DialogDescription>
        </DialogHeader>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <FormField name="username">
            <FormItem>
              <FormLabel>用户名</FormLabel>
              <FormControl>
                <Input v-model="form.username" type="text" required />
              </FormControl>
            </FormItem>
          </FormField>
          
          <FormField name="email">
            <FormItem>
              <FormLabel>邮箱</FormLabel>
              <FormControl>
                <Input v-model="form.email" type="email" required />
              </FormControl>
            </FormItem>
          </FormField>
          
          <FormField name="password">
            <FormItem>
              <FormLabel>密码</FormLabel>
              <FormControl>
                <Input v-model="form.password" type="password" :required="!isEditing" />
              </FormControl>
            </FormItem>
          </FormField>
          
          <FormField name="role">
            <FormItem>
              <FormLabel>角色</FormLabel>
              <Select v-model="form.role">
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="选择用户角色" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="USER">用户</SelectItem>
                  <SelectItem value="EDITOR">编辑</SelectItem>
                  <SelectItem value="ADMIN">管理员</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          </FormField>

          <DialogFooter>
            <Button type="button" variant="outline" @click="showCreateModal = false">
              取消
            </Button>
            <Button type="submit">
              {{ isEditing ? '保存' : '创建' }}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>

    <!-- 删除确认模态框 -->
    <Dialog :open="showDeleteModal" @update:open="showDeleteModal = false">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>确认删除</DialogTitle>
          <DialogDescription>
            确定要删除用户 "{{ selectedUser?.username }}" 吗？此操作无法撤销。
          </DialogDescription>
        </DialogHeader>
        <div class="flex justify-end space-x-3">
          <Button variant="outline" @click="showDeleteModal = false">
            取消
          </Button>
          <Button variant="destructive" @click="deleteUser">
            删除
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import dayjs from 'dayjs'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface User {
  id: number
  username: string
  email: string
  role: 'USER' | 'EDITOR' | 'ADMIN'
  createdAt: string
  updatedAt: string
}

interface UserForm {
  username: string
  email: string
  password: string
  role: User['role']
}

const users = ref<User[]>([])
const showCreateModal = ref(false)
const showDeleteModal = ref(false)
const isEditing = ref(false)
const selectedUser = ref<User | null>(null)

const form = reactive<UserForm>({
  username: '',
  email: '',
  password: '',
  role: 'USER'
})

// 获取用户列表
const fetchUsers = async (): Promise<void> => {
  try {
    const response = await $fetch<User[]>('/api/admin/users')
    users.value = response
  } catch (error) {
    console.error('Error fetching users:', error)
  }
}

// 创建或更新用户
const handleSubmit = async (): Promise<void> => {
  try {
    if (isEditing.value && selectedUser.value) {
      await $fetch(`/api/admin/users/${selectedUser.value.id}`, {
        method: 'PUT',
        body: form
      })
    } else {
      await $fetch('/api/admin/users', {
        method: 'POST',
        body: form
      })
    }
    await fetchUsers()
    showCreateModal.value = false
    resetForm()
  } catch (error) {
    console.error('Error saving user:', error)
  }
}

// 编辑用户
const editUser = (user: User): void => {
  selectedUser.value = user
  isEditing.value = true
  Object.assign(form, {
    username: user.username,
    email: user.email,
    role: user.role,
    password: ''
  })
  showCreateModal.value = true
}

// 确认删除
const confirmDelete = (user: User): void => {
  selectedUser.value = user
  showDeleteModal.value = true
}

// 删除用户
const deleteUser = async (): Promise<void> => {
  try {
    if (!selectedUser.value) return
    
    await $fetch(`/api/admin/users/${selectedUser.value.id}`, {
      method: 'DELETE'
    })
    await fetchUsers()
    showDeleteModal.value = false
    selectedUser.value = null
  } catch (error) {
    console.error('Error deleting user:', error)
  }
}

// 重置表单
const resetForm = (): void => {
  Object.assign(form, {
    username: '',
    email: '',
    password: '',
    role: 'USER' as const
  })
  isEditing.value = false
  selectedUser.value = null
}

// 格式化日期
const formatDate = (date: string): string => {
  return dayjs(date).format('YYYY-MM-DD HH:mm')
}

// 初始加载
onMounted(() => {
  fetchUsers()
})
</script>
