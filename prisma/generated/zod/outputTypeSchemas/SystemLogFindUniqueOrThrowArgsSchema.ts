import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemLogIncludeSchema } from '../inputTypeSchemas/SystemLogIncludeSchema'
import { SystemLogWhereUniqueInputSchema } from '../inputTypeSchemas/SystemLogWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SystemLogSelectSchema: z.ZodType<Prisma.SystemLogSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  module: z.boolean().optional(),
  action: z.boolean().optional(),
  target: z.boolean().optional(),
  targetId: z.boolean().optional(),
  detail: z.boolean().optional(),
  ip: z.boolean().optional(),
  userAgent: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const SystemLogFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SystemLogFindUniqueOrThrowArgs> = z.object({
  select: SystemLogSelectSchema.optional(),
  include: SystemLogIncludeSchema.optional(),
  where: SystemLogWhereUniqueInputSchema,
}).strict() ;

export default SystemLogFindUniqueOrThrowArgsSchema;
