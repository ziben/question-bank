<template>
  <Sidebar collapsible="icon">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" class="group py-4">
            <div class="flex aspect-square size-10 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
              <Icon name="heroicons:academic-cap" class="size-6 text-primary" />
            </div>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="font-semibold tracking-wide">题库系统</span>
              <span class="text-xs text-muted-foreground">Question Bank</span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>导航菜单</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem v-for="item in allNavigationItems" :key="item.path">
            <SidebarMenuButton as-child :tooltip="item.name">
              <NuxtLink :to="item.path" :class="{ 'bg-accent': route.path === item.path }">
                <component :is="item.icon" />
                <span>{{ item.name }}</span>
              </NuxtLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenu v-if="authStore.isAuthenticated">
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <SidebarMenuButton size="lg"
                class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                <Avatar class="h-8 w-8 rounded-lg">
                  <!-- <AvatarImage :src="data.user.avatar" :alt="data.user.name" /> -->
                  <AvatarFallback class="rounded-lg">
                    {{ authStore.user?.username.charAt(0).toUpperCase() }}
                  </AvatarFallback>
                </Avatar>
                <div class="grid flex-1 text-left text-sm leading-tight">
                  <span class="font-medium">{{ authStore.user?.username }}</span>
                  <span class="text-xs text-muted-foreground">{{ authStore.user?.email }}</span>
                </div>
                <ChevronsUpDown class="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg" side="bottom"
              align="end" :side-offset="4">
              <DropdownMenuLabel class="p-0 font-normal">
                我的账户</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User class="mr-2 h-4 w-4" />
                  <span>个人信息</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings class="mr-2 h-4 w-4" />
                  <span>设置</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem @click="handleLogout" class="text-red-500 focus:text-red-500">
                <LogOut class="mr-2 h-4 w-4" />
                <span>退出登录</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>

<script setup lang="ts">
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarMenu, SidebarProvider } from '@/components/ui/sidebar'
import { User, Settings, LogOut, ChevronsUpDown, Frame, BookOpen, CreditCard, Map, Users } from 'lucide-vue-next'

const authStore = useAuthStore()
const route = useRoute()

interface NavigationItem {
  name: string
  path: string
  icon: any
}

const navigationItems: NavigationItem[] = [
  {
    name: '题库管理',
    path: '/questions',
    icon: Frame
  },
  {
    name: '科目管理',
    path: '/admin/subjects',
    icon: BookOpen
  },
  {
    name: '年级管理',
    path: '/admin/grades',
    icon: Users
  },
  {
    name: '来源管理',
    path: '/admin/sources',
    icon: Map
  },
  {
    name: '分类管理',
    path: '/categories',
    icon: CreditCard
  },
  {
    name: '考试管理',
    path: '/exams',
    icon: BookOpen
  },
  {
    name: '统计分析',
    path: '/statistics',
    icon: Map
  }
]

const adminItems: NavigationItem[] = [
  {
    name: '用户管理',
    path: '/admin/users',
    icon: Users
  }
]

const allNavigationItems = computed(() => {
  if (authStore.isAdmin) {
    return [...navigationItems, ...adminItems]
  }
  return navigationItems
})

const handleLogout = async () => {
  try {
    await authStore.logout()
    navigateTo('/login')
  } catch (error) {
    console.error('Logout failed:', error)
  }
}
</script>
