import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutCreatedRolesInputSchema } from './UserCreateNestedOneWithoutCreatedRolesInputSchema';
import { UserCreateNestedOneWithoutUpdatedRolesInputSchema } from './UserCreateNestedOneWithoutUpdatedRolesInputSchema';

export const RoleCreateWithoutUsersInputSchema: z.ZodType<Prisma.RoleCreateWithoutUsersInput> = z.object({
  name: z.string(),
  code: z.string(),
  description: z.string().optional().nullable(),
  permissions: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedRolesInputSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedRolesInputSchema).optional()
}).strict();

export default RoleCreateWithoutUsersInputSchema;
