import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SubjectCreateManyUpdatedByInputSchema: z.ZodType<Prisma.SubjectCreateManyUpdatedByInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.number().int()
}).strict();

export default SubjectCreateManyUpdatedByInputSchema;
