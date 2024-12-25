import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutUpdatedSubjectsInputSchema } from './UserUpdateWithoutUpdatedSubjectsInputSchema';
import { UserUncheckedUpdateWithoutUpdatedSubjectsInputSchema } from './UserUncheckedUpdateWithoutUpdatedSubjectsInputSchema';

export const UserUpdateToOneWithWhereWithoutUpdatedSubjectsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUpdatedSubjectsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutUpdatedSubjectsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedSubjectsInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutUpdatedSubjectsInputSchema;
