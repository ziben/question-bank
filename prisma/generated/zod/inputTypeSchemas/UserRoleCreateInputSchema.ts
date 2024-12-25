import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutRolesInputSchema } from './UserCreateNestedOneWithoutRolesInputSchema';
import { RoleCreateNestedOneWithoutUsersInputSchema } from './RoleCreateNestedOneWithoutUsersInputSchema';

export const UserRoleCreateInputSchema: z.ZodType<Prisma.UserRoleCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutRolesInputSchema),
  role: z.lazy(() => RoleCreateNestedOneWithoutUsersInputSchema)
}).strict();

export default UserRoleCreateInputSchema;
