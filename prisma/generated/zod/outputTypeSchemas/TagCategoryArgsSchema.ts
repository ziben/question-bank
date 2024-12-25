import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCategorySelectSchema } from '../inputTypeSchemas/TagCategorySelectSchema';
import { TagCategoryIncludeSchema } from '../inputTypeSchemas/TagCategoryIncludeSchema';

export const TagCategoryArgsSchema: z.ZodType<Prisma.TagCategoryDefaultArgs> = z.object({
  select: z.lazy(() => TagCategorySelectSchema).optional(),
  include: z.lazy(() => TagCategoryIncludeSchema).optional(),
}).strict();

export default TagCategoryArgsSchema;
