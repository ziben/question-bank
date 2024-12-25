import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionCreateManyInputSchema } from '../inputTypeSchemas/QuestionCreateManyInputSchema'

export const QuestionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.QuestionCreateManyAndReturnArgs> = z.object({
  data: z.union([ QuestionCreateManyInputSchema,QuestionCreateManyInputSchema.array() ]),
}).strict() ;

export default QuestionCreateManyAndReturnArgsSchema;
