import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCreatedRolesInputSchema } from './UserCreateWithoutCreatedRolesInputSchema';
import { UserUncheckedCreateWithoutCreatedRolesInputSchema } from './UserUncheckedCreateWithoutCreatedRolesInputSchema';
import { UserCreateOrConnectWithoutCreatedRolesInputSchema } from './UserCreateOrConnectWithoutCreatedRolesInputSchema';
import { UserUpsertWithoutCreatedRolesInputSchema } from './UserUpsertWithoutCreatedRolesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutCreatedRolesInputSchema } from './UserUpdateToOneWithWhereWithoutCreatedRolesInputSchema';
import { UserUpdateWithoutCreatedRolesInputSchema } from './UserUpdateWithoutCreatedRolesInputSchema';
import { UserUncheckedUpdateWithoutCreatedRolesInputSchema } from './UserUncheckedUpdateWithoutCreatedRolesInputSchema';

export const UserUpdateOneWithoutCreatedRolesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutCreatedRolesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedRolesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatedRolesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutCreatedRolesInputSchema),z.lazy(() => UserUpdateWithoutCreatedRolesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedRolesInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutCreatedRolesNestedInputSchema;
