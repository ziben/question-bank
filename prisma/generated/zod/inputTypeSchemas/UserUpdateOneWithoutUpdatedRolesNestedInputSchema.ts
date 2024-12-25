import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUpdatedRolesInputSchema } from './UserCreateWithoutUpdatedRolesInputSchema';
import { UserUncheckedCreateWithoutUpdatedRolesInputSchema } from './UserUncheckedCreateWithoutUpdatedRolesInputSchema';
import { UserCreateOrConnectWithoutUpdatedRolesInputSchema } from './UserCreateOrConnectWithoutUpdatedRolesInputSchema';
import { UserUpsertWithoutUpdatedRolesInputSchema } from './UserUpsertWithoutUpdatedRolesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutUpdatedRolesInputSchema } from './UserUpdateToOneWithWhereWithoutUpdatedRolesInputSchema';
import { UserUpdateWithoutUpdatedRolesInputSchema } from './UserUpdateWithoutUpdatedRolesInputSchema';
import { UserUncheckedUpdateWithoutUpdatedRolesInputSchema } from './UserUncheckedUpdateWithoutUpdatedRolesInputSchema';

export const UserUpdateOneWithoutUpdatedRolesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutUpdatedRolesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedRolesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedRolesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdatedRolesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutUpdatedRolesInputSchema),z.lazy(() => UserUpdateWithoutUpdatedRolesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedRolesInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutUpdatedRolesNestedInputSchema;
