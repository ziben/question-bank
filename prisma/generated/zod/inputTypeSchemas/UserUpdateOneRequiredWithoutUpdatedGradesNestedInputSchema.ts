import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUpdatedGradesInputSchema } from './UserCreateWithoutUpdatedGradesInputSchema';
import { UserUncheckedCreateWithoutUpdatedGradesInputSchema } from './UserUncheckedCreateWithoutUpdatedGradesInputSchema';
import { UserCreateOrConnectWithoutUpdatedGradesInputSchema } from './UserCreateOrConnectWithoutUpdatedGradesInputSchema';
import { UserUpsertWithoutUpdatedGradesInputSchema } from './UserUpsertWithoutUpdatedGradesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutUpdatedGradesInputSchema } from './UserUpdateToOneWithWhereWithoutUpdatedGradesInputSchema';
import { UserUpdateWithoutUpdatedGradesInputSchema } from './UserUpdateWithoutUpdatedGradesInputSchema';
import { UserUncheckedUpdateWithoutUpdatedGradesInputSchema } from './UserUncheckedUpdateWithoutUpdatedGradesInputSchema';

export const UserUpdateOneRequiredWithoutUpdatedGradesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutUpdatedGradesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedGradesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedGradesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedGradesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdatedGradesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutUpdatedGradesInputSchema),z.lazy(() => UserUpdateWithoutUpdatedGradesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedGradesInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutUpdatedGradesNestedInputSchema;
