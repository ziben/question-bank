import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutUpdatedQuestionTagsInputSchema } from './UserUpdateWithoutUpdatedQuestionTagsInputSchema';
import { UserUncheckedUpdateWithoutUpdatedQuestionTagsInputSchema } from './UserUncheckedUpdateWithoutUpdatedQuestionTagsInputSchema';

export const UserUpdateToOneWithWhereWithoutUpdatedQuestionTagsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUpdatedQuestionTagsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutUpdatedQuestionTagsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedQuestionTagsInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutUpdatedQuestionTagsInputSchema;
