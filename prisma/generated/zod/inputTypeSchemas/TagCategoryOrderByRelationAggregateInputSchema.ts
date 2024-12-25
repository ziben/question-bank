import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TagCategoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TagCategoryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TagCategoryOrderByRelationAggregateInputSchema;
