<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-semibold tracking-tight">权限管理</h1>
    </div>

    <Tabs v-model="activeTab" class="w-full">
      <TabsList class="grid w-full grid-cols-2">
        <TabsTrigger value="list">权限列表</TabsTrigger>
        <TabsTrigger value="preview">权限预览</TabsTrigger>
      </TabsList>
      <TabsContent value="list">
        <MyNewDataTable :data="filteredPermissions" :columns="columns" filter_column="groupName"
          @action="handleAction" />
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
import { ref, computed } from 'vue'
import { PlusIcon } from 'lucide-vue-next'
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import type { Permission } from '~/prisma/generated/zod'
import { toast } from '~/components/shadcn/toast/use-toast'
import { createColumnHelper } from '@tanstack/vue-table'
import { columns } from '~/components/my/permissions/columns'

const columnHelper = createColumnHelper<Permission>()

// 状态管理
const loading = ref(false)
const saving = ref(false)
const showDialog = ref(false)
const editing = ref<Permission | null>(null)
const permissions = ref<Permission[]>([])
const total = ref(0)
const activeTab = ref('list')
const searchQuery = ref('')

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

// 表单
const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    groupName: '',
    groupCode: '',
    actionName: '',
    actionCode: '',
    description: ''
  }
})

// 计算属性：过滤后的权限列表
const filteredPermissions = computed(() => {
  if (!searchQuery.value) return permissions.value

  const query = searchQuery.value.toLowerCase()
  return permissions.value.filter(p =>
    p.groupName.toLowerCase().includes(query) ||
    p.groupCode.toLowerCase().includes(query) ||
    p.actionName.toLowerCase().includes(query) ||
    p.actionCode.toLowerCase().includes(query) ||
    p.code.toLowerCase().includes(query) ||
    (p.description && p.description.toLowerCase().includes(query))
  )
})

// 计算属性：按分组组织的权限列表
const permissionGroups = computed(() => {
  const groups: Record<string, {
    name: string
    code: string
    permissions: Permission[]
  }> = {}

  for (const permission of permissions.value) {
    if (!groups[permission.groupCode]) {
      groups[permission.groupCode] = {
        name: permission.groupName,
        code: permission.groupCode,
        permissions: []
      }
    }
    groups[permission.groupCode].permissions.push(permission)
  }

  return Object.values(groups)
})

// 获取权限列表
const fetchPermissions = async () => {
  try {
    loading.value = true
    const response = await $fetch('/api/admin/permissions')
    permissions.value = response.items
    total.value = response.total
  } catch (error) {
    console.error('获取权限列表失败:', error)
    toast({ title: '获取权限列表失败' })
  } finally {
    loading.value = false
  }
}

// 处理表格操作
const handleAction = async (action: string, permission?: Permission) => {
  switch (action) {
    case 'edit':
      if (permission) {
        openPermissionDialog(permission)
      }
      break
    case 'toggle':
      if (permission) {
        await togglePermission(permission)
      }
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

// 提交表单
const onSubmit = async (e: Event) => {
  e.preventDefault()
  const valid = await form.validate()
  if (!valid) return
  const values = form.values
  try {
    saving.value = true
    const data = {
      ...values,
      code: `${values.groupCode}.${values.actionCode}`
    }

    if (editing.value) {
      await $fetch(`/api/admin/permissions/${editing.value.id}`, {
        method: 'PUT',
        body: data
      })
      toast({ title: '权限更新成功' })
    } else {
      await $fetch('/api/admin/permissions', {
        method: 'POST',
        body: data
      })
      toast({ title: '权限创建成功' })
    }

    showDialog.value = false
    await fetchPermissions()
  } catch (error) {
    console.error('保存权限失败:', error)
    toast({ title: '保存权限失败' })
  } finally {
    saving.value = false
  }
}

// 切换权限状态
const togglePermission = async (permission: Permission) => {
  const action = permission.isDeleted ? '启用' : '禁用'
  const confirmed = await useConfirm({
    title: `${action}权限`,
    content: `确定要${action}权限"${permission.actionName}"吗？`
  })

  if (!confirmed) return

  try {
    await $fetch(`/api/admin/permissions/${permission.id}/toggle`, {
      method: 'POST'
    })
    await fetchPermissions()
    toast({ title: `${action}权限成功` })
  } catch (error) {
    console.error(`${action}权限失败:`, error)
    toast({ title: `${action}权限失败` })
  }
}

// 初始化
onMounted(() => {
  fetchPermissions()
})
</script>
