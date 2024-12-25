import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionSelectSchema } from '../inputTypeSchemas/QuestionSelectSchema';
import { QuestionIncludeSchema } from '../inputTypeSchemas/QuestionIncludeSchema';

export const QuestionArgsSchema: z.ZodType<Prisma.QuestionDefaultArgs> = z.object({
  select: z.lazy(() => QuestionSelectSchema).optional(),
  include: z.lazy(() => QuestionIncludeSchema).optional(),
}).strict();

export default QuestionArgsSchema;
