import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutRolesInputSchema } from './UserCreateNestedOneWithoutRolesInputSchema';

export const UserRoleCreateWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleCreateWithoutRoleInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutRolesInputSchema)
}).strict();

export default UserRoleCreateWithoutRoleInputSchema;
