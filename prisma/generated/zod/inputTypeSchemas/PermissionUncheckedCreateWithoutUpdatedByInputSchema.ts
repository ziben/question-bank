import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PermissionUncheckedCreateWithoutUpdatedByInputSchema: z.ZodType<Prisma.PermissionUncheckedCreateWithoutUpdatedByInput> = z.object({
  id: z.number().int().optional(),
  groupName: z.string(),
  groupCode: z.string(),
  actionName: z.string(),
  actionCode: z.string(),
  code: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.number().int()
}).strict();

export default PermissionUncheckedCreateWithoutUpdatedByInputSchema;
