import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SourceCountOrderByAggregateInputSchema } from './SourceCountOrderByAggregateInputSchema';
import { SourceAvgOrderByAggregateInputSchema } from './SourceAvgOrderByAggregateInputSchema';
import { SourceMaxOrderByAggregateInputSchema } from './SourceMaxOrderByAggregateInputSchema';
import { SourceMinOrderByAggregateInputSchema } from './SourceMinOrderByAggregateInputSchema';
import { SourceSumOrderByAggregateInputSchema } from './SourceSumOrderByAggregateInputSchema';

export const SourceOrderByWithAggregationInputSchema: z.ZodType<Prisma.SourceOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  isDeleted: z.lazy(() => SortOrderSchema).optional(),
  creatorId: z.lazy(() => SortOrderSchema).optional(),
  updaterId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SourceCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SourceAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SourceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SourceMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SourceSumOrderByAggregateInputSchema).optional()
}).strict();

export default SourceOrderByWithAggregationInputSchema;
