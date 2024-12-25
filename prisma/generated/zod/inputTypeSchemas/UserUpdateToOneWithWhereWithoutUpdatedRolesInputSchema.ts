import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutUpdatedRolesInputSchema } from './UserUpdateWithoutUpdatedRolesInputSchema';
import { UserUncheckedUpdateWithoutUpdatedRolesInputSchema } from './UserUncheckedUpdateWithoutUpdatedRolesInputSchema';

export const UserUpdateToOneWithWhereWithoutUpdatedRolesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUpdatedRolesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutUpdatedRolesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedRolesInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutUpdatedRolesInputSchema;
