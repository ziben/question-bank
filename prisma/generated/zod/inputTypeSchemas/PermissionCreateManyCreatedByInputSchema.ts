import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PermissionCreateManyCreatedByInputSchema: z.ZodType<Prisma.PermissionCreateManyCreatedByInput> = z.object({
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
  updaterId: z.number().int()
}).strict();

export default PermissionCreateManyCreatedByInputSchema;
