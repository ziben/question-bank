import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutCreatedRolesInputSchema } from './UserCreateWithoutCreatedRolesInputSchema';
import { UserUncheckedCreateWithoutCreatedRolesInputSchema } from './UserUncheckedCreateWithoutCreatedRolesInputSchema';

export const UserCreateOrConnectWithoutCreatedRolesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreatedRolesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedRolesInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutCreatedRolesInputSchema;
