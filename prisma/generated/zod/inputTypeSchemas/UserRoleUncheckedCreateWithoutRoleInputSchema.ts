import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserRoleUncheckedCreateWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateWithoutRoleInput> = z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default UserRoleUncheckedCreateWithoutRoleInputSchema;
