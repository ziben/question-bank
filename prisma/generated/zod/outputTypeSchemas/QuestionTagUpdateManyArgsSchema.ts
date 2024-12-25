import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTagUpdateManyMutationInputSchema } from '../inputTypeSchemas/QuestionTagUpdateManyMutationInputSchema'
import { QuestionTagUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/QuestionTagUncheckedUpdateManyInputSchema'
import { QuestionTagWhereInputSchema } from '../inputTypeSchemas/QuestionTagWhereInputSchema'

export const QuestionTagUpdateManyArgsSchema: z.ZodType<Prisma.QuestionTagUpdateManyArgs> = z.object({
  data: z.union([ QuestionTagUpdateManyMutationInputSchema,QuestionTagUncheckedUpdateManyInputSchema ]),
  where: QuestionTagWhereInputSchema.optional(),
}).strict() ;

export default QuestionTagUpdateManyArgsSchema;
