import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserRoleCreateManyRoleInputSchema: z.ZodType<Prisma.UserRoleCreateManyRoleInput> = z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default UserRoleCreateManyRoleInputSchema;
