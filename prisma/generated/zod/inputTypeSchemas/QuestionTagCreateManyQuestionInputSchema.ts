import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const QuestionTagCreateManyQuestionInputSchema: z.ZodType<Prisma.QuestionTagCreateManyQuestionInput> = z.object({
  id: z.number().int().optional(),
  tagId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.number().int().optional().nullable(),
  updaterId: z.number().int().optional().nullable()
}).strict();

export default QuestionTagCreateManyQuestionInputSchema;
