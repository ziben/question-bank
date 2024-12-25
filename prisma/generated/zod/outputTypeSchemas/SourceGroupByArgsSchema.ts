import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SourceWhereInputSchema } from '../inputTypeSchemas/SourceWhereInputSchema'
import { SourceOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SourceOrderByWithAggregationInputSchema'
import { SourceScalarFieldEnumSchema } from '../inputTypeSchemas/SourceScalarFieldEnumSchema'
import { SourceScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SourceScalarWhereWithAggregatesInputSchema'

export const SourceGroupByArgsSchema: z.ZodType<Prisma.SourceGroupByArgs> = z.object({
  where: SourceWhereInputSchema.optional(),
  orderBy: z.union([ SourceOrderByWithAggregationInputSchema.array(),SourceOrderByWithAggregationInputSchema ]).optional(),
  by: SourceScalarFieldEnumSchema.array(),
  having: SourceScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SourceGroupByArgsSchema;
