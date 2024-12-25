import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUpdatedQuestionTagsInputSchema } from './UserCreateWithoutUpdatedQuestionTagsInputSchema';
import { UserUncheckedCreateWithoutUpdatedQuestionTagsInputSchema } from './UserUncheckedCreateWithoutUpdatedQuestionTagsInputSchema';
import { UserCreateOrConnectWithoutUpdatedQuestionTagsInputSchema } from './UserCreateOrConnectWithoutUpdatedQuestionTagsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutUpdatedQuestionTagsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUpdatedQuestionTagsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedQuestionTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedQuestionTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedQuestionTagsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutUpdatedQuestionTagsInputSchema;
