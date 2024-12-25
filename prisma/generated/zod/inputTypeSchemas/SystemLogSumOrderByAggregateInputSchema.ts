import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SystemLogSumOrderByAggregateInputSchema: z.ZodType<Prisma.SystemLogSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SystemLogSumOrderByAggregateInputSchema;
