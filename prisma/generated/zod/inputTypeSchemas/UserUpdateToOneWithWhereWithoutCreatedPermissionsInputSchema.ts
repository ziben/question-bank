import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutCreatedPermissionsInputSchema } from './UserUpdateWithoutCreatedPermissionsInputSchema';
import { UserUncheckedUpdateWithoutCreatedPermissionsInputSchema } from './UserUncheckedUpdateWithoutCreatedPermissionsInputSchema';

export const UserUpdateToOneWithWhereWithoutCreatedPermissionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatedPermissionsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutCreatedPermissionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedPermissionsInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutCreatedPermissionsInputSchema;
