import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SourceWhereInputSchema } from '../inputTypeSchemas/SourceWhereInputSchema'
import { SourceOrderByWithRelationInputSchema } from '../inputTypeSchemas/SourceOrderByWithRelationInputSchema'
import { SourceWhereUniqueInputSchema } from '../inputTypeSchemas/SourceWhereUniqueInputSchema'

export const SourceAggregateArgsSchema: z.ZodType<Prisma.SourceAggregateArgs> = z.object({
  where: SourceWhereInputSchema.optional(),
  orderBy: z.union([ SourceOrderByWithRelationInputSchema.array(),SourceOrderByWithRelationInputSchema ]).optional(),
  cursor: SourceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SourceAggregateArgsSchema;
