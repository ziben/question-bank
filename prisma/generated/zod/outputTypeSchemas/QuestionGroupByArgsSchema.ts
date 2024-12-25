import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionWhereInputSchema } from '../inputTypeSchemas/QuestionWhereInputSchema'
import { QuestionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/QuestionOrderByWithAggregationInputSchema'
import { QuestionScalarFieldEnumSchema } from '../inputTypeSchemas/QuestionScalarFieldEnumSchema'
import { QuestionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/QuestionScalarWhereWithAggregatesInputSchema'

export const QuestionGroupByArgsSchema: z.ZodType<Prisma.QuestionGroupByArgs> = z.object({
  where: QuestionWhereInputSchema.optional(),
  orderBy: z.union([ QuestionOrderByWithAggregationInputSchema.array(),QuestionOrderByWithAggregationInputSchema ]).optional(),
  by: QuestionScalarFieldEnumSchema.array(),
  having: QuestionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default QuestionGroupByArgsSchema;
