import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutCreatedGradesInputSchema } from './UserUpdateWithoutCreatedGradesInputSchema';
import { UserUncheckedUpdateWithoutCreatedGradesInputSchema } from './UserUncheckedUpdateWithoutCreatedGradesInputSchema';

export const UserUpdateToOneWithWhereWithoutCreatedGradesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatedGradesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutCreatedGradesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedGradesInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutCreatedGradesInputSchema;
