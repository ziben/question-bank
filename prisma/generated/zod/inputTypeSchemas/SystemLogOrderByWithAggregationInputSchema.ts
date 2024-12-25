import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SystemLogCountOrderByAggregateInputSchema } from './SystemLogCountOrderByAggregateInputSchema';
import { SystemLogAvgOrderByAggregateInputSchema } from './SystemLogAvgOrderByAggregateInputSchema';
import { SystemLogMaxOrderByAggregateInputSchema } from './SystemLogMaxOrderByAggregateInputSchema';
import { SystemLogMinOrderByAggregateInputSchema } from './SystemLogMinOrderByAggregateInputSchema';
import { SystemLogSumOrderByAggregateInputSchema } from './SystemLogSumOrderByAggregateInputSchema';

export const SystemLogOrderByWithAggregationInputSchema: z.ZodType<Prisma.SystemLogOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  module: z.lazy(() => SortOrderSchema).optional(),
  action: z.lazy(() => SortOrderSchema).optional(),
  target: z.lazy(() => SortOrderSchema).optional(),
  targetId: z.lazy(() => SortOrderSchema).optional(),
  detail: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ip: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userAgent: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SystemLogCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SystemLogAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SystemLogMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SystemLogMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SystemLogSumOrderByAggregateInputSchema).optional()
}).strict();

export default SystemLogOrderByWithAggregationInputSchema;
