import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutCreatedPermissionsInputSchema } from './UserCreateWithoutCreatedPermissionsInputSchema';
import { UserUncheckedCreateWithoutCreatedPermissionsInputSchema } from './UserUncheckedCreateWithoutCreatedPermissionsInputSchema';

export const UserCreateOrConnectWithoutCreatedPermissionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreatedPermissionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedPermissionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedPermissionsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutCreatedPermissionsInputSchema;
