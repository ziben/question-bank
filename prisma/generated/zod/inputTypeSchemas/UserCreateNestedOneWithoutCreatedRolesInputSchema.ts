import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCreatedRolesInputSchema } from './UserCreateWithoutCreatedRolesInputSchema';
import { UserUncheckedCreateWithoutCreatedRolesInputSchema } from './UserUncheckedCreateWithoutCreatedRolesInputSchema';
import { UserCreateOrConnectWithoutCreatedRolesInputSchema } from './UserCreateOrConnectWithoutCreatedRolesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutCreatedRolesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreatedRolesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedRolesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutCreatedRolesInputSchema;
