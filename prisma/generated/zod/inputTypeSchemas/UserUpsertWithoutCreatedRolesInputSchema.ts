import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutCreatedRolesInputSchema } from './UserUpdateWithoutCreatedRolesInputSchema';
import { UserUncheckedUpdateWithoutCreatedRolesInputSchema } from './UserUncheckedUpdateWithoutCreatedRolesInputSchema';
import { UserCreateWithoutCreatedRolesInputSchema } from './UserCreateWithoutCreatedRolesInputSchema';
import { UserUncheckedCreateWithoutCreatedRolesInputSchema } from './UserUncheckedCreateWithoutCreatedRolesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutCreatedRolesInputSchema: z.ZodType<Prisma.UserUpsertWithoutCreatedRolesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutCreatedRolesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedRolesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedRolesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutCreatedRolesInputSchema;
