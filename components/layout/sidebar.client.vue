<template>
  <Sidebar collapsible="icon">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" class="group py-4">
            <div
              class="flex aspect-square size-10 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
              <Icon name="heroicons:academic-cap" class="size-8 text-primary" />
            </div>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="font-semibold tracking-wide">题库系统</span>
              <span class="text-xs text-muted-foreground">Question Bank</span>
            </div>
            <div>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground w-9 h-9"
                aria-label="Toggle dark mode" @click="handleToggleTheme()"><svg viewBox="0 0 15 15" width="1.2em"
                  height="1.2em" class="w-5 h-5 text-foreground">
                  <path fill="currentColor" fill-rule="evenodd"
                    d="M2.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm3 3a.4.4 0 1 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm-4 3a.4.4 0 1 0-.8 0v.6H.5a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zM8.544.982l-.298-.04c-.213-.024-.34.224-.217.4q.211.305.389.632A6.602 6.602 0 0 1 2.96 11.69c-.215.012-.334.264-.184.417q.103.105.21.206l.072.066l.26.226l.188.148l.121.09l.187.131l.176.115q.18.115.37.217l.264.135l.26.12l.303.122l.244.086a6.6 6.6 0 0 0 1.103.26l.317.04l.267.02q.19.011.384.011a6.6 6.6 0 0 0 6.56-7.339l-.038-.277a6.6 6.6 0 0 0-.384-1.415l-.113-.268l-.077-.166l-.074-.148a6.6 6.6 0 0 0-.546-.883l-.153-.2l-.199-.24l-.163-.18l-.12-.124l-.16-.158l-.223-.2l-.32-.26l-.245-.177l-.292-.19l-.321-.186l-.328-.165l-.113-.052l-.24-.101l-.276-.104l-.252-.082l-.325-.09l-.265-.06zm1.86 4.318a7.6 7.6 0 0 0-.572-2.894a5.601 5.601 0 1 1-4.748 10.146a7.6 7.6 0 0 0 3.66-2.51a.749.749 0 0 0 1.355-.442a.75.75 0 0 0-.584-.732q.093-.174.178-.355A1.25 1.25 0 1 0 10.35 6.2q.052-.442.052-.9"
                    clip-rule="evenodd"></path>
                </svg></button>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup v-for="group in allNavigationItems" :key="group.name">
        <SidebarGroupLabel>{{ group.name }}</SidebarGroupLabel>
        <SidebarMenu>
          <template v-for="item in group.items" :key="item.path">
            <!-- 带子菜单的项目 -->
            <template v-if="item.children">
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger as-child>
                    <SidebarMenuButton :tooltip="item.name">
                      <Icon :name="item.icon" class="size-4" mode="svg" />
                      <span>{{ item.name }}</span>
                      <Icon name="lucide:chevrons-up-down" class="ml-auto size-4" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent class="w-[--radix-dropdown-menu-trigger-width] min-w-48">
                    <DropdownMenuGroup>
                      <DropdownMenuItem v-for="child in item.children" :key="child.path">
                        <NuxtLink :to="child.path" class="flex items-center w-full">
                          <Icon :name="child.icon" class="mr-2 size-4" mode="svg" />
                          <span>{{ child.name }}</span>
                        </NuxtLink>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </template>
            <!-- 普通菜单项 -->
            <template v-else>
              <SidebarMenuItem>
                <SidebarMenuButton as-child :tooltip="item.name">
                  <NuxtLink :to="item.path" :class="{ 'bg-accent': route.path === item.path }">
                    <!-- <component :is="item.icon" class="size-4" /> -->
                    <Icon :name="item.icon" class="size-4" mode="svg" />
                    <span>{{ item.name }}</span>
                  </NuxtLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </template>
          </template>
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
                <Icon name="lucide:chevrons-up-down" class="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg" side="bottom"
              align="end" :side-offset="4">
              <DropdownMenuLabel class="p-0 font-normal">
                我的账户
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Icon name="lucide:user" class="mr-2 h-4 w-4" />
                  <span>个人信息</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon name="lucide:settings" class="mr-2 h-4 w-4" />
                  <span>设置</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem @click="authLogout()" class="text-red-500 focus:text-red-500">
                <Icon name="lucide:log-out" class="mr-2 h-4 w-4" />
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
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu } from '@/components/shadcn/sidebar';
import { BookOpen, ChevronsUpDown, CreditCard, FileText, Frame, History, LogOut, Map, Settings, User, Users, BarChart2, Tags } from 'lucide-vue-next';
import { useAppStore } from '@/stores/app'

// 主题设置
const { toggleTheme } = useAppStore()
const authStore = useAuthStore()
const route = useRoute()

interface NavigationGroup {
  name: string
  items: NavigationItem[]
}

interface NavigationItem {
  name: string
  path: string
  icon: string
  children?: NavigationItem[]
}

const navigationItems: NavigationItem[] = [
  {
    name: '题库管理',
    path: '/questions',
    icon: 'lucide:shield-question'
  },
  {
    name: '科目管理',
    path: '/admin/subjects',
    icon: 'lucide:shrub'
  },
  {
    name: '年级管理',
    path: '/admin/grades',
    icon: 'lucide:align-vertical-distribute-center'
  },
  {
    name: '来源管理',
    path: '/admin/sources',
    icon: 'lucide:soup'
  },
  {
    name: '来源管理(new)',
    path: '/admin/sources/new',
    icon: 'lucide:soup'
  },
  {
    name: '分类管理',
    path: '/categories',
    icon: 'lucide:group'
  },
  {
    name: '统计分析',
    path: '/statistics',
    icon: 'lucide:layout-dashboard'
  }
]

const adminItems: NavigationItem[] = [
  {
    name: '用户管理',
    path: '/admin/users',
    icon: 'lucide:users'
  },
  {
    name: '角色管理',
    path: '/admin/roles',
    icon: 'lucide:group'
  },
  {
    name: '权限管理',
    path: '/admin/permissions',
    icon: 'lucide:activity'
  },
  {
    name: '标签管理',
    path: '/admin/tags',
    icon: 'lucide:activity'
  },
  {
    name: '日志管理',
    path: '/admin/logs',
    icon: 'lucide:logs',
    children: [
      {
        name: '操作日志',
        path: '/admin/logs',
        icon: 'lucide:logs'
      },
      {
        name: '统计分析',
        path: '/admin/logs/statistics',
        icon: 'lucide:logs'
      },
      {
        name: '审计日志',
        path: '/admin/logs/audit',
        icon: 'lucide:logs'
      }
    ]
  }
]

const allNavigationItems = computed(() => {
  if (authStore.isAdmin) {
    return [{ name: '普通菜单', items: navigationItems }, { name: '管理菜单', items: adminItems }]
  }
  return [{ name: '普通菜单', items: navigationItems }]
})

const handleToggleTheme = () => {
  toggleTheme()
}

</script>
