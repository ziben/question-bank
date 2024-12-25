import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTagCreateManyInputSchema } from '../inputTypeSchemas/QuestionTagCreateManyInputSchema'

export const QuestionTagCreateManyArgsSchema: z.ZodType<Prisma.QuestionTagCreateManyArgs> = z.object({
  data: z.union([ QuestionTagCreateManyInputSchema,QuestionTagCreateManyInputSchema.array() ]),
}).strict() ;

export default QuestionTagCreateManyArgsSchema;
