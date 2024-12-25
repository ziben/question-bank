import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TagCategoryCreateManyUpdatedByInputSchema: z.ZodType<Prisma.TagCategoryCreateManyUpdatedByInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  code: z.string(),
  description: z.string().optional().nullable(),
  allowMultiple: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.number().int().optional().nullable()
}).strict();

export default TagCategoryCreateManyUpdatedByInputSchema;
