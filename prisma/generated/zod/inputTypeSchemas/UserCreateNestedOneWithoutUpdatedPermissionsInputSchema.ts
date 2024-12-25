import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUpdatedPermissionsInputSchema } from './UserCreateWithoutUpdatedPermissionsInputSchema';
import { UserUncheckedCreateWithoutUpdatedPermissionsInputSchema } from './UserUncheckedCreateWithoutUpdatedPermissionsInputSchema';
import { UserCreateOrConnectWithoutUpdatedPermissionsInputSchema } from './UserCreateOrConnectWithoutUpdatedPermissionsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutUpdatedPermissionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUpdatedPermissionsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedPermissionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedPermissionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedPermissionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutUpdatedPermissionsInputSchema;
