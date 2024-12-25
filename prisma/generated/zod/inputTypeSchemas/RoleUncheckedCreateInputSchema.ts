import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleUncheckedCreateNestedManyWithoutRoleInputSchema } from './UserRoleUncheckedCreateNestedManyWithoutRoleInputSchema';

export const RoleUncheckedCreateInputSchema: z.ZodType<Prisma.RoleUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  code: z.string(),
  description: z.string().optional().nullable(),
  permissions: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.number().int().optional().nullable(),
  updaterId: z.number().int().optional().nullable(),
  users: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutRoleInputSchema).optional()
}).strict();

export default RoleUncheckedCreateInputSchema;
