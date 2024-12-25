import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCreatedQuestionTagsInputSchema } from './UserCreateWithoutCreatedQuestionTagsInputSchema';
import { UserUncheckedCreateWithoutCreatedQuestionTagsInputSchema } from './UserUncheckedCreateWithoutCreatedQuestionTagsInputSchema';
import { UserCreateOrConnectWithoutCreatedQuestionTagsInputSchema } from './UserCreateOrConnectWithoutCreatedQuestionTagsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutCreatedQuestionTagsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreatedQuestionTagsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedQuestionTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedQuestionTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedQuestionTagsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutCreatedQuestionTagsInputSchema;
