import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TagCategoryIdNameCompoundUniqueInputSchema: z.ZodType<Prisma.TagCategoryIdNameCompoundUniqueInput> = z.object({
  categoryId: z.number(),
  name: z.string()
}).strict();

export default TagCategoryIdNameCompoundUniqueInputSchema;
