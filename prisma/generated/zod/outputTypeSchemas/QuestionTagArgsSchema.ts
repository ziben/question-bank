import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTagSelectSchema } from '../inputTypeSchemas/QuestionTagSelectSchema';
import { QuestionTagIncludeSchema } from '../inputTypeSchemas/QuestionTagIncludeSchema';

export const QuestionTagArgsSchema: z.ZodType<Prisma.QuestionTagDefaultArgs> = z.object({
  select: z.lazy(() => QuestionTagSelectSchema).optional(),
  include: z.lazy(() => QuestionTagIncludeSchema).optional(),
}).strict();

export default QuestionTagArgsSchema;
