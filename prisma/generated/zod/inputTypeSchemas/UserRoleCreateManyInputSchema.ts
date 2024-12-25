import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserRoleCreateManyInputSchema: z.ZodType<Prisma.UserRoleCreateManyInput> = z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  roleId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default UserRoleCreateManyInputSchema;
