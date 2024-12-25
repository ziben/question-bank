import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { UserUpdateOneWithoutCreatedRolesNestedInputSchema } from './UserUpdateOneWithoutCreatedRolesNestedInputSchema';
import { UserUpdateOneWithoutUpdatedRolesNestedInputSchema } from './UserUpdateOneWithoutUpdatedRolesNestedInputSchema';

export const RoleUpdateWithoutUsersInputSchema: z.ZodType<Prisma.RoleUpdateWithoutUsersInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  permissions: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isDeleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatedRolesNestedInputSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdatedRolesNestedInputSchema).optional()
}).strict();

export default RoleUpdateWithoutUsersInputSchema;
