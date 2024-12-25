import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TagCreateManyUpdatedByInputSchema: z.ZodType<Prisma.TagCreateManyUpdatedByInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  code: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  sortOrder: z.number().int().optional(),
  categoryId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.number().int().optional().nullable()
}).strict();

export default TagCreateManyUpdatedByInputSchema;
