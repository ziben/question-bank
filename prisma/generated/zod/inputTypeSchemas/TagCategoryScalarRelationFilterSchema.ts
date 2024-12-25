import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryWhereInputSchema } from './TagCategoryWhereInputSchema';

export const TagCategoryScalarRelationFilterSchema: z.ZodType<Prisma.TagCategoryScalarRelationFilter> = z.object({
  is: z.lazy(() => TagCategoryWhereInputSchema).optional(),
  isNot: z.lazy(() => TagCategoryWhereInputSchema).optional()
}).strict();

export default TagCategoryScalarRelationFilterSchema;
