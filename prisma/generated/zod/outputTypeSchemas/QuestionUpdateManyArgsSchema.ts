import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionUpdateManyMutationInputSchema } from '../inputTypeSchemas/QuestionUpdateManyMutationInputSchema'
import { QuestionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/QuestionUncheckedUpdateManyInputSchema'
import { QuestionWhereInputSchema } from '../inputTypeSchemas/QuestionWhereInputSchema'

export const QuestionUpdateManyArgsSchema: z.ZodType<Prisma.QuestionUpdateManyArgs> = z.object({
  data: z.union([ QuestionUpdateManyMutationInputSchema,QuestionUncheckedUpdateManyInputSchema ]),
  where: QuestionWhereInputSchema.optional(),
}).strict() ;

export default QuestionUpdateManyArgsSchema;
