import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutCreatedPermissionsInputSchema } from './UserUpdateWithoutCreatedPermissionsInputSchema';
import { UserUncheckedUpdateWithoutCreatedPermissionsInputSchema } from './UserUncheckedUpdateWithoutCreatedPermissionsInputSchema';
import { UserCreateWithoutCreatedPermissionsInputSchema } from './UserCreateWithoutCreatedPermissionsInputSchema';
import { UserUncheckedCreateWithoutCreatedPermissionsInputSchema } from './UserUncheckedCreateWithoutCreatedPermissionsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutCreatedPermissionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutCreatedPermissionsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutCreatedPermissionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedPermissionsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedPermissionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedPermissionsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutCreatedPermissionsInputSchema;
