import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutUpdatedSubjectsInputSchema } from './UserUpdateWithoutUpdatedSubjectsInputSchema';
import { UserUncheckedUpdateWithoutUpdatedSubjectsInputSchema } from './UserUncheckedUpdateWithoutUpdatedSubjectsInputSchema';
import { UserCreateWithoutUpdatedSubjectsInputSchema } from './UserCreateWithoutUpdatedSubjectsInputSchema';
import { UserUncheckedCreateWithoutUpdatedSubjectsInputSchema } from './UserUncheckedCreateWithoutUpdatedSubjectsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutUpdatedSubjectsInputSchema: z.ZodType<Prisma.UserUpsertWithoutUpdatedSubjectsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutUpdatedSubjectsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedSubjectsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedSubjectsInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedSubjectsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutUpdatedSubjectsInputSchema;
