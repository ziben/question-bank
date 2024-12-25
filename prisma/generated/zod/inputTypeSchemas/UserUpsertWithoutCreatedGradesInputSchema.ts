import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutCreatedGradesInputSchema } from './UserUpdateWithoutCreatedGradesInputSchema';
import { UserUncheckedUpdateWithoutCreatedGradesInputSchema } from './UserUncheckedUpdateWithoutCreatedGradesInputSchema';
import { UserCreateWithoutCreatedGradesInputSchema } from './UserCreateWithoutCreatedGradesInputSchema';
import { UserUncheckedCreateWithoutCreatedGradesInputSchema } from './UserUncheckedCreateWithoutCreatedGradesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutCreatedGradesInputSchema: z.ZodType<Prisma.UserUpsertWithoutCreatedGradesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutCreatedGradesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedGradesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedGradesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedGradesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutCreatedGradesInputSchema;
