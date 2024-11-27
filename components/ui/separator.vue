&lt;script setup lang="ts"&gt;
import { cn } from '@/lib/utils'

const props = defineProps&lt;{
  orientation?: 'horizontal' | 'vertical'
  className?: string
}&gt;()

const { orientation = 'horizontal' } = props
&lt;/script&gt;

&lt;template&gt;
  &lt;div
    :class="cn(
      'shrink-0 bg-border',
      orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
      className
    )"
  /&gt;
&lt;/template&gt;
