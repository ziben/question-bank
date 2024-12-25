import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserRoleUncheckedCreateInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  roleId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default UserRoleUncheckedCreateInputSchema;
