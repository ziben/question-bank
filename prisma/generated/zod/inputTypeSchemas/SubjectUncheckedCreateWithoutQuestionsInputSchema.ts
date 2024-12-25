import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SubjectUncheckedCreateWithoutQuestionsInputSchema: z.ZodType<Prisma.SubjectUncheckedCreateWithoutQuestionsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.number().int(),
  updaterId: z.number().int()
}).strict();

export default SubjectUncheckedCreateWithoutQuestionsInputSchema;
