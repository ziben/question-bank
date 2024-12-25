import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const QuestionCreateManySourceInputSchema: z.ZodType<Prisma.QuestionCreateManySourceInput> = z.object({
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
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.number().int(),
  updaterId: z.number().int()
}).strict();

export default QuestionCreateManySourceInputSchema;
