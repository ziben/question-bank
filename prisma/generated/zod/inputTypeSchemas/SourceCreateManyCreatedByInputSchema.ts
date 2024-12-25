import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SourceCreateManyCreatedByInputSchema: z.ZodType<Prisma.SourceCreateManyCreatedByInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  type: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  updaterId: z.number().int()
}).strict();

export default SourceCreateManyCreatedByInputSchema;
