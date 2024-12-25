import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionWhereInputSchema } from '../inputTypeSchemas/QuestionWhereInputSchema'

export const QuestionDeleteManyArgsSchema: z.ZodType<Prisma.QuestionDeleteManyArgs> = z.object({
  where: QuestionWhereInputSchema.optional(),
}).strict() ;

export default QuestionDeleteManyArgsSchema;
