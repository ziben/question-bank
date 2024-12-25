import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryWhereInputSchema } from './TagCategoryWhereInputSchema';

export const TagCategoryListRelationFilterSchema: z.ZodType<Prisma.TagCategoryListRelationFilter> = z.object({
  every: z.lazy(() => TagCategoryWhereInputSchema).optional(),
  some: z.lazy(() => TagCategoryWhereInputSchema).optional(),
  none: z.lazy(() => TagCategoryWhereInputSchema).optional()
}).strict();

export default TagCategoryListRelationFilterSchema;
