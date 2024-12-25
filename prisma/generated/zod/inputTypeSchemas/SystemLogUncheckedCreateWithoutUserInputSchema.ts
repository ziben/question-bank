import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SystemLogUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SystemLogUncheckedCreateWithoutUserInput> = z.object({
  id: z.number().int().optional(),
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

export default SystemLogUncheckedCreateWithoutUserInputSchema;
