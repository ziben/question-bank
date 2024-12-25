import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutUpdatedQuestionTagsInputSchema } from './UserCreateWithoutUpdatedQuestionTagsInputSchema';
import { UserUncheckedCreateWithoutUpdatedQuestionTagsInputSchema } from './UserUncheckedCreateWithoutUpdatedQuestionTagsInputSchema';

export const UserCreateOrConnectWithoutUpdatedQuestionTagsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUpdatedQuestionTagsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedQuestionTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedQuestionTagsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutUpdatedQuestionTagsInputSchema;
