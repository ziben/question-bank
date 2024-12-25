import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SystemLogAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SystemLogAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SystemLogAvgOrderByAggregateInputSchema;
