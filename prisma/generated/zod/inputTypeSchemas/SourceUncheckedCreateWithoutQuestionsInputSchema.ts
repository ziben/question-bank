import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SourceUncheckedCreateWithoutQuestionsInputSchema: z.ZodType<Prisma.SourceUncheckedCreateWithoutQuestionsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  type: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.number().int(),
  updaterId: z.number().int()
}).strict();

export default SourceUncheckedCreateWithoutQuestionsInputSchema;
