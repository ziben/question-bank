import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTagWhereInputSchema } from '../inputTypeSchemas/QuestionTagWhereInputSchema'
import { QuestionTagOrderByWithAggregationInputSchema } from '../inputTypeSchemas/QuestionTagOrderByWithAggregationInputSchema'
import { QuestionTagScalarFieldEnumSchema } from '../inputTypeSchemas/QuestionTagScalarFieldEnumSchema'
import { QuestionTagScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/QuestionTagScalarWhereWithAggregatesInputSchema'

export const QuestionTagGroupByArgsSchema: z.ZodType<Prisma.QuestionTagGroupByArgs> = z.object({
  where: QuestionTagWhereInputSchema.optional(),
  orderBy: z.union([ QuestionTagOrderByWithAggregationInputSchema.array(),QuestionTagOrderByWithAggregationInputSchema ]).optional(),
  by: QuestionTagScalarFieldEnumSchema.array(),
  having: QuestionTagScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default QuestionTagGroupByArgsSchema;
