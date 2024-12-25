import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemLogIncludeSchema } from '../inputTypeSchemas/SystemLogIncludeSchema'
import { SystemLogCreateInputSchema } from '../inputTypeSchemas/SystemLogCreateInputSchema'
import { SystemLogUncheckedCreateInputSchema } from '../inputTypeSchemas/SystemLogUncheckedCreateInputSchema'
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

export const SystemLogCreateArgsSchema: z.ZodType<Prisma.SystemLogCreateArgs> = z.object({
  select: SystemLogSelectSchema.optional(),
  include: SystemLogIncludeSchema.optional(),
  data: z.union([ SystemLogCreateInputSchema,SystemLogUncheckedCreateInputSchema ]),
}).strict() ;

export default SystemLogCreateArgsSchema;
