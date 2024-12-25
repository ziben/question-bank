import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SourceSumOrderByAggregateInputSchema: z.ZodType<Prisma.SourceSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  creatorId: z.lazy(() => SortOrderSchema).optional(),
  updaterId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SourceSumOrderByAggregateInputSchema;
