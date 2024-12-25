import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleCreateManyCreatedByInputSchema: z.ZodType<Prisma.RoleCreateManyCreatedByInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  code: z.string(),
  description: z.string().optional().nullable(),
  permissions: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  updaterId: z.number().int().optional().nullable()
}).strict();

export default RoleCreateManyCreatedByInputSchema;
