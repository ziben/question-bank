import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutUpdatedQuestionTagsInputSchema } from './UserUpdateWithoutUpdatedQuestionTagsInputSchema';
import { UserUncheckedUpdateWithoutUpdatedQuestionTagsInputSchema } from './UserUncheckedUpdateWithoutUpdatedQuestionTagsInputSchema';
import { UserCreateWithoutUpdatedQuestionTagsInputSchema } from './UserCreateWithoutUpdatedQuestionTagsInputSchema';
import { UserUncheckedCreateWithoutUpdatedQuestionTagsInputSchema } from './UserUncheckedCreateWithoutUpdatedQuestionTagsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutUpdatedQuestionTagsInputSchema: z.ZodType<Prisma.UserUpsertWithoutUpdatedQuestionTagsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutUpdatedQuestionTagsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedQuestionTagsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedQuestionTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedQuestionTagsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutUpdatedQuestionTagsInputSchema;
