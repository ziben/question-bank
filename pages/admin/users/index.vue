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
    <Modal v-model:show="showCreateModal" :title="isEditing ? '编辑用户' : '创建用户'">
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">用户名</label>
          <input v-model="form.username" type="text" required
                 class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">邮箱</label>
          <input v-model="form.email" type="email" required
                 class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">密码</label>
          <input v-model="form.password" type="password" :required="!isEditing"
                 class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">角色</label>
          <select v-model="form.role"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            <option value="USER">用户</option>
            <option value="EDITOR">编辑</option>
            <option value="ADMIN">管理员</option>
          </select>
        </div>
        <div class="flex justify-end space-x-3">
          <button type="button" @click="showCreateModal = false"
                  class="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50">
            取消
          </button>
          <button type="submit"
                  class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            {{ isEditing ? '保存' : '创建' }}
          </button>
        </div>
      </form>
    </Modal>

    <!-- 删除确认模态框 -->
    <Modal v-model:show="showDeleteModal" title="确认删除">
      <div class="space-y-4">
        <p>确定要删除用户 "{{ selectedUser?.username }}" 吗？此操作无法撤销。</p>
        <div class="flex justify-end space-x-3">
          <button @click="showDeleteModal = false"
                  class="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50">
            取消
          </button>
          <button @click="deleteUser"
                  class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            删除
          </button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import dayjs from 'dayjs'
import Modal from '~/components/ui/Modal.vue'

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
