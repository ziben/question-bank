import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TagCategoryCountOrderByAggregateInputSchema } from './TagCategoryCountOrderByAggregateInputSchema';
import { TagCategoryAvgOrderByAggregateInputSchema } from './TagCategoryAvgOrderByAggregateInputSchema';
import { TagCategoryMaxOrderByAggregateInputSchema } from './TagCategoryMaxOrderByAggregateInputSchema';
import { TagCategoryMinOrderByAggregateInputSchema } from './TagCategoryMinOrderByAggregateInputSchema';
import { TagCategorySumOrderByAggregateInputSchema } from './TagCategorySumOrderByAggregateInputSchema';

export const TagCategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.TagCategoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  allowMultiple: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  isDeleted: z.lazy(() => SortOrderSchema).optional(),
  creatorId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  updaterId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => TagCategoryCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TagCategoryAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TagCategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TagCategoryMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TagCategorySumOrderByAggregateInputSchema).optional()
}).strict();

export default TagCategoryOrderByWithAggregationInputSchema;
