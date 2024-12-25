import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUpdatedQuestionTagsInputSchema } from './UserCreateWithoutUpdatedQuestionTagsInputSchema';
import { UserUncheckedCreateWithoutUpdatedQuestionTagsInputSchema } from './UserUncheckedCreateWithoutUpdatedQuestionTagsInputSchema';
import { UserCreateOrConnectWithoutUpdatedQuestionTagsInputSchema } from './UserCreateOrConnectWithoutUpdatedQuestionTagsInputSchema';
import { UserUpsertWithoutUpdatedQuestionTagsInputSchema } from './UserUpsertWithoutUpdatedQuestionTagsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutUpdatedQuestionTagsInputSchema } from './UserUpdateToOneWithWhereWithoutUpdatedQuestionTagsInputSchema';
import { UserUpdateWithoutUpdatedQuestionTagsInputSchema } from './UserUpdateWithoutUpdatedQuestionTagsInputSchema';
import { UserUncheckedUpdateWithoutUpdatedQuestionTagsInputSchema } from './UserUncheckedUpdateWithoutUpdatedQuestionTagsInputSchema';

export const UserUpdateOneWithoutUpdatedQuestionTagsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutUpdatedQuestionTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedQuestionTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedQuestionTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedQuestionTagsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdatedQuestionTagsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutUpdatedQuestionTagsInputSchema),z.lazy(() => UserUpdateWithoutUpdatedQuestionTagsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedQuestionTagsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutUpdatedQuestionTagsNestedInputSchema;
