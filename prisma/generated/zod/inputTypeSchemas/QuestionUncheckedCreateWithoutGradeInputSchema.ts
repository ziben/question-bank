import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagUncheckedCreateNestedManyWithoutQuestionInputSchema } from './QuestionTagUncheckedCreateNestedManyWithoutQuestionInputSchema';

export const QuestionUncheckedCreateWithoutGradeInputSchema: z.ZodType<Prisma.QuestionUncheckedCreateWithoutGradeInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string(),
  answer: z.string().optional().nullable(),
  analysis: z.string().optional().nullable(),
  difficulty: z.number().int().optional(),
  status: z.string().optional(),
  categoryId: z.number().int(),
  subjectId: z.number().int(),
  sourceId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.number().int(),
  updaterId: z.number().int(),
  tags: z.lazy(() => QuestionTagUncheckedCreateNestedManyWithoutQuestionInputSchema).optional()
}).strict();

export default QuestionUncheckedCreateWithoutGradeInputSchema;
