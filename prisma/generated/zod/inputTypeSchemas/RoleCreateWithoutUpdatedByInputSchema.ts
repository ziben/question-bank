import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleCreateNestedManyWithoutRoleInputSchema } from './UserRoleCreateNestedManyWithoutRoleInputSchema';
import { UserCreateNestedOneWithoutCreatedRolesInputSchema } from './UserCreateNestedOneWithoutCreatedRolesInputSchema';

export const RoleCreateWithoutUpdatedByInputSchema: z.ZodType<Prisma.RoleCreateWithoutUpdatedByInput> = z.object({
  name: z.string(),
  code: z.string(),
  description: z.string().optional().nullable(),
  permissions: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  users: z.lazy(() => UserRoleCreateNestedManyWithoutRoleInputSchema).optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedRolesInputSchema).optional()
}).strict();

export default RoleCreateWithoutUpdatedByInputSchema;
