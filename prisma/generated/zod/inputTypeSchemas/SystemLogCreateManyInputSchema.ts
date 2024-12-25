import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SystemLogCreateManyInputSchema: z.ZodType<Prisma.SystemLogCreateManyInput> = z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  module: z.string(),
  action: z.string(),
  target: z.string(),
  targetId: z.string(),
  detail: z.string().optional().nullable(),
  ip: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default SystemLogCreateManyInputSchema;
