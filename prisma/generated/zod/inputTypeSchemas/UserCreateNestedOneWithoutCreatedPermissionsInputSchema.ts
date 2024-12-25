import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCreatedPermissionsInputSchema } from './UserCreateWithoutCreatedPermissionsInputSchema';
import { UserUncheckedCreateWithoutCreatedPermissionsInputSchema } from './UserUncheckedCreateWithoutCreatedPermissionsInputSchema';
import { UserCreateOrConnectWithoutCreatedPermissionsInputSchema } from './UserCreateOrConnectWithoutCreatedPermissionsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutCreatedPermissionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreatedPermissionsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedPermissionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedPermissionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedPermissionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutCreatedPermissionsInputSchema;
