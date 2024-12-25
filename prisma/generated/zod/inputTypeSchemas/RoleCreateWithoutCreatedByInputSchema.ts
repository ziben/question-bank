import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleCreateNestedManyWithoutRoleInputSchema } from './UserRoleCreateNestedManyWithoutRoleInputSchema';
import { UserCreateNestedOneWithoutUpdatedRolesInputSchema } from './UserCreateNestedOneWithoutUpdatedRolesInputSchema';

export const RoleCreateWithoutCreatedByInputSchema: z.ZodType<Prisma.RoleCreateWithoutCreatedByInput> = z.object({
  name: z.string(),
  code: z.string(),
  description: z.string().optional().nullable(),
  permissions: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  users: z.lazy(() => UserRoleCreateNestedManyWithoutRoleInputSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedRolesInputSchema).optional()
}).strict();

export default RoleCreateWithoutCreatedByInputSchema;
