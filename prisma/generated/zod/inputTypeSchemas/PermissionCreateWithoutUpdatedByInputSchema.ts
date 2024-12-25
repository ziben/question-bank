import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutCreatedPermissionsInputSchema } from './UserCreateNestedOneWithoutCreatedPermissionsInputSchema';

export const PermissionCreateWithoutUpdatedByInputSchema: z.ZodType<Prisma.PermissionCreateWithoutUpdatedByInput> = z.object({
  groupName: z.string(),
  groupCode: z.string(),
  actionName: z.string(),
  actionCode: z.string(),
  code: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedPermissionsInputSchema)
}).strict();

export default PermissionCreateWithoutUpdatedByInputSchema;
