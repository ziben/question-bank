import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutUpdatedQuestionsInputSchema } from './UserUpdateWithoutUpdatedQuestionsInputSchema';
import { UserUncheckedUpdateWithoutUpdatedQuestionsInputSchema } from './UserUncheckedUpdateWithoutUpdatedQuestionsInputSchema';
import { UserCreateWithoutUpdatedQuestionsInputSchema } from './UserCreateWithoutUpdatedQuestionsInputSchema';
import { UserUncheckedCreateWithoutUpdatedQuestionsInputSchema } from './UserUncheckedCreateWithoutUpdatedQuestionsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutUpdatedQuestionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutUpdatedQuestionsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutUpdatedQuestionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedQuestionsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedQuestionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedQuestionsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutUpdatedQuestionsInputSchema;
