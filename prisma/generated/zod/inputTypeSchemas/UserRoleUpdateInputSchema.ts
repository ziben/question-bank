import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutRolesNestedInputSchema } from './UserUpdateOneRequiredWithoutRolesNestedInputSchema';
import { RoleUpdateOneRequiredWithoutUsersNestedInputSchema } from './RoleUpdateOneRequiredWithoutUsersNestedInputSchema';

export const UserRoleUpdateInputSchema: z.ZodType<Prisma.UserRoleUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutRolesNestedInputSchema).optional(),
  role: z.lazy(() => RoleUpdateOneRequiredWithoutUsersNestedInputSchema).optional()
}).strict();

export default UserRoleUpdateInputSchema;
