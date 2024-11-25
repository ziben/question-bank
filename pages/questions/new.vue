<script setup lang="ts">
const router = useRouter()

const formData = ref({
  title: '',
  type: '简答题',
  difficulty: '简单',
  category: '前端开发',
  content: '',
  answer: ''
})

const types = ['简答题', '选择题', '判断题', '论述题']
const difficulties = ['简单', '中等', '困难']
const categories = ['前端开发', '后端开发', '算法', '数据库']

const handleSubmit = () => {
  // TODO: 实现保存逻辑
  console.log('保存题目:', formData.value)
  router.push('/questions')
}
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-3xl font-bold tracking-tight">新建题目</h2>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid gap-4">
        <div class="space-y-2">
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="title">
            标题
          </label>
          <input
            id="title"
            v-model="formData.title"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="请输入题目标题"
            required
          />
        </div>

        <div class="grid gap-4 md:grid-cols-3">
          <div class="space-y-2">
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="type">
              类型
            </label>
            <select
              id="type"
              v-model="formData.type"
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
            </select>
          </div>

          <div class="space-y-2">
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="difficulty">
              难度
            </label>
            <select
              id="difficulty"
              v-model="formData.difficulty"
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option v-for="difficulty in difficulties" :key="difficulty" :value="difficulty">{{ difficulty }}</option>
            </select>
          </div>

          <div class="space-y-2">
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="category">
              分类
            </label>
            <select
              id="category"
              v-model="formData.category"
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
            </select>
          </div>
        </div>

        <div class="space-y-2">
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="content">
            题目内容
          </label>
          <textarea
            id="content"
            v-model="formData.content"
            class="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="请输入题目内容"
            required
          />
        </div>

        <div class="space-y-2">
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="answer">
            参考答案
          </label>
          <textarea
            id="answer"
            v-model="formData.answer"
            class="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="请输入参考答案"
            required
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
          to="/questions"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          取消
        </NuxtLink>
      </div>
    </form>
  </div>
</template>
