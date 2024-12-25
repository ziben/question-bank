import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCreatedPermissionsInputSchema } from './UserCreateWithoutCreatedPermissionsInputSchema';
import { UserUncheckedCreateWithoutCreatedPermissionsInputSchema } from './UserUncheckedCreateWithoutCreatedPermissionsInputSchema';
import { UserCreateOrConnectWithoutCreatedPermissionsInputSchema } from './UserCreateOrConnectWithoutCreatedPermissionsInputSchema';
import { UserUpsertWithoutCreatedPermissionsInputSchema } from './UserUpsertWithoutCreatedPermissionsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutCreatedPermissionsInputSchema } from './UserUpdateToOneWithWhereWithoutCreatedPermissionsInputSchema';
import { UserUpdateWithoutCreatedPermissionsInputSchema } from './UserUpdateWithoutCreatedPermissionsInputSchema';
import { UserUncheckedUpdateWithoutCreatedPermissionsInputSchema } from './UserUncheckedUpdateWithoutCreatedPermissionsInputSchema';

export const UserUpdateOneRequiredWithoutCreatedPermissionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCreatedPermissionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedPermissionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedPermissionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedPermissionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatedPermissionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutCreatedPermissionsInputSchema),z.lazy(() => UserUpdateWithoutCreatedPermissionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedPermissionsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutCreatedPermissionsNestedInputSchema;
