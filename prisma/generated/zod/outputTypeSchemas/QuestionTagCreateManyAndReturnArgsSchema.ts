import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTagCreateManyInputSchema } from '../inputTypeSchemas/QuestionTagCreateManyInputSchema'

export const QuestionTagCreateManyAndReturnArgsSchema: z.ZodType<Prisma.QuestionTagCreateManyAndReturnArgs> = z.object({
  data: z.union([ QuestionTagCreateManyInputSchema,QuestionTagCreateManyInputSchema.array() ]),
}).strict() ;

export default QuestionTagCreateManyAndReturnArgsSchema;
