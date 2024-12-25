import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCreatedQuestionTagsInputSchema } from './UserCreateWithoutCreatedQuestionTagsInputSchema';
import { UserUncheckedCreateWithoutCreatedQuestionTagsInputSchema } from './UserUncheckedCreateWithoutCreatedQuestionTagsInputSchema';
import { UserCreateOrConnectWithoutCreatedQuestionTagsInputSchema } from './UserCreateOrConnectWithoutCreatedQuestionTagsInputSchema';
import { UserUpsertWithoutCreatedQuestionTagsInputSchema } from './UserUpsertWithoutCreatedQuestionTagsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutCreatedQuestionTagsInputSchema } from './UserUpdateToOneWithWhereWithoutCreatedQuestionTagsInputSchema';
import { UserUpdateWithoutCreatedQuestionTagsInputSchema } from './UserUpdateWithoutCreatedQuestionTagsInputSchema';
import { UserUncheckedUpdateWithoutCreatedQuestionTagsInputSchema } from './UserUncheckedUpdateWithoutCreatedQuestionTagsInputSchema';

export const UserUpdateOneWithoutCreatedQuestionTagsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutCreatedQuestionTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedQuestionTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedQuestionTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedQuestionTagsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatedQuestionTagsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutCreatedQuestionTagsInputSchema),z.lazy(() => UserUpdateWithoutCreatedQuestionTagsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedQuestionTagsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutCreatedQuestionTagsNestedInputSchema;
