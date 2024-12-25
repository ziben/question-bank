import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutUpdatedQuestionsInputSchema } from './UserUpdateWithoutUpdatedQuestionsInputSchema';
import { UserUncheckedUpdateWithoutUpdatedQuestionsInputSchema } from './UserUncheckedUpdateWithoutUpdatedQuestionsInputSchema';

export const UserUpdateToOneWithWhereWithoutUpdatedQuestionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUpdatedQuestionsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutUpdatedQuestionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedQuestionsInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutUpdatedQuestionsInputSchema;
