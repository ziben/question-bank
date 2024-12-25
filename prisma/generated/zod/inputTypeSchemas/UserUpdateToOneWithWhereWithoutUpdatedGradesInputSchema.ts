import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutUpdatedGradesInputSchema } from './UserUpdateWithoutUpdatedGradesInputSchema';
import { UserUncheckedUpdateWithoutUpdatedGradesInputSchema } from './UserUncheckedUpdateWithoutUpdatedGradesInputSchema';

export const UserUpdateToOneWithWhereWithoutUpdatedGradesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUpdatedGradesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutUpdatedGradesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedGradesInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutUpdatedGradesInputSchema;
