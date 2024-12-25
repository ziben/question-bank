import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTagWhereInputSchema } from '../inputTypeSchemas/QuestionTagWhereInputSchema'
import { QuestionTagOrderByWithRelationInputSchema } from '../inputTypeSchemas/QuestionTagOrderByWithRelationInputSchema'
import { QuestionTagWhereUniqueInputSchema } from '../inputTypeSchemas/QuestionTagWhereUniqueInputSchema'

export const QuestionTagAggregateArgsSchema: z.ZodType<Prisma.QuestionTagAggregateArgs> = z.object({
  where: QuestionTagWhereInputSchema.optional(),
  orderBy: z.union([ QuestionTagOrderByWithRelationInputSchema.array(),QuestionTagOrderByWithRelationInputSchema ]).optional(),
  cursor: QuestionTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default QuestionTagAggregateArgsSchema;
