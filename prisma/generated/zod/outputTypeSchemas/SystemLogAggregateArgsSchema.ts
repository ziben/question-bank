import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemLogWhereInputSchema } from '../inputTypeSchemas/SystemLogWhereInputSchema'
import { SystemLogOrderByWithRelationInputSchema } from '../inputTypeSchemas/SystemLogOrderByWithRelationInputSchema'
import { SystemLogWhereUniqueInputSchema } from '../inputTypeSchemas/SystemLogWhereUniqueInputSchema'

export const SystemLogAggregateArgsSchema: z.ZodType<Prisma.SystemLogAggregateArgs> = z.object({
  where: SystemLogWhereInputSchema.optional(),
  orderBy: z.union([ SystemLogOrderByWithRelationInputSchema.array(),SystemLogOrderByWithRelationInputSchema ]).optional(),
  cursor: SystemLogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SystemLogAggregateArgsSchema;
