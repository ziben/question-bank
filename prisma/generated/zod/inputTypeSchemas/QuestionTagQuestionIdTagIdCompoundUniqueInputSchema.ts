import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const QuestionTagQuestionIdTagIdCompoundUniqueInputSchema: z.ZodType<Prisma.QuestionTagQuestionIdTagIdCompoundUniqueInput> = z.object({
  questionId: z.number(),
  tagId: z.number()
}).strict();

export default QuestionTagQuestionIdTagIdCompoundUniqueInputSchema;
