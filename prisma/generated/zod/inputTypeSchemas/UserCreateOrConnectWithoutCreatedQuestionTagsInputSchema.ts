import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutCreatedQuestionTagsInputSchema } from './UserCreateWithoutCreatedQuestionTagsInputSchema';
import { UserUncheckedCreateWithoutCreatedQuestionTagsInputSchema } from './UserUncheckedCreateWithoutCreatedQuestionTagsInputSchema';

export const UserCreateOrConnectWithoutCreatedQuestionTagsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreatedQuestionTagsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedQuestionTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedQuestionTagsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutCreatedQuestionTagsInputSchema;
