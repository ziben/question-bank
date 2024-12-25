import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserRoleCreateManyUserInputSchema: z.ZodType<Prisma.UserRoleCreateManyUserInput> = z.object({
  id: z.number().int().optional(),
  roleId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default UserRoleCreateManyUserInputSchema;
