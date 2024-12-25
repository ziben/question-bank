import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutUpdatedPermissionsInputSchema } from './UserUpdateWithoutUpdatedPermissionsInputSchema';
import { UserUncheckedUpdateWithoutUpdatedPermissionsInputSchema } from './UserUncheckedUpdateWithoutUpdatedPermissionsInputSchema';

export const UserUpdateToOneWithWhereWithoutUpdatedPermissionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUpdatedPermissionsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutUpdatedPermissionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedPermissionsInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutUpdatedPermissionsInputSchema;
