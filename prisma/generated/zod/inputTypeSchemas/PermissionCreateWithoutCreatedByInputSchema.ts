import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutUpdatedPermissionsInputSchema } from './UserCreateNestedOneWithoutUpdatedPermissionsInputSchema';

export const PermissionCreateWithoutCreatedByInputSchema: z.ZodType<Prisma.PermissionCreateWithoutCreatedByInput> = z.object({
  groupName: z.string(),
  groupCode: z.string(),
  actionName: z.string(),
  actionCode: z.string(),
  code: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedPermissionsInputSchema)
}).strict();

export default PermissionCreateWithoutCreatedByInputSchema;
