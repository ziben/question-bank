import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutUpdatedRolesInputSchema } from './UserUpdateWithoutUpdatedRolesInputSchema';
import { UserUncheckedUpdateWithoutUpdatedRolesInputSchema } from './UserUncheckedUpdateWithoutUpdatedRolesInputSchema';
import { UserCreateWithoutUpdatedRolesInputSchema } from './UserCreateWithoutUpdatedRolesInputSchema';
import { UserUncheckedCreateWithoutUpdatedRolesInputSchema } from './UserUncheckedCreateWithoutUpdatedRolesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutUpdatedRolesInputSchema: z.ZodType<Prisma.UserUpsertWithoutUpdatedRolesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutUpdatedRolesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedRolesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedRolesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutUpdatedRolesInputSchema;
