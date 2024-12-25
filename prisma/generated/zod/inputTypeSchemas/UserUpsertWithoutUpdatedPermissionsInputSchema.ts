import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutUpdatedPermissionsInputSchema } from './UserUpdateWithoutUpdatedPermissionsInputSchema';
import { UserUncheckedUpdateWithoutUpdatedPermissionsInputSchema } from './UserUncheckedUpdateWithoutUpdatedPermissionsInputSchema';
import { UserCreateWithoutUpdatedPermissionsInputSchema } from './UserCreateWithoutUpdatedPermissionsInputSchema';
import { UserUncheckedCreateWithoutUpdatedPermissionsInputSchema } from './UserUncheckedCreateWithoutUpdatedPermissionsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutUpdatedPermissionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutUpdatedPermissionsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutUpdatedPermissionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedPermissionsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedPermissionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedPermissionsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutUpdatedPermissionsInputSchema;
