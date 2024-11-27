<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem class="hidden md:block">
        <NuxtLink to="/" class="text-sm font-medium text-muted-foreground hover:text-foreground">
          首页
        </NuxtLink>
      </BreadcrumbItem>
      <template v-for="(item, index) in breadcrumbItems" :key="index">
        <BreadcrumbSeparator class="hidden md:block" />
        <BreadcrumbItem>
          <NuxtLink :to="item.path" class="text-sm font-medium text-muted-foreground hover:text-foreground"
            :class="{ 'text-foreground': index === breadcrumbItems.length - 1 }">
            {{ item.name }}
          </NuxtLink>
        </BreadcrumbItem>
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
  name: string
  path: string
}

const route = useRoute()

const breadcrumbItems = computed<BreadcrumbItem[]>(() => {
  const items: BreadcrumbItem[] = []
  const pathSegments = route.path.split('/').filter(Boolean)

  let currentPath = ''
  for (const segment of pathSegments) {
    currentPath += `/${segment}`

    // Add breadcrumb item based on route segment
    switch (segment) {
      case 'questions':
        items.push({ name: '题库管理', path: currentPath })
        break
      case 'categories':
        items.push({ name: '分类管理', path: currentPath })
        break
      case 'statistics':
        items.push({ name: '统计分析', path: currentPath })
        break
      case 'admin':
        items.push({ name: '管理', path: currentPath })
        break
      case 'users':
        items.push({ name: '用户管理', path: currentPath })
        break
      default:
        // For dynamic segments (e.g., question ID), you might want to fetch the actual name
        if (segment.match(/^\d+$/)) {
          items.push({ name: `#${segment}`, path: currentPath })
        }
    }
  }

  return items
})
</script>
