import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCreatedGradesInputSchema } from './UserCreateWithoutCreatedGradesInputSchema';
import { UserUncheckedCreateWithoutCreatedGradesInputSchema } from './UserUncheckedCreateWithoutCreatedGradesInputSchema';
import { UserCreateOrConnectWithoutCreatedGradesInputSchema } from './UserCreateOrConnectWithoutCreatedGradesInputSchema';
import { UserUpsertWithoutCreatedGradesInputSchema } from './UserUpsertWithoutCreatedGradesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutCreatedGradesInputSchema } from './UserUpdateToOneWithWhereWithoutCreatedGradesInputSchema';
import { UserUpdateWithoutCreatedGradesInputSchema } from './UserUpdateWithoutCreatedGradesInputSchema';
import { UserUncheckedUpdateWithoutCreatedGradesInputSchema } from './UserUncheckedUpdateWithoutCreatedGradesInputSchema';

export const UserUpdateOneRequiredWithoutCreatedGradesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCreatedGradesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedGradesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedGradesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedGradesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatedGradesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutCreatedGradesInputSchema),z.lazy(() => UserUpdateWithoutCreatedGradesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedGradesInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutCreatedGradesNestedInputSchema;
