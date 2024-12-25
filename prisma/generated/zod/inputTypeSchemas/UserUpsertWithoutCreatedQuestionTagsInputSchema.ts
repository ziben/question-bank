import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutCreatedQuestionTagsInputSchema } from './UserUpdateWithoutCreatedQuestionTagsInputSchema';
import { UserUncheckedUpdateWithoutCreatedQuestionTagsInputSchema } from './UserUncheckedUpdateWithoutCreatedQuestionTagsInputSchema';
import { UserCreateWithoutCreatedQuestionTagsInputSchema } from './UserCreateWithoutCreatedQuestionTagsInputSchema';
import { UserUncheckedCreateWithoutCreatedQuestionTagsInputSchema } from './UserUncheckedCreateWithoutCreatedQuestionTagsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutCreatedQuestionTagsInputSchema: z.ZodType<Prisma.UserUpsertWithoutCreatedQuestionTagsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutCreatedQuestionTagsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedQuestionTagsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedQuestionTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedQuestionTagsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutCreatedQuestionTagsInputSchema;
