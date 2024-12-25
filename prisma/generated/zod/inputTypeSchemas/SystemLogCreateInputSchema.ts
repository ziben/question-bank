import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutSystemLogsInputSchema } from './UserCreateNestedOneWithoutSystemLogsInputSchema';

export const SystemLogCreateInputSchema: z.ZodType<Prisma.SystemLogCreateInput> = z.object({
  module: z.string(),
  action: z.string(),
  target: z.string(),
  targetId: z.string(),
  detail: z.string().optional().nullable(),
  ip: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutSystemLogsInputSchema)
}).strict();

export default SystemLogCreateInputSchema;
