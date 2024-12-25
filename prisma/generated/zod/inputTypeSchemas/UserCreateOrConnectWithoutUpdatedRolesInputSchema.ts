import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutUpdatedRolesInputSchema } from './UserCreateWithoutUpdatedRolesInputSchema';
import { UserUncheckedCreateWithoutUpdatedRolesInputSchema } from './UserUncheckedCreateWithoutUpdatedRolesInputSchema';

export const UserCreateOrConnectWithoutUpdatedRolesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUpdatedRolesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedRolesInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutUpdatedRolesInputSchema;
