import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TagCategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.TagCategoryCountOutputTypeSelect> = z.object({
  tags: z.boolean().optional(),
}).strict();

export default TagCategoryCountOutputTypeSelectSchema;
