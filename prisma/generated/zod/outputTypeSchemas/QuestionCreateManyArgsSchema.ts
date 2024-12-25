import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionCreateManyInputSchema } from '../inputTypeSchemas/QuestionCreateManyInputSchema'

export const QuestionCreateManyArgsSchema: z.ZodType<Prisma.QuestionCreateManyArgs> = z.object({
  data: z.union([ QuestionCreateManyInputSchema,QuestionCreateManyInputSchema.array() ]),
}).strict() ;

export default QuestionCreateManyArgsSchema;
