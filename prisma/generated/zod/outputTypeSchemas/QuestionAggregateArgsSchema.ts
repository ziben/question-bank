import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionWhereInputSchema } from '../inputTypeSchemas/QuestionWhereInputSchema'
import { QuestionOrderByWithRelationInputSchema } from '../inputTypeSchemas/QuestionOrderByWithRelationInputSchema'
import { QuestionWhereUniqueInputSchema } from '../inputTypeSchemas/QuestionWhereUniqueInputSchema'

export const QuestionAggregateArgsSchema: z.ZodType<Prisma.QuestionAggregateArgs> = z.object({
  where: QuestionWhereInputSchema.optional(),
  orderBy: z.union([ QuestionOrderByWithRelationInputSchema.array(),QuestionOrderByWithRelationInputSchema ]).optional(),
  cursor: QuestionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default QuestionAggregateArgsSchema;
