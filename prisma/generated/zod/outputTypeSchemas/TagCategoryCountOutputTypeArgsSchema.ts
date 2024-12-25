import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCategoryCountOutputTypeSelectSchema } from './TagCategoryCountOutputTypeSelectSchema';

export const TagCategoryCountOutputTypeArgsSchema: z.ZodType<Prisma.TagCategoryCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TagCategoryCountOutputTypeSelectSchema).nullish(),
}).strict();

export default TagCategoryCountOutputTypeSelectSchema;
