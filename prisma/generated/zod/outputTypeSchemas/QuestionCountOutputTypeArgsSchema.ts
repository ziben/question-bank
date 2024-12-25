import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionCountOutputTypeSelectSchema } from './QuestionCountOutputTypeSelectSchema';

export const QuestionCountOutputTypeArgsSchema: z.ZodType<Prisma.QuestionCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => QuestionCountOutputTypeSelectSchema).nullish(),
}).strict();

export default QuestionCountOutputTypeSelectSchema;
