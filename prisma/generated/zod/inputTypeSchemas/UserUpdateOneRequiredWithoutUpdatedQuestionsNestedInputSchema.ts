import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUpdatedQuestionsInputSchema } from './UserCreateWithoutUpdatedQuestionsInputSchema';
import { UserUncheckedCreateWithoutUpdatedQuestionsInputSchema } from './UserUncheckedCreateWithoutUpdatedQuestionsInputSchema';
import { UserCreateOrConnectWithoutUpdatedQuestionsInputSchema } from './UserCreateOrConnectWithoutUpdatedQuestionsInputSchema';
import { UserUpsertWithoutUpdatedQuestionsInputSchema } from './UserUpsertWithoutUpdatedQuestionsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutUpdatedQuestionsInputSchema } from './UserUpdateToOneWithWhereWithoutUpdatedQuestionsInputSchema';
import { UserUpdateWithoutUpdatedQuestionsInputSchema } from './UserUpdateWithoutUpdatedQuestionsInputSchema';
import { UserUncheckedUpdateWithoutUpdatedQuestionsInputSchema } from './UserUncheckedUpdateWithoutUpdatedQuestionsInputSchema';

export const UserUpdateOneRequiredWithoutUpdatedQuestionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutUpdatedQuestionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedQuestionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedQuestionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedQuestionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdatedQuestionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutUpdatedQuestionsInputSchema),z.lazy(() => UserUpdateWithoutUpdatedQuestionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedQuestionsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutUpdatedQuestionsNestedInputSchema;
