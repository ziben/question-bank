import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutUpdatedPermissionsInputSchema } from './UserCreateWithoutUpdatedPermissionsInputSchema';
import { UserUncheckedCreateWithoutUpdatedPermissionsInputSchema } from './UserUncheckedCreateWithoutUpdatedPermissionsInputSchema';

export const UserCreateOrConnectWithoutUpdatedPermissionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUpdatedPermissionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedPermissionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedPermissionsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutUpdatedPermissionsInputSchema;
