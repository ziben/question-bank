import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutCreatedQuestionTagsInputSchema } from './UserUpdateWithoutCreatedQuestionTagsInputSchema';
import { UserUncheckedUpdateWithoutCreatedQuestionTagsInputSchema } from './UserUncheckedUpdateWithoutCreatedQuestionTagsInputSchema';

export const UserUpdateToOneWithWhereWithoutCreatedQuestionTagsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatedQuestionTagsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutCreatedQuestionTagsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedQuestionTagsInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutCreatedQuestionTagsInputSchema;
