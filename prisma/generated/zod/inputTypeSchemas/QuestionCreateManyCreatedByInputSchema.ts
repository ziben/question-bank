import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const QuestionCreateManyCreatedByInputSchema: z.ZodType<Prisma.QuestionCreateManyCreatedByInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string(),
  answer: z.string().optional().nullable(),
  analysis: z.string().optional().nullable(),
  difficulty: z.number().int().optional(),
  status: z.string().optional(),
  categoryId: z.number().int(),
  subjectId: z.number().int(),
  gradeId: z.number().int(),
  sourceId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  updaterId: z.number().int()
}).strict();

export default QuestionCreateManyCreatedByInputSchema;
