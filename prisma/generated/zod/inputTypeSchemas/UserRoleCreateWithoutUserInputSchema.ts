import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateNestedOneWithoutUsersInputSchema } from './RoleCreateNestedOneWithoutUsersInputSchema';

export const UserRoleCreateWithoutUserInputSchema: z.ZodType<Prisma.UserRoleCreateWithoutUserInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  role: z.lazy(() => RoleCreateNestedOneWithoutUsersInputSchema)
}).strict();

export default UserRoleCreateWithoutUserInputSchema;
