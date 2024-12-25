import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutUpdatedGradesInputSchema } from './UserUpdateWithoutUpdatedGradesInputSchema';
import { UserUncheckedUpdateWithoutUpdatedGradesInputSchema } from './UserUncheckedUpdateWithoutUpdatedGradesInputSchema';
import { UserCreateWithoutUpdatedGradesInputSchema } from './UserCreateWithoutUpdatedGradesInputSchema';
import { UserUncheckedCreateWithoutUpdatedGradesInputSchema } from './UserUncheckedCreateWithoutUpdatedGradesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutUpdatedGradesInputSchema: z.ZodType<Prisma.UserUpsertWithoutUpdatedGradesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutUpdatedGradesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedGradesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedGradesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedGradesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutUpdatedGradesInputSchema;
