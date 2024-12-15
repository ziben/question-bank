<template>
  <SidebarProvider>
    <!-- Sidebar -->
    <LayoutSidebar />
    <SidebarInset>
      <header
        class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
          <Separator orientation="vertical" class="mr-2 h-4" />
          <Breadcrumb />
        </div>
      </header>
      <!-- Page Content -->
      <div class="flex flex-1 flex-col gap-4 p-0 pt-0">
        <div class="container py-6">
          <slot />
        </div>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>

<script setup lang="ts">
// import Sidebar from '@/components/layout/sidebar.vue'
import Breadcrumb from '@/components/layout/breadcrumb.vue'

import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()

// 初始化认证状态
await authStore.init()
</script>

<style scoped>
.container {
  max-width: 1280px;
}
</style>
