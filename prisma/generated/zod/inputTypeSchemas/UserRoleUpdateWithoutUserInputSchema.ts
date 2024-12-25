import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { RoleUpdateOneRequiredWithoutUsersNestedInputSchema } from './RoleUpdateOneRequiredWithoutUsersNestedInputSchema';

export const UserRoleUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserRoleUpdateWithoutUserInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.lazy(() => RoleUpdateOneRequiredWithoutUsersNestedInputSchema).optional()
}).strict();

export default UserRoleUpdateWithoutUserInputSchema;
