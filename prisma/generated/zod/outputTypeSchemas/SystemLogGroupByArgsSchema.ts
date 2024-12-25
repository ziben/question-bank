import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemLogWhereInputSchema } from '../inputTypeSchemas/SystemLogWhereInputSchema'
import { SystemLogOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SystemLogOrderByWithAggregationInputSchema'
import { SystemLogScalarFieldEnumSchema } from '../inputTypeSchemas/SystemLogScalarFieldEnumSchema'
import { SystemLogScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SystemLogScalarWhereWithAggregatesInputSchema'

export const SystemLogGroupByArgsSchema: z.ZodType<Prisma.SystemLogGroupByArgs> = z.object({
  where: SystemLogWhereInputSchema.optional(),
  orderBy: z.union([ SystemLogOrderByWithAggregationInputSchema.array(),SystemLogOrderByWithAggregationInputSchema ]).optional(),
  by: SystemLogScalarFieldEnumSchema.array(),
  having: SystemLogScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SystemLogGroupByArgsSchema;
