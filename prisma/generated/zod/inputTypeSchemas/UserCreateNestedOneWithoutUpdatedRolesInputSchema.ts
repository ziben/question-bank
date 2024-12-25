import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUpdatedRolesInputSchema } from './UserCreateWithoutUpdatedRolesInputSchema';
import { UserUncheckedCreateWithoutUpdatedRolesInputSchema } from './UserUncheckedCreateWithoutUpdatedRolesInputSchema';
import { UserCreateOrConnectWithoutUpdatedRolesInputSchema } from './UserCreateOrConnectWithoutUpdatedRolesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutUpdatedRolesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUpdatedRolesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedRolesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutUpdatedRolesInputSchema;
