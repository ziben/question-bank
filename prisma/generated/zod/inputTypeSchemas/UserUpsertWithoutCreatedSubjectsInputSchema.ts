import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutCreatedSubjectsInputSchema } from './UserUpdateWithoutCreatedSubjectsInputSchema';
import { UserUncheckedUpdateWithoutCreatedSubjectsInputSchema } from './UserUncheckedUpdateWithoutCreatedSubjectsInputSchema';
import { UserCreateWithoutCreatedSubjectsInputSchema } from './UserCreateWithoutCreatedSubjectsInputSchema';
import { UserUncheckedCreateWithoutCreatedSubjectsInputSchema } from './UserUncheckedCreateWithoutCreatedSubjectsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutCreatedSubjectsInputSchema: z.ZodType<Prisma.UserUpsertWithoutCreatedSubjectsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutCreatedSubjectsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedSubjectsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedSubjectsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedSubjectsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutCreatedSubjectsInputSchema;
