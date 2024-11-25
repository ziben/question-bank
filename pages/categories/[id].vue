<script setup lang="ts">
const route = useRoute()
const router = useRouter()

interface Category {
  id: number
  name: string
  description: string | null
  _count?: {
    questions: number
  }
}

const { data: category } = await useFetch<Category>(`/api/categories/${route.params.id}`)

const formData = ref({
  name: category.value?.name || '',
  description: category.value?.description || ''
})

const handleSubmit = async () => {
  try {
    await $fetch(`/api/categories/${route.params.id}`, {
      method: 'PUT',
      body: formData.value
    })
    router.push('/categories')
  } catch (error) {
    console.error('保存失败:', error)
  }
}
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-3xl font-bold tracking-tight">编辑分类</h2>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid gap-4">
        <div class="space-y-2">
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="name">
            名称
          </label>
          <input
            id="name"
            v-model="formData.name"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="请输入分类名称"
            required
          />
        </div>

        <div class="space-y-2">
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="description">
            描述
          </label>
          <textarea
            id="description"
            v-model="formData.description"
            class="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="请输入分类描述（可选）"
          />
        </div>
      </div>

      <div class="flex gap-4">
        <button
          type="submit"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          保存
        </button>
        <NuxtLink
          to="/categories"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          取消
        </NuxtLink>
      </div>
    </form>
  </div>
</template>
