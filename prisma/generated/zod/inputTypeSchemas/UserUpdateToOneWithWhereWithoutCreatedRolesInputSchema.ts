import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutCreatedRolesInputSchema } from './UserUpdateWithoutCreatedRolesInputSchema';
import { UserUncheckedUpdateWithoutCreatedRolesInputSchema } from './UserUncheckedUpdateWithoutCreatedRolesInputSchema';

export const UserUpdateToOneWithWhereWithoutCreatedRolesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatedRolesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutCreatedRolesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedRolesInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutCreatedRolesInputSchema;
