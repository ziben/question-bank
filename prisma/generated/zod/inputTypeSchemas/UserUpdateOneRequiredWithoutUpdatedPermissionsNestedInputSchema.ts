import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUpdatedPermissionsInputSchema } from './UserCreateWithoutUpdatedPermissionsInputSchema';
import { UserUncheckedCreateWithoutUpdatedPermissionsInputSchema } from './UserUncheckedCreateWithoutUpdatedPermissionsInputSchema';
import { UserCreateOrConnectWithoutUpdatedPermissionsInputSchema } from './UserCreateOrConnectWithoutUpdatedPermissionsInputSchema';
import { UserUpsertWithoutUpdatedPermissionsInputSchema } from './UserUpsertWithoutUpdatedPermissionsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutUpdatedPermissionsInputSchema } from './UserUpdateToOneWithWhereWithoutUpdatedPermissionsInputSchema';
import { UserUpdateWithoutUpdatedPermissionsInputSchema } from './UserUpdateWithoutUpdatedPermissionsInputSchema';
import { UserUncheckedUpdateWithoutUpdatedPermissionsInputSchema } from './UserUncheckedUpdateWithoutUpdatedPermissionsInputSchema';

export const UserUpdateOneRequiredWithoutUpdatedPermissionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutUpdatedPermissionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedPermissionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedPermissionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedPermissionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdatedPermissionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutUpdatedPermissionsInputSchema),z.lazy(() => UserUpdateWithoutUpdatedPermissionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedPermissionsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutUpdatedPermissionsNestedInputSchema;
