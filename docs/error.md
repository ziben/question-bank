[vue-tsc] Property 'map' does not exist on type '{}'.
/labs/question-bank/components/logs/LogFilter.vue:131:46
    129 |   try {
    130 |     const response = await useFetch('/api/admin/users')
  > 131 |     userOptions.value = response.data.value?.map((user: any) => ({
        |                                              ^^^
    132 |       value: user.id.toString(),
    133 |       label: user.username
    134 |     })) || []
[vue-tsc] Cannot find module 'chart.js' or its corresponding type declarations.
/labs/question-bank/components/logs/LogStats.vue:100:8
     98 |   Tooltip,
     99 |   Legend
  > 100 | } from 'chart.js'
        |        ^^^^^^^^^^
    101 | import { Line as LineChart, Bar as BarChart, Doughnut as DoughnutChart } from 'vue-chartjs'
    102 | import { LOG_MODULES, LOG_ACTIONS, LOG_LEVELS } from '~/server/config/logger'
    103 |
[vue-tsc] Cannot find module 'vue-chartjs' or its corresponding type declarations.
/labs/question-bank/components/logs/LogStats.vue:101:79
     99 |   Legend
    100 | } from 'chart.js'
  > 101 | import { Line as LineChart, Bar as BarChart, Doughnut as DoughnutChart } from 'vue-chartjs'
        |                                                                               ^^^^^^^^^^^^^
    102 | import { LOG_MODULES, LOG_ACTIONS, LOG_LEVELS } from '~/server/config/logger'
    103 |
    104 | // 注册 Chart.js 组件
[vue-tsc] Type 'number' is not assignable to type 'string'.
/labs/question-bank/components/my/data-table/DataTable.vue:49:13
    47 |           <p class="text-sm font-medium">每页显示</p>
    48 |           <Select
  > 49 |             v-model="localPageSize"
       |             ^^^^^^^
    50 |             class="h-8 w-[70px]"
    51 |           >
    52 |             <SelectTrigger>
[vue-tsc] Type 'number' is not assignable to type 'string'.
/labs/question-bank/components/my/data-table/DataTable.vue:53:29
    51 |           >
    52 |             <SelectTrigger>
  > 53 |               <SelectValue :placeholder="localPageSize" />
       |                             ^^^^^^^^^^^
    54 |             </SelectTrigger>
    55 |             <SelectContent>
    56 |               <SelectItem v-for="size in pageSizes" :key="size" :value="size">
[vue-tsc] Type 'number' is not assignable to type 'string'.
/labs/question-bank/components/my/data-table/DataTable.vue:56:66
    54 |             </SelectTrigger>
    55 |             <SelectContent>
  > 56 |               <SelectItem v-for="size in pageSizes" :key="size" :value="size">
       |                                                                  ^^^^^
    57 |                 {{ size }}
    58 |               </SelectItem>
    59 |             </SelectContent>
[vue-tsc] '"@heroicons/vue/24/outline"' has no exported member named 'SearchIcon'. Did you mean 'StarIcon'?
/labs/question-bank/components/my/data-table/DataTable.vue:90:10
    88 | <script setup lang="ts">
    89 | import { ref, computed, watch } from 'vue'
  > 90 | import { SearchIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
       |          ^^^^^^^^^^
    91 | import { Input } from '@/components/shadcn/input'
    92 | import { Button } from '@/components/shadcn/button'
    93 | import {
[vue-tsc] 'question' is of type 'unknown'.
/labs/question-bank/components/QuestionForm.vue:86:14
    84 |     const question = await $fetch(`/api/questions/${props.questionId}`)
    85 |     form.value = {
  > 86 |       title: question.title,
       |              ^^^^^^^^
    87 |       content: question.content,
    88 |       answer: question.answer,
    89 |       analysis: question.analysis || ''
[vue-tsc] 'question' is of type 'unknown'.
/labs/question-bank/components/QuestionForm.vue:87:16
    85 |     form.value = {
    86 |       title: question.title,
  > 87 |       content: question.content,
       |                ^^^^^^^^
    88 |       answer: question.answer,
    89 |       analysis: question.analysis || ''
    90 |     }
[vue-tsc] 'question' is of type 'unknown'.
/labs/question-bank/components/QuestionForm.vue:88:15
    86 |       title: question.title,
    87 |       content: question.content,
  > 88 |       answer: question.answer,
       |               ^^^^^^^^
    89 |       analysis: question.analysis || ''
    90 |     }
    91 |
[vue-tsc] 'question' is of type 'unknown'.
/labs/question-bank/components/QuestionForm.vue:89:17
    87 |       content: question.content,
    88 |       answer: question.answer,
  > 89 |       analysis: question.analysis || ''
       |                 ^^^^^^^^
    90 |     }
    91 |
    92 |     // 转换标签数据为选择器格式
[vue-tsc] 'question' is of type 'unknown'.
/labs/question-bank/components/QuestionForm.vue:94:5
    92 |     // 转换标签数据为选择器格式
    93 |     const tagsByCategory: Record<number, number | number[]> = {}
  > 94 |     question.tags.forEach((tag: any) => {
       |     ^^^^^^^^
    95 |       const categoryId = tag.category.id
    96 |       if (tag.category.allowMultiple) {
    97 |         if (!tagsByCategory[categoryId]) {
[vue-tsc] Type 'number | number[]' is not assignable to type 'string | undefined'. Type 'number' is not assignable to type 'string'.
/labs/question-bank/components/TagSelector.vue:8:21
     6 |       <!-- 单选标签 -->
     7 |       <div v-if="!category.allowMultiple" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
  >  8 |         <RadioGroup v-model="selectedTags[category.id]">
       |                     ^^^^^^^
     9 |           <div v-for="tag in category.tags" :key="tag.id">
    10 |             <RadioGroupItem :value="tag.id" class="peer sr-only" />
    11 |             <Label
[vue-tsc] Type 'number' is not assignable to type 'string'.
/labs/question-bank/components/TagSelector.vue:10:30
     8 |         <RadioGroup v-model="selectedTags[category.id]">
     9 |           <div v-for="tag in category.tags" :key="tag.id">
  > 10 |             <RadioGroupItem :value="tag.id" class="peer sr-only" />
       |                              ^^^^^
    11 |             <Label
    12 |               :for="tag.id.toString()"
    13 |               class="flex items-center justify-between rounded-lg border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
[vue-tsc] Type 'number' is not assignable to type 'string'.
/labs/question-bank/components/TagSelector.vue:32:14
    30 |             :id="tag.id.toString()"
    31 |             v-model="selectedTags[category.id]"
  > 32 |             :value="tag.id"
       |              ^^^^^
    33 |             class="peer sr-only"
    34 |           />
    35 |           <Label
[vue-tsc] Property 'categories' does not exist on type 'unknown'.
/labs/question-bank/components/TagSelector.vue:98:13
     96 | async function loadCategories() {
     97 |   try {
  >  98 |     const { categories: data } = await $fetch('/api/tags')
        |             ^^^^^^^^^^
     99 |     categories.value = data
    100 |
    101 |     // 初始化选中状态
[vue-tsc] Type 'never[] | null' is not assignable to type 'number | number[]'. Type 'null' is not assignable to type 'number | number[]'.
/labs/question-bank/components/TagSelector.vue:104:9
    102 |     categories.value.forEach(category => {
    103 |       if (!selectedTags.value[category.id]) {
  > 104 |         selectedTags.value[category.id] = category.allowMultiple ? [] : null
        |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    105 |       }
    106 |     })
    107 |   } catch (error) {
[vue-tsc] Type '{ variant: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | undefined; text?: string | undefined; onClick?: () => void | Promise<void>; }' is not assignable to type 'ConfirmButton | { text: string; variant?: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | undefined; onClick?: (() => void | Promise<void>) | undefined; } | undefined'. Type '{ variant: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | undefined; text?: string | undefined; onClick?: () => void | Promise<void>; }' is not assignable to type '{ text: string; variant?: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | undefined; onClick?: (() => void | Promise<void>) | undefined; }'. Types of property 'text' are incompatible. Type 'string | undefined' is not assignable to type 'string'. Type 'undefined' is not assignable to type 'string'.
/labs/question-bank/composables/useConfirm.ts:51:7
    49 |       ...defaultOptions,
    50 |       ...opt,
  > 51 |       confirmButton: {
       |       ^^^^^^^^^^^^^
    52 |         ...defaultOptions.confirmButton,
    53 |         ...opt?.confirmButton,
    54 |         variant: opt?.type === 'error' ? 'destructive' : (opt?.confirmButton?.variant || defaultOptions.confirmButton?.variant)
[vue-tsc] Type '{ text?: string | undefined; variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"; onClick?: () => void | Promise<void>; }' is not assignable to type 'ConfirmButton | { text: string; variant?: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | undefined; onClick?: (() => void | Promise<void>) | undefined; } | undefined'. Type '{ text?: string | undefined; variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"; onClick?: () => void | Promise<void>; }' is not assignable to type '{ text: string; variant?: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | undefined; onClick?: (() => void | Promise<void>) | undefined; }'. Types of property 'text' are incompatible. Type 'string | undefined' is not assignable to type 'string'. Type 'undefined' is not assignable to type 'string'.
/labs/question-bank/composables/useConfirm.ts:56:7
    54 |         variant: opt?.type === 'error' ? 'destructive' : (opt?.confirmButton?.variant || defaultOptions.confirmButton?.variant)
    55 |       },
  > 56 |       cancelButton: {
       |       ^^^^^^^^^^^^
    57 |         ...defaultOptions.cancelButton,
    58 |         ...opt?.cancelButton
    59 |       }
[vue-tsc] Module '"~/types/log"' has no exported member 'LogType'.
/labs/question-bank/composables/useLogger.ts:1:15
  > 1 | import type { LogType, LogLevel } from '~/types/log'
      |               ^^^^^^^
    2 |
    3 | export function useLogger() {
    4 |   const createLog = async (type: LogType, action: string, details: string = '', level: LogLevel = 'info') => {
[vue-tsc] Type '"info"' is not assignable to type '"DEBUG" | "INFO" | "WARN" | "ERROR" | "SECURITY" | "IMPORTANT"'. Did you mean '"INFO"'?
/labs/question-bank/composables/useLogger.ts:4:81
    2 |
    3 | export function useLogger() {
  > 4 |   const createLog = async (type: LogType, action: string, details: string = '', level: LogLevel = 'info') => {
      |                                                                                 ^^^^^^^^^^^^^^^^^^^^^^^^
    5 |     try {
    6 |       await $fetch('/api/logs', {
    7 |         method: 'POST',
[vue-tsc] Argument of type '"error"' is not assignable to parameter of type '"DEBUG" | "INFO" | "WARN" | "ERROR" | "SECURITY" | "IMPORTANT" | undefined'.
/labs/question-bank/composables/useLogger.ts:26:49
    24 |   const logError = async (type: LogType, error: unknown, action: string) => {
    25 |     const errorMessage = error instanceof Error ? error.message : String(error)
  > 26 |     await createLog(type, action, errorMessage, 'error')
       |                                                 ^^^^^^^
    27 |   }
    28 |
    29 |   return {
[vue-tsc] Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ 'GET:/api/admin/users': string; 'POST:/api/admin/users': string; 'PUT:/api/admin/users': string; 'DELETE:/api/admin/users': string; 'GET:/api/admin/roles': string; 'POST:/api/admin/roles': string; ... 5 more ...; 'DELETE:/api/admin/permissions': string; }'. No index signature with a parameter of type 'string' was found on type '{ 'GET:/api/admin/users': string; 'POST:/api/admin/users': string; 'PUT:/api/admin/users': string; 'DELETE:/api/admin/users': string; 'GET:/api/admin/roles': string; 'POST:/api/admin/roles': string; ... 5 more ...; 'DELETE:/api/admin/permissions': string; }'.
/labs/question-bank/middleware/auth.ts:59:32
    57 |     const path = event.path.replace(/\/\d+$/, '') // 移除路径中的 ID
    58 |     const permissionKey = `${method}:${path}`
  > 59 |     const requiredPermission = PERMISSION_MAP[permissionKey]
       |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    60 |
    61 |     // 如果找到了权限映射且用户没有该权限
    62 |     if (requiredPermission && !userPermissions.includes(requiredPermission)) {
[vue-tsc] Property 'id' does not exist on type 'never'.
/labs/question-bank/pages/admin/logs/audit.vue:43:21
    41 |         <TimelineItem
    42 |           v-for="log in auditLogs"
  > 43 |           :key="log.id"
       |                     ^^
    44 |           :dot-color="getActionColor(log.action)"
    45 |         >
    46 |           <template #dot>
[vue-tsc] Property 'action' does not exist on type 'never'.
/labs/question-bank/pages/admin/logs/audit.vue:44:42
    42 |           v-for="log in auditLogs"
    43 |           :key="log.id"
  > 44 |           :dot-color="getActionColor(log.action)"
       |                                          ^^^^^^
    45 |         >
    46 |           <template #dot>
    47 |             <Icon :name="getActionIcon(log.action)" class="text-lg" />
[vue-tsc] Property 'action' does not exist on type 'never'.
/labs/question-bank/pages/admin/logs/audit.vue:47:44
    45 |         >
    46 |           <template #dot>
  > 47 |             <Icon :name="getActionIcon(log.action)" class="text-lg" />
       |                                            ^^^^^^
    48 |           </template>
    49 |           <div class="flex justify-between items-start">
    50 |             <div>
[vue-tsc] Property 'action' does not exist on type 'never'.
/labs/question-bank/pages/admin/logs/audit.vue:51:58
    49 |           <div class="flex justify-between items-start">
    50 |             <div>
  > 51 |               <p class="font-medium">{{ formatAction(log.action) }}</p>
       |                                                          ^^^^^^
    52 |               <p class="text-sm text-gray-500">
    53 |                 由 {{ log.user.username }} 在 {{ formatDateTime(log.timestamp) }} 操作
    54 |               </p>
[vue-tsc] Property 'user' does not exist on type 'never'.
/labs/question-bank/pages/admin/logs/audit.vue:53:26
    51 |               <p class="font-medium">{{ formatAction(log.action) }}</p>
    52 |               <p class="text-sm text-gray-500">
  > 53 |                 由 {{ log.user.username }} 在 {{ formatDateTime(log.timestamp) }} 操作
       |                          ^^^^
    54 |               </p>
    55 |             </div>
    56 |             <Button
[vue-tsc] Property 'timestamp' does not exist on type 'never'.
/labs/question-bank/pages/admin/logs/audit.vue:53:67
    51 |               <p class="font-medium">{{ formatAction(log.action) }}</p>
    52 |               <p class="text-sm text-gray-500">
  > 53 |                 由 {{ log.user.username }} 在 {{ formatDateTime(log.timestamp) }} 操作
       |                                                                   ^^^^^^^^^
    54 |               </p>
    55 |             </div>
    56 |             <Button
[vue-tsc] Type 'unknown' is not assignable to type 'never[]'.
/labs/question-bank/pages/admin/logs/audit.vue:180:5
    178 |       }
    179 |     })
  > 180 |     auditLogs.value = response
        |     ^^^^^^^^^^^^^^^
    181 |   } catch (error) {
    182 |     toast.error('获取审计日志失败')
    183 |     console.error('Failed to fetch audit logs:', error)
[vue-tsc] Property 'items' does not exist on type '{}'.
/labs/question-bank/pages/admin/logs/index.vue:63:40
    61 |
    62 |     if (response.data.value) {
  > 63 |       logs.value = response.data.value.items
       |                                        ^^^^^
    64 |       total.value = response.data.value.total
    65 |     }
    66 |   } catch (error) {
[vue-tsc] Property 'total' does not exist on type '{}'.
/labs/question-bank/pages/admin/logs/index.vue:64:41
    62 |     if (response.data.value) {
    63 |       logs.value = response.data.value.items
  > 64 |       total.value = response.data.value.total
       |                                         ^^^^^
    65 |     }
    66 |   } catch (error) {
    67 |     console.error('Failed to fetch logs:', error)
[vue-tsc] Cannot find module 'vue-chartjs' or its corresponding type declarations.
/labs/question-bank/pages/admin/logs/statistics.vue:110:42
    108 | <script setup lang="ts">
    109 | import { ref, reactive, onMounted } from 'vue'
  > 110 | import { Line, Pie, Bar, Doughnut } from 'vue-chartjs'
        |                                          ^^^^^^^^^^^^^
    111 | import { useToast } from '@/composables/useToast'
    112 | import {
    113 |   Chart as ChartJS,
[vue-tsc] Cannot find module 'chart.js' or its corresponding type declarations.
/labs/question-bank/pages/admin/logs/statistics.vue:123:8
    121 |   ArcElement,
    122 |   BarElement
  > 123 | } from 'chart.js'
        |        ^^^^^^^^^^
    124 |
    125 | // 注册 ChartJS 组件
    126 | ChartJS.register(
[vue-tsc] 'response' is of type 'unknown'.
/labs/question-bank/pages/admin/logs/statistics.vue:320:22
    318 |
    319 |     // 更新统计卡片数据
  > 320 |     updateStatistics(response.overview)
        |                      ^^^^^^^^
    321 |
    322 |     // 更新图表数据
    323 |     updateCharts(response.charts)
[vue-tsc] 'response' is of type 'unknown'.
/labs/question-bank/pages/admin/logs/statistics.vue:323:18
    321 |
    322 |     // 更新图表数据
  > 323 |     updateCharts(response.charts)
        |                  ^^^^^^^^
    324 |
    325 |     // 更新详细统计数据
    326 |     updateDetailedStats(response.details)
[vue-tsc] 'response' is of type 'unknown'.
/labs/question-bank/pages/admin/logs/statistics.vue:326:25
    324 |
    325 |     // 更新详细统计数据
  > 326 |     updateDetailedStats(response.details)
        |                         ^^^^^^^^
    327 |   } catch (error) {
    328 |     toast.error('获取统计数据失败')
    329 |     console.error('Failed to fetch statistics:', error)
[vue-tsc] Type '(e?: Event | undefined) => Promise<Promise<void> | undefined>' is not assignable to type 'SubmissionHandler<GenericObject, GenericObject, unknown>'. Types of parameters 'e' and 'values' are incompatible. Type 'GenericObject' is missing the following properties from type 'Event': bubbles, cancelBubble, cancelable, composed, and 18 more.
/labs/question-bank/pages/admin/permissions/index.vue:89:12
    87 |         <Form
    88 |           :validation-schema="permissionSchema"
  > 89 |           @submit="savePermission"
       |            ^^^^^^
    90 |           v-slot="{ errors }"
    91 |           class="space-y-4"
    92 |         >
[vue-tsc] Cannot find name 'form'.
/labs/question-bank/pages/admin/permissions/index.vue:277:5
    275 |   if (permission) {
    276 |     const [module, action] = permission.name.split('.')
  > 277 |     form.resetForm({
        |     ^^^^
    278 |       values: {
    279 |         module,
    280 |         action,
[vue-tsc] Cannot find name 'form'.
/labs/question-bank/pages/admin/permissions/index.vue:285:5
    283 |     })
    284 |   } else {
  > 285 |     form.resetForm()
        |     ^^^^
    286 |   }
    287 |   showDialog.value = true
    288 | }
[vue-tsc] This expression is not callable. Type 'Promise<boolean>' has no call signatures.
/labs/question-bank/pages/admin/permissions/index.vue:329:27
    327 | // 删除权限
    328 | async function deletePermission(permission: Permission) {
  > 329 |   const confirmed = await confirm({
        |                           ^^^^^^^
    330 |     title: '确认删除',
    331 |     content: `确定要删除权限 "${permission.name}" 吗？此操作不可恢复。`,
    332 |     type: 'error',
[vue-tsc] Type '(e?: Event | undefined) => Promise<Promise<void> | undefined>' is not assignable to type 'SubmissionHandler<GenericObject, GenericObject, unknown>'. Types of parameters 'e' and 'values' are incompatible. Type 'GenericObject' is missing the following properties from type 'Event': bubbles, cancelBubble, cancelable, composed, and 18 more.
/labs/question-bank/pages/admin/roles/index.vue:85:12
    83 |         <Form
    84 |           :validation-schema="roleSchema"
  > 85 |           @submit="saveRole"
       |            ^^^^^^
    86 |           v-slot="{ errors }"
    87 |           class="space-y-4"
    88 |         >
[vue-tsc] Type 'number' is not assignable to type 'string'.
/labs/question-bank/pages/admin/roles/index.vue:166:20
    164 |                   :id="'permission-' + permission.id"
    165 |                   v-model="selectedPermissions"
  > 166 |                   :value="permission.id"
        |                    ^^^^^
    167 |                 />
    168 |                 <div class="grid gap-1.5 leading-none">
    169 |                   <label
[vue-tsc] Cannot find name 'form'.
/labs/question-bank/pages/admin/roles/index.vue:328:5
    326 |   editingRole.value = role
    327 |   if (role) {
  > 328 |     form.resetForm({
        |     ^^^^
    329 |       values: {
    330 |         name: role.name,
    331 |         description: role.description || ''
[vue-tsc] Cannot find name 'form'.
/labs/question-bank/pages/admin/roles/index.vue:335:5
    333 |     })
    334 |   } else {
  > 335 |     form.resetForm()
        |     ^^^^
    336 |   }
    337 |   showRoleDialog.value = true
    338 | }
[vue-tsc] This expression is not callable. Type 'Promise<boolean>' has no call signatures.
/labs/question-bank/pages/admin/roles/index.vue:409:27
    407 | // 删除角色
    408 | async function deleteRole(role: Role) {
  > 409 |   const confirmed = await confirm({
        |                           ^^^^^^^
    410 |     title: '确认删除',
    411 |     content: `确定要删除角色 "${role.name}" 吗？此操作不可恢复。`,
    412 |     type: 'error',
[vue-tsc] Type 'Source[] | null | undefined' is not assignable to type 'any[]'. Type 'undefined' is not assignable to type 'any[]'.
/labs/question-bank/pages/admin/sources/index.vue:194:10
    192 |           { key: 'createdAt', title: '创建时间' }
    193 |         ]"
  > 194 |         :data="filteredSources"
        |          ^^^^
    195 |       >
    196 |         <template #type="{ value }">
    197 |           {{ getSourceTypeLabel(value) }}
[vue-tsc] Type 'number | null' is not assignable to type 'string | undefined'. Type 'null' is not assignable to type 'string | undefined'.
/labs/question-bank/pages/admin/tags.vue:114:21
    112 |           <div class="space-y-2">
    113 |             <Label>父标签</Label>
  > 114 |             <Select v-model="tagForm.parentId">
        |                     ^^^^^^^
    115 |               <SelectTrigger>
    116 |                 <SelectValue placeholder="选择父标签" />
    117 |               </SelectTrigger>
[vue-tsc] Cannot find module '@/composables/useAuth' or its corresponding type declarations.
/labs/question-bank/pages/admin/tags.vue:161:25
    159 | import { ref, onMounted, computed } from 'vue'
    160 | import { useMessage } from '@/composables/useMessage'
  > 161 | import { useAuth } from '@/composables/useAuth'
        |                         ^^^^^^^^^^^^^^^^^^^^^^^
    162 | import { PencilIcon, TrashIcon } from 'lucide-vue-next'
    163 | import { Button } from '@/components/shadcn/button'
    164 | import { Input } from '@/components/shadcn/input'
[vue-tsc] Type '{}' is missing the following properties from type 'any[]': length, pop, push, concat, and 35 more.
/labs/question-bank/pages/admin/tags.vue:248:5
    246 |   try {
    247 |     const response = await useFetch('/api/admin/tags/categories')
  > 248 |     categories.value = response.data.value || []
        |     ^^^^^^^^^^^^^^^^
    249 |     await loadTagsByCategories()
    250 |   } catch (error) {
    251 |     showMessage('加载标签类别失败', 'error')
[vue-tsc] Type '{}' is missing the following properties from type 'any[]': length, pop, push, concat, and 35 more.
/labs/question-bank/pages/admin/tags.vue:260:7
    258 |     for (const category of categories.value) {
    259 |       const response = await useFetch(`/api/admin/tags/${category.id}`)
  > 260 |       categoryTags.value[category.id] = response.data.value || []
        |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    261 |     }
    262 |   } catch (error) {
    263 |     showMessage('加载标签失败', 'error')
[vue-tsc] Type '(e?: Event | undefined) => Promise<Promise<void> | undefined>' is not assignable to type 'SubmissionHandler<GenericObject, GenericObject, unknown>'. Types of parameters 'e' and 'values' are incompatible. Type 'GenericObject' is missing the following properties from type 'Event': bubbles, cancelBubble, cancelable, composed, and 18 more.
/labs/question-bank/pages/admin/users/index.vue:81:12
    79 |         <Form
    80 |           :validation-schema="userSchema"
  > 81 |           @submit="saveUser"
       |            ^^^^^^
    82 |           v-slot="{ errors }"
    83 |           class="space-y-4"
    84 |         >
[vue-tsc] '"lucide-vue-next"' has no exported member named 'UserGroupIcon'. Did you mean 'GroupIcon'?
/labs/question-bank/pages/admin/users/index.vue:216:64
    214 | import { ref, computed } from 'vue'
    215 | import { useForm } from 'vee-validate'
  > 216 | import { SearchIcon, PlusIcon, MoreHorizontalIcon, PencilIcon, UserGroupIcon, TrashIcon, XIcon } from 'lucide-vue-next'
        |                                                                ^^^^^^^^^^^^^
    217 | import { useConfirm } from '@/composables/useConfirm'
    218 | import type { User, Role } from '@prisma/client'
    219 |
[vue-tsc] Cannot find name 'form'.
/labs/question-bank/pages/admin/users/index.vue:309:5
    307 |   editingUser.value = user
    308 |   if (user) {
  > 309 |     form.resetForm({
        |     ^^^^
    310 |       values: {
    311 |         username: user.username,
    312 |         email: user.email,
[vue-tsc] Cannot find name 'form'.
/labs/question-bank/pages/admin/users/index.vue:318:5
    316 |     })
    317 |   } else {
  > 318 |     form.resetForm()
        |     ^^^^
    319 |   }
    320 |   showUserDialog.value = true
    321 | }
[vue-tsc] This expression is not callable. Type 'Promise<boolean>' has no call signatures.
/labs/question-bank/pages/admin/users/index.vue:408:27
    406 | // 删除用户
    407 | async function deleteUser(user: User) {
  > 408 |   const confirmed = await confirm({
        |                           ^^^^^^^
    409 |     title: '确认删除',
    410 |     content: `确定要删除用户 "${user.username}" 吗？此操作不可恢复。`,
    411 |     type: 'error',
[vue-tsc] Parameter 'role' implicitly has an 'any' type.
/labs/question-bank/server/api/admin/logs/audit.ts:7:33
     5 |   // 验证权限
     6 |   const user = event.context.user
  >  7 |   if (!user || !user.roles.some(role => role.permissions.includes('VIEW_LOGS'))) {
       |                                 ^^^^
     8 |     throw createError({
     9 |       statusCode: 403,
    10 |       message: '没有权限查看审计日志'
[vue-tsc] 'error' is of type 'unknown'.
/labs/question-bank/server/api/admin/logs/audit.ts:45:19
    43 |     console.error('Failed to get audit trail:', error)
    44 |     throw createError({
  > 45 |       statusCode: error.message === '查询超时' ? 504 : 500,
       |                   ^^^^^
    46 |       message: error.message === '查询超时' ? '查询超时，请稍后再试' : '获取审计记录失败'    })
    47 |   }
    48 | })
[vue-tsc] 'error' is of type 'unknown'.
/labs/question-bank/server/api/admin/logs/audit.ts:46:16
    44 |     throw createError({
    45 |       statusCode: error.message === '查询超时' ? 504 : 500,
  > 46 |       message: error.message === '查询超时' ? '查询超时，请稍后再试' : '获取审计记录失败'    })
       |                ^^^^^
    47 |   }
    48 | })
    49 |
[vue-tsc] 'error' is of type 'unknown'.
/labs/question-bank/server/api/admin/logs/index.ts:54:19
    52 |     console.error('Failed to get logs:', error)
    53 |     throw createError({
  > 54 |       statusCode: error.message === '查询超时' ? 504 : 500,
       |                   ^^^^^
    55 |       message: error.message === '查询超时' ? '查询超时，请缩小查询范围' : '获取日志列表失败'
    56 |     })
    57 |   }
[vue-tsc] 'error' is of type 'unknown'.
/labs/question-bank/server/api/admin/logs/index.ts:55:16
    53 |     throw createError({
    54 |       statusCode: error.message === '查询超时' ? 504 : 500,
  > 55 |       message: error.message === '查询超时' ? '查询超时，请缩小查询范围' : '获取日志列表失败'
       |                ^^^^^
    56 |     })
    57 |   }
    58 | })
[vue-tsc] Parameter 'role' implicitly has an 'any' type.
/labs/question-bank/server/api/admin/logs/statistics.ts:22:37
    20 |       // 验证权限
    21 |       const user = event.context.user
  > 22 |       if (!user || !user.roles.some(role => role.permissions.includes('VIEW_LOGS'))) {
       |                                     ^^^^
    23 |         throw createError({
    24 |           statusCode: 403,
    25 |           message: '没有权限查看日志统计'
[vue-tsc] 'error' is of type 'unknown'.
/labs/question-bank/server/api/admin/logs/statistics.ts:71:23
    69 |         console.error('Failed to get statistics:', error)
    70 |         throw createError({
  > 71 |           statusCode: error.message === '统计超时' ? 504 : 500,
       |                       ^^^^^
    72 |           message: error.message === '统计超时' ? '统计超时，请缩小时间范围' : '获取统计数据失败',
    73 |         })
    74 |       }
[vue-tsc] 'error' is of type 'unknown'.
/labs/question-bank/server/api/admin/logs/statistics.ts:72:20
    70 |         throw createError({
    71 |           statusCode: error.message === '统计超时' ? 504 : 500,
  > 72 |           message: error.message === '统计超时' ? '统计超时，请缩小时间范围' : '获取统计数据失败',
       |                    ^^^^^
    73 |         })
    74 |       }
    75 |
[vue-tsc] 'event.context.params' is possibly 'undefined'.
/labs/question-bank/server/api/admin/permissions/[id].ts:15:23
    13 |
    14 | export default defineEventHandler(async (event) => {
  > 15 |   const id = parseInt(event.context.params.id)
       |                       ^^^^^^^^^^^^^^^^^^^^
    16 |   if (isNaN(id)) {
    17 |     throw createError({
    18 |       statusCode: 400,
[vue-tsc] Object literal may only specify known properties, and 'rolePermissions' does not exist in type 'PermissionInclude<DefaultArgs>'.
/labs/question-bank/server/api/admin/permissions/[id].ts:32:13
    30 |           where: { id },
    31 |           include: {
  > 32 |             rolePermissions: {
       |             ^^^^^^^^^^^^^^^
    33 |               include: {
    34 |                 role: true
    35 |               }
[vue-tsc] Property 'rolePermissions' does not exist on type '{ id: number; name: string; createdAt: Date; updatedAt: Date; description: string | null; creatorId: number; updaterId: number; }'.
/labs/question-bank/server/api/admin/permissions/[id].ts:50:29
    48 |         return {
    49 |           ...permission,
  > 50 |           roles: permission.rolePermissions.map(rp => rp.role)
       |                             ^^^^^^^^^^^^^^^
    51 |         }
    52 |       } catch (error) {
    53 |         console.error('获取权限详情失败:', error)
[vue-tsc] Parameter 'rp' implicitly has an 'any' type.
/labs/question-bank/server/api/admin/permissions/[id].ts:50:49
    48 |         return {
    49 |           ...permission,
  > 50 |           roles: permission.rolePermissions.map(rp => rp.role)
       |                                                 ^^
    51 |         }
    52 |       } catch (error) {
    53 |         console.error('获取权限详情失败:', error)
[vue-tsc] 'error' is of type 'unknown'.
/labs/question-bank/server/api/admin/permissions/[id].ts:55:23
    53 |         console.error('获取权限详情失败:', error)
    54 |         throw createError({
  > 55 |           statusCode: error.statusCode || 500,
       |                       ^^^^^
    56 |           message: error.message || '获取权限详情失败'
    57 |         })
    58 |       }
[vue-tsc] 'error' is of type 'unknown'.
/labs/question-bank/server/api/admin/permissions/[id].ts:56:20
    54 |         throw createError({
    55 |           statusCode: error.statusCode || 500,
  > 56 |           message: error.message || '获取权限详情失败'
       |                    ^^^^^
    57 |         })
    58 |       }
    59 |
[vue-tsc] Object literal may only specify known properties, and 'rolePermissions' does not exist in type 'PermissionInclude<DefaultArgs>'.
/labs/question-bank/server/api/admin/permissions/[id].ts:97:13
     95 |           data: validatedData,
     96 |           include: {
  >  97 |             rolePermissions: {
        |             ^^^^^^^^^^^^^^^
     98 |               include: {
     99 |                 role: true
    100 |               }
[vue-tsc] Property 'rolePermissions' does not exist on type '{ id: number; name: string; createdAt: Date; updatedAt: Date; description: string | null; creatorId: number; updaterId: number; }'.
/labs/question-bank/server/api/admin/permissions/[id].ts:107:29
    105 |         return {
    106 |           ...permission,
  > 107 |           roles: permission.rolePermissions.map(rp => rp.role)
        |                             ^^^^^^^^^^^^^^^
    108 |         }
    109 |       } catch (error) {
    110 |         console.error('更新权限失败:', error)
[vue-tsc] Parameter 'rp' implicitly has an 'any' type.
/labs/question-bank/server/api/admin/permissions/[id].ts:107:49
    105 |         return {
    106 |           ...permission,
  > 107 |           roles: permission.rolePermissions.map(rp => rp.role)
        |                                                 ^^
    108 |         }
    109 |       } catch (error) {
    110 |         console.error('更新权限失败:', error)
[vue-tsc] 'error' is of type 'unknown'.
/labs/question-bank/server/api/admin/permissions/[id].ts:115:15
    113 |           message: error instanceof z.ZodError 
    114 |             ? '无效的权限数据' 
  > 115 |             : error.message || '更新权限失败'
        |               ^^^^^
    116 |         })
    117 |       }
    118 |
[vue-tsc] Object literal may only specify known properties, and 'rolePermissions' does not exist in type 'PermissionInclude<DefaultArgs>'.
/labs/question-bank/server/api/admin/permissions/[id].ts:126:13
    124 |           where: { id },
    125 |           include: {
  > 126 |             rolePermissions: true
        |             ^^^^^^^^^^^^^^^
    127 |           }
    128 |         })
    129 |
[vue-tsc] Property 'rolePermissions' does not exist on type '{ id: number; name: string; createdAt: Date; updatedAt: Date; description: string | null; creatorId: number; updaterId: number; }'.
/labs/question-bank/server/api/admin/permissions/[id].ts:138:24
    136 |
    137 |         // 检查权限是否被使用
  > 138 |         if (permission.rolePermissions.length > 0) {
        |                        ^^^^^^^^^^^^^^^
    139 |           throw createError({
    140 |             statusCode: 400,
    141 |             message: '权限正在被使用，无法删除'
[vue-tsc] 'error' is of type 'unknown'.
/labs/question-bank/server/api/admin/permissions/[id].ts:156:23
    154 |         console.error('删除权限失败:', error)
    155 |         throw createError({
  > 156 |           statusCode: error.statusCode || 500,
        |                       ^^^^^
    157 |           message: error.message || '删除权限失败'
    158 |         })
    159 |       }
[vue-tsc] 'error' is of type 'unknown'.
/labs/question-bank/server/api/admin/permissions/[id].ts:157:20
    155 |         throw createError({
    156 |           statusCode: error.statusCode || 500,
  > 157 |           message: error.message || '删除权限失败'
        |                    ^^^^^
    158 |         })
    159 |       }
    160 |
[vue-tsc] Type '{ roles?: { create: any; } | undefined; name: any; description: any; }' is not assignable to type '(Without<PermissionCreateInput, PermissionUncheckedCreateInput> & PermissionUncheckedCreateInput) | (Without<...> & PermissionCreateInput)'. Type '{ roles?: { create: any; } | undefined; name: any; description: any; }' is not assignable to type 'Without<PermissionUncheckedCreateInput, PermissionCreateInput> & PermissionCreateInput'. Type '{ roles?: { create: any; } | undefined; name: any; description: any; }' is missing the following properties from type 'PermissionCreateInput': createdBy, updatedBy
/labs/question-bank/server/api/admin/permissions/index.post.ts:25:5
    23 |   // 创建权限
    24 |   const permission = await prisma.permission.create({
  > 25 |     data: {
       |     ^^^^
    26 |       name,
    27 |       description,
    28 |       // 如果提供了角色列表，则建立关联
[vue-tsc] Property 'roles' does not exist on type '{ id: number; name: string; createdAt: Date; updatedAt: Date; description: string | null; creatorId: number; updaterId: number; }'.
/labs/question-bank/server/api/admin/permissions/index.post.ts:50:23
    48 |   return {
    49 |     ...permission,
  > 50 |     roles: permission.roles.map(rp => rp.role)
       |                       ^^^^^
    51 |   }
    52 | })
    53 |
[vue-tsc] Parameter 'rp' implicitly has an 'any' type.
/labs/question-bank/server/api/admin/permissions/index.post.ts:50:33
    48 |   return {
    49 |     ...permission,
  > 50 |     roles: permission.roles.map(rp => rp.role)
       |                                 ^^
    51 |   }
    52 | })
    53 |
[vue-tsc] Type '{ name: string; group: string; description?: string | undefined; }' is not assignable to type '(Without<PermissionCreateInput, PermissionUncheckedCreateInput> & PermissionUncheckedCreateInput) | (Without<...> & PermissionCreateInput)'. Type '{ name: string; group: string; description?: string | undefined; }' is not assignable to type 'Without<PermissionUncheckedCreateInput, PermissionCreateInput> & PermissionCreateInput'. Type '{ name: string; group: string; description?: string | undefined; }' is missing the following properties from type 'PermissionCreateInput': createdBy, updatedBy
/labs/question-bank/server/api/admin/permissions/index.ts:96:11
    94 |         // 创建权限
    95 |         const permission = await prisma.permission.create({
  > 96 |           data: validatedData
       |           ^^^^
    97 |         })
    98 |
    99 |         return permission
[vue-tsc] 'event.context.params' is possibly 'undefined'.
/labs/question-bank/server/api/admin/roles/[id].ts:14:23
    12 |
    13 | export default defineEventHandler(async (event) => {
  > 14 |   const id = parseInt(event.context.params.id)
       |                       ^^^^^^^^^^^^^^^^^^^^
    15 |   if (isNaN(id)) {
    16 |     throw createError({
    17 |       statusCode: 400,
[vue-tsc] 'error' is of type 'unknown'.
/labs/question-bank/server/api/admin/roles/[id].ts:59:23
    57 |         console.error('获取角色详情失败:', error)
    58 |         throw createError({
  > 59 |           statusCode: error.statusCode || 500,
       |                       ^^^^^
    60 |           message: error.message || '获取角色详情失败'
    61 |         })
    62 |       }
[vue-tsc] 'error' is of type 'unknown'.
/labs/question-bank/server/api/admin/roles/[id].ts:60:20
    58 |         throw createError({
    59 |           statusCode: error.statusCode || 500,
  > 60 |           message: error.message || '获取角色详情失败'
       |                    ^^^^^
    61 |         })
    62 |       }
    63 |
[vue-tsc] 'role' is possibly 'null'.
/labs/question-bank/server/api/admin/roles/[id].ts:161:24
    159 |         return {
    160 |           ...role,
  > 161 |           permissions: role.permissions.map(rp => rp.permission),
        |                        ^^^^
    162 |           users: role.users.map(ur => ur.user)
    163 |         }
    164 |       } catch (error) {
[vue-tsc] 'role' is possibly 'null'.
/labs/question-bank/server/api/admin/roles/[id].ts:162:18
    160 |           ...role,
    161 |           permissions: role.permissions.map(rp => rp.permission),
  > 162 |           users: role.users.map(ur => ur.user)
        |                  ^^^^
    163 |         }
    164 |       } catch (error) {
    165 |         console.error('更新角色失败:', error)
[vue-tsc] 'error' is of type 'unknown'.
/labs/question-bank/server/api/admin/roles/[id].ts:170:15
    168 |           message: error instanceof z.ZodError 
    169 |             ? '无效的角色数据' 
  > 170 |             : error.message || '更新角色失败'
        |               ^^^^^
    171 |         })
    172 |       }
    173 |
[vue-tsc] 'error' is of type 'unknown'.
/labs/question-bank/server/api/admin/roles/[id].ts:218:23
    216 |         console.error('删除角色失败:', error)
    217 |         throw createError({
  > 218 |           statusCode: error.statusCode || 500,
        |                       ^^^^^
    219 |           message: error.message || '删除角色失败'
    220 |         })
    221 |       }
[vue-tsc] 'error' is of type 'unknown'.
/labs/question-bank/server/api/admin/roles/[id].ts:219:20
    217 |         throw createError({
    218 |           statusCode: error.statusCode || 500,
  > 219 |           message: error.message || '删除角色失败'
        |                    ^^^^^
    220 |         })
    221 |       }
    222 |
[vue-tsc] Type '{ permissions: { create: { permission: { connect: { id: number; }; }; }[]; } | undefined; name: string; description?: string | undefined; }' is not assignable to type '(Without<RoleCreateInput, RoleUncheckedCreateInput> & RoleUncheckedCreateInput) | (Without<...> & RoleCreateInput)'. Type '{ permissions: { create: { permission: { connect: { id: number; }; }; }[]; } | undefined; name: string; description?: string | undefined; }' is not assignable to type 'Without<RoleUncheckedCreateInput, RoleCreateInput> & RoleCreateInput'. Type '{ permissions: { create: { permission: { connect: { id: number; }; }; }[]; } | undefined; name: string; description?: string | undefined; }' is missing the following properties from type 'RoleCreateInput': createdBy, updatedBy
/labs/question-bank/server/api/admin/roles/index.ts:119:11
    117 |         // 创建角色和权限关联
    118 |         const role = await prisma.role.create({
  > 119 |           data: {
        |           ^^^^
    120 |             ...roleData,
    121 |             permissions: permissionIds ? {
    122 |               create: permissionIds.map(permissionId => ({
[vue-tsc] Property 'permissions' does not exist on type '{ id: number; name: string; createdAt: Date; updatedAt: Date; description: string | null; creatorId: number; updaterId: number; }'.
/labs/question-bank/server/api/admin/roles/index.ts:140:29
    138 |         return {
    139 |           ...role,
  > 140 |           permissions: role.permissions.map(rp => rp.permission)
        |                             ^^^^^^^^^^^
    141 |         }
    142 |       } catch (error) {
    143 |         console.error('创建角色失败:', error)
[vue-tsc] Parameter 'rp' implicitly has an 'any' type.
/labs/question-bank/server/api/admin/roles/index.ts:140:45
    138 |         return {
    139 |           ...role,
  > 140 |           permissions: role.permissions.map(rp => rp.permission)
        |                                             ^^
    141 |         }
    142 |       } catch (error) {
    143 |         console.error('创建角色失败:', error)
[vue-tsc] Property 'role' does not exist on type '{ id: number; name: string | null; username: string; email: string; password: string; createdAt: Date; updatedAt: Date; }'.
/labs/question-bank/server/api/admin/users/[id].delete.ts:20:13
    18 |   })
    19 |
  > 20 |   if (user?.role === 'ADMIN') {
       |             ^^^^
    21 |     const adminCount = await prisma.user.count({
    22 |       where: { role: 'ADMIN' }
    23 |     })
[vue-tsc] Object literal may only specify known properties, but 'role' does not exist in type 'UserWhereInput'. Did you mean to write 'roles'?
/labs/question-bank/server/api/admin/users/[id].delete.ts:22:16
    20 |   if (user?.role === 'ADMIN') {
    21 |     const adminCount = await prisma.user.count({
  > 22 |       where: { role: 'ADMIN' }
       |                ^^^^
    23 |     })
    24 |
    25 |     if (adminCount <= 1) {
[vue-tsc] Object literal may only specify known properties, but 'role' does not exist in type 'UserSelect<DefaultArgs>'. Did you mean to write 'roles'?
/labs/question-bank/server/api/admin/users/[id].put.ts:77:7
    75 |       username: true,
    76 |       email: true,
  > 77 |       role: true,
       |       ^^^^
    78 |       createdAt: true,
    79 |       updatedAt: true
    80 |     }
[vue-tsc] 'event.context.params' is possibly 'undefined'.
/labs/question-bank/server/api/admin/users/[id]/roles.ts:12:27
    10 |
    11 | export default defineEventHandler(async (event) => {
  > 12 |   const userId = parseInt(event.context.params.id)
       |                           ^^^^^^^^^^^^^^^^^^^^
    13 |   if (isNaN(userId)) {
    14 |     throw createError({
    15 |       statusCode: 400,
[vue-tsc] 'error' is of type 'unknown'.
/labs/question-bank/server/api/admin/users/[id]/roles.ts:62:23
    60 |         console.error('获取用户角色失败:', error)
    61 |         throw createError({
  > 62 |           statusCode: error.statusCode || 500,
       |                       ^^^^^
    63 |           message: error.message || '获取用户角色失败'
    64 |         })
    65 |       }
[vue-tsc] 'error' is of type 'unknown'.
/labs/question-bank/server/api/admin/users/[id]/roles.ts:63:20
    61 |         throw createError({
    62 |           statusCode: error.statusCode || 500,
  > 63 |           message: error.message || '获取用户角色失败'
       |                    ^^^^^
    64 |         })
    65 |       }
    66 |
[vue-tsc] 'updatedUser' is possibly 'null'.
/labs/question-bank/server/api/admin/users/[id]/roles.ts:142:18
    140 |
    141 |         return {
  > 142 |           roles: updatedUser.roles.map(ur => ({
        |                  ^^^^^^^^^^^
    143 |             ...ur.role,
    144 |             permissions: ur.role.permissions.map(rp => rp.permission)
    145 |           }))
[vue-tsc] 'error' is of type 'unknown'.
/labs/question-bank/server/api/admin/users/[id]/roles.ts:153:15
    151 |           message: error instanceof z.ZodError 
    152 |             ? '无效的角色数据' 
  > 153 |             : error.message || '更新用户角色失败'
        |               ^^^^^
    154 |         })
    155 |       }
    156 |
[vue-tsc] Object literal may only specify known properties, and 'status' does not exist in type '(Without<UserUpdateInput, UserUncheckedUpdateInput> & UserUncheckedUpdateInput) | (Without<...> & UserUpdateInput)'.
/labs/question-bank/server/api/admin/users/[id]/status.put.ts:22:13
    20 |   const user = await prisma.user.update({
    21 |     where: { id },
  > 22 |     data: { status },
       |             ^^^^^^
    23 |     include: {
    24 |       roles: {
    25 |         include: {
[vue-tsc] Property 'roles' does not exist on type '{ id: number; name: string | null; username: string; email: string; password: string; createdAt: Date; updatedAt: Date; }'.
/labs/question-bank/server/api/admin/users/[id]/status.put.ts:34:17
    32 |   return {
    33 |     ...user,
  > 34 |     roles: user.roles.map(ur => ur.role)
       |                 ^^^^^
    35 |   }
    36 | })
    37 |
[vue-tsc] Parameter 'ur' implicitly has an 'any' type.
/labs/question-bank/server/api/admin/users/[id]/status.put.ts:34:27
    32 |   return {
    33 |     ...user,
  > 34 |     roles: user.roles.map(ur => ur.role)
       |                           ^^
    35 |   }
    36 | })
    37 |
[vue-tsc] Object literal may only specify known properties, but 'role' does not exist in type 'UserSelect<DefaultArgs>'. Did you mean to write 'roles'?
/labs/question-bank/server/api/admin/users/index.get.ts:11:7
     9 |       username: true,
    10 |       email: true,
  > 11 |       role: true,
       |       ^^^^
    12 |       createdAt: true,
    13 |       updatedAt: true
    14 |     },
[vue-tsc] Object literal may only specify known properties, but 'role' does not exist in type '(Without<UserCreateInput, UserUncheckedCreateInput> & UserUncheckedCreateInput) | (Without<...> & UserCreateInput)'. Did you mean to write 'roles'?
/labs/question-bank/server/api/admin/users/index.post.ts:48:7
    46 |       email,
    47 |       password: hashedPassword,
  > 48 |       role: role || 'USER'
       |       ^^^^
    49 |     },
    50 |     select: {
    51 |       id: true,
[vue-tsc] Object literal may only specify known properties, but 'role' does not exist in type 'UserSelect<DefaultArgs>'. Did you mean to write 'roles'?
/labs/question-bank/server/api/admin/users/index.post.ts:54:7
    52 |       username: true,
    53 |       email: true,
  > 54 |       role: true,
       |       ^^^^
    55 |       createdAt: true,
    56 |       updatedAt: true
    57 |     }
[vue-tsc] Object literal may only specify known properties, but 'role' does not exist in type '(Without<UserCreateInput, UserUncheckedCreateInput> & UserUncheckedCreateInput) | (Without<...> & UserCreateInput)'. Did you mean to write 'roles'?
/labs/question-bank/server/api/auth/register.post.ts:48:7
    46 |       username,
    47 |       password: hashedPassword,
  > 48 |       role: 'USER'
       |       ^^^^
    49 |     }
    50 |   })
    51 |
[vue-tsc] Expected 1 arguments, but got 2.
/labs/question-bank/server/api/auth/register.post.ts:52:40
    50 |   })
    51 |
  > 52 |   const token = generateToken(user.id, user.role)
       |                                        ^^^^^^^^^
    53 |
    54 |   return {
    55 |     token,
[vue-tsc] Property 'role' does not exist on type '{ id: number; name: string | null; username: string; email: string; password: string; createdAt: Date; updatedAt: Date; }'.
/labs/question-bank/server/api/auth/register.post.ts:52:45
    50 |   })
    51 |
  > 52 |   const token = generateToken(user.id, user.role)
       |                                             ^^^^
    53 |
    54 |   return {
    55 |     token,
[vue-tsc] Property 'role' does not exist on type '{ id: number; name: string | null; username: string; email: string; password: string; createdAt: Date; updatedAt: Date; }'.
/labs/question-bank/server/api/auth/register.post.ts:60:18
    58 |       email: user.email,
    59 |       username: user.username,
  > 60 |       role: user.role
       |                  ^^^^
    61 |     }
    62 |   }
    63 | })
[vue-tsc] Property 'tags' does not exist on type '{ category: { name: string; }; createdBy: { username: string; } | null; } & { id: number; title: string; type: string; options: string | null; createdAt: Date; updatedAt: Date; content: string; ... 8 more ...; updatedById: number | null; }'.
/labs/question-bank/server/api/questions/export.ts:56:13
    54 |           q.explanation || '',
    55 |           q.category.name,
  > 56 |           q.tags || '',
       |             ^^^^
    57 |           q.createdBy.username
    58 |         ].map(field => `"${String(field).replace(/"/g, '""')}"`).join(','))
    59 |         
[vue-tsc] 'q.createdBy' is possibly 'null'.
/labs/question-bank/server/api/questions/export.ts:57:11
    55 |           q.category.name,
    56 |           q.tags || '',
  > 57 |           q.createdBy.username
       |           ^^^^^^^^^^^
    58 |         ].map(field => `"${String(field).replace(/"/g, '""')}"`).join(','))
    59 |         
    60 |         setHeader(event, 'Content-Type', 'text/csv')