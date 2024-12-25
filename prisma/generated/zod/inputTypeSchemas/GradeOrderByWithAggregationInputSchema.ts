import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { GradeCountOrderByAggregateInputSchema } from './GradeCountOrderByAggregateInputSchema';
import { GradeAvgOrderByAggregateInputSchema } from './GradeAvgOrderByAggregateInputSchema';
import { GradeMaxOrderByAggregateInputSchema } from './GradeMaxOrderByAggregateInputSchema';
import { GradeMinOrderByAggregateInputSchema } from './GradeMinOrderByAggregateInputSchema';
import { GradeSumOrderByAggregateInputSchema } from './GradeSumOrderByAggregateInputSchema';

export const GradeOrderByWithAggregationInputSchema: z.ZodType<Prisma.GradeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  isDeleted: z.lazy(() => SortOrderSchema).optional(),
  creatorId: z.lazy(() => SortOrderSchema).optional(),
  updaterId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => GradeCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => GradeAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GradeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GradeMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => GradeSumOrderByAggregateInputSchema).optional()
}).strict();

export default GradeOrderByWithAggregationInputSchema;
