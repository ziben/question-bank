import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTagWhereInputSchema } from '../inputTypeSchemas/QuestionTagWhereInputSchema'

export const QuestionTagDeleteManyArgsSchema: z.ZodType<Prisma.QuestionTagDeleteManyArgs> = z.object({
  where: QuestionTagWhereInputSchema.optional(),
}).strict() ;

export default QuestionTagDeleteManyArgsSchema;
