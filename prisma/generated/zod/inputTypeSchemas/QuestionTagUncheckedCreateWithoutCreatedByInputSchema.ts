import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const QuestionTagUncheckedCreateWithoutCreatedByInputSchema: z.ZodType<Prisma.QuestionTagUncheckedCreateWithoutCreatedByInput> = z.object({
  id: z.number().int().optional(),
  questionId: z.number().int(),
  tagId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  updaterId: z.number().int().optional().nullable()
}).strict();

export default QuestionTagUncheckedCreateWithoutCreatedByInputSchema;
