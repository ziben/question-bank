import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCreatedSubjectsInputSchema } from './UserCreateWithoutCreatedSubjectsInputSchema';
import { UserUncheckedCreateWithoutCreatedSubjectsInputSchema } from './UserUncheckedCreateWithoutCreatedSubjectsInputSchema';
import { UserCreateOrConnectWithoutCreatedSubjectsInputSchema } from './UserCreateOrConnectWithoutCreatedSubjectsInputSchema';
import { UserUpsertWithoutCreatedSubjectsInputSchema } from './UserUpsertWithoutCreatedSubjectsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutCreatedSubjectsInputSchema } from './UserUpdateToOneWithWhereWithoutCreatedSubjectsInputSchema';
import { UserUpdateWithoutCreatedSubjectsInputSchema } from './UserUpdateWithoutCreatedSubjectsInputSchema';
import { UserUncheckedUpdateWithoutCreatedSubjectsInputSchema } from './UserUncheckedUpdateWithoutCreatedSubjectsInputSchema';

export const UserUpdateOneRequiredWithoutCreatedSubjectsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCreatedSubjectsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedSubjectsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedSubjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedSubjectsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatedSubjectsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutCreatedSubjectsInputSchema),z.lazy(() => UserUpdateWithoutCreatedSubjectsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedSubjectsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutCreatedSubjectsNestedInputSchema;
