<script setup lang="ts">
import { columns } from '@/components/my/sources/columns'
import DataTable from '@/components/my/new-data-table/DataTable.vue'
import tasks from './tasks.json'
import DataTableToolbar from '~/components/my/sources/DataTableToolbar.vue';
</script>

<template>
  <div class="hidden h-full flex-1 flex-col space-y-8 p-1 md:flex">
    <div class="flex items-center justify-between space-y-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          来源管理
        </h2>
        <p class="text-muted-foreground">
          Here&apos;s a list of your tasks for this month!
        </p>
      </div>
    </div>
    <DataTable :data="tasks" :columns="columns"/>
  </div>
</template>
