import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const QuestionCountOutputTypeSelectSchema: z.ZodType<Prisma.QuestionCountOutputTypeSelect> = z.object({
  tags: z.boolean().optional(),
}).strict();

export default QuestionCountOutputTypeSelectSchema;
