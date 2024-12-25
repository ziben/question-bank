import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUpdatedSubjectsInputSchema } from './UserCreateWithoutUpdatedSubjectsInputSchema';
import { UserUncheckedCreateWithoutUpdatedSubjectsInputSchema } from './UserUncheckedCreateWithoutUpdatedSubjectsInputSchema';
import { UserCreateOrConnectWithoutUpdatedSubjectsInputSchema } from './UserCreateOrConnectWithoutUpdatedSubjectsInputSchema';
import { UserUpsertWithoutUpdatedSubjectsInputSchema } from './UserUpsertWithoutUpdatedSubjectsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutUpdatedSubjectsInputSchema } from './UserUpdateToOneWithWhereWithoutUpdatedSubjectsInputSchema';
import { UserUpdateWithoutUpdatedSubjectsInputSchema } from './UserUpdateWithoutUpdatedSubjectsInputSchema';
import { UserUncheckedUpdateWithoutUpdatedSubjectsInputSchema } from './UserUncheckedUpdateWithoutUpdatedSubjectsInputSchema';

export const UserUpdateOneRequiredWithoutUpdatedSubjectsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutUpdatedSubjectsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedSubjectsInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedSubjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedSubjectsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdatedSubjectsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutUpdatedSubjectsInputSchema),z.lazy(() => UserUpdateWithoutUpdatedSubjectsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedSubjectsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutUpdatedSubjectsNestedInputSchema;
