import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const QuestionTagUncheckedCreateWithoutUpdatedByInputSchema: z.ZodType<Prisma.QuestionTagUncheckedCreateWithoutUpdatedByInput> = z.object({
  id: z.number().int().optional(),
  questionId: z.number().int(),
  tagId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.number().int().optional().nullable()
}).strict();

export default QuestionTagUncheckedCreateWithoutUpdatedByInputSchema;
