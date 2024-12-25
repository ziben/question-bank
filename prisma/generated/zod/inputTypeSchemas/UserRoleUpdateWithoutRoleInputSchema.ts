import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutRolesNestedInputSchema } from './UserUpdateOneRequiredWithoutRolesNestedInputSchema';

export const UserRoleUpdateWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleUpdateWithoutRoleInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutRolesNestedInputSchema).optional()
}).strict();

export default UserRoleUpdateWithoutRoleInputSchema;
