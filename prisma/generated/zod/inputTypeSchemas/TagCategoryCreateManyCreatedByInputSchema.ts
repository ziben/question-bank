import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TagCategoryCreateManyCreatedByInputSchema: z.ZodType<Prisma.TagCategoryCreateManyCreatedByInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  code: z.string(),
  description: z.string().optional().nullable(),
  allowMultiple: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  updaterId: z.number().int().optional().nullable()
}).strict();

export default TagCategoryCreateManyCreatedByInputSchema;
