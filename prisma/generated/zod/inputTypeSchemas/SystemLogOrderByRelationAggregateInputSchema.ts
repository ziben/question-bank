import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SystemLogOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SystemLogOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SystemLogOrderByRelationAggregateInputSchema;
