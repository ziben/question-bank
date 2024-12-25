import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutCreatedSubjectsInputSchema } from './UserUpdateWithoutCreatedSubjectsInputSchema';
import { UserUncheckedUpdateWithoutCreatedSubjectsInputSchema } from './UserUncheckedUpdateWithoutCreatedSubjectsInputSchema';

export const UserUpdateToOneWithWhereWithoutCreatedSubjectsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatedSubjectsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutCreatedSubjectsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedSubjectsInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutCreatedSubjectsInputSchema;
