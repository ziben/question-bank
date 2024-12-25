import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutCreatedQuestionsInputSchema } from './UserUpdateWithoutCreatedQuestionsInputSchema';
import { UserUncheckedUpdateWithoutCreatedQuestionsInputSchema } from './UserUncheckedUpdateWithoutCreatedQuestionsInputSchema';
import { UserCreateWithoutCreatedQuestionsInputSchema } from './UserCreateWithoutCreatedQuestionsInputSchema';
import { UserUncheckedCreateWithoutCreatedQuestionsInputSchema } from './UserUncheckedCreateWithoutCreatedQuestionsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutCreatedQuestionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutCreatedQuestionsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutCreatedQuestionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedQuestionsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedQuestionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedQuestionsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutCreatedQuestionsInputSchema;
