import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutCreatedQuestionsInputSchema } from './UserUpdateWithoutCreatedQuestionsInputSchema';
import { UserUncheckedUpdateWithoutCreatedQuestionsInputSchema } from './UserUncheckedUpdateWithoutCreatedQuestionsInputSchema';

export const UserUpdateToOneWithWhereWithoutCreatedQuestionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatedQuestionsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutCreatedQuestionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedQuestionsInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutCreatedQuestionsInputSchema;
