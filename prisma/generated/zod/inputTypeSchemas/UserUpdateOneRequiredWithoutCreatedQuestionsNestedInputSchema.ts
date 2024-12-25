import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCreatedQuestionsInputSchema } from './UserCreateWithoutCreatedQuestionsInputSchema';
import { UserUncheckedCreateWithoutCreatedQuestionsInputSchema } from './UserUncheckedCreateWithoutCreatedQuestionsInputSchema';
import { UserCreateOrConnectWithoutCreatedQuestionsInputSchema } from './UserCreateOrConnectWithoutCreatedQuestionsInputSchema';
import { UserUpsertWithoutCreatedQuestionsInputSchema } from './UserUpsertWithoutCreatedQuestionsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutCreatedQuestionsInputSchema } from './UserUpdateToOneWithWhereWithoutCreatedQuestionsInputSchema';
import { UserUpdateWithoutCreatedQuestionsInputSchema } from './UserUpdateWithoutCreatedQuestionsInputSchema';
import { UserUncheckedUpdateWithoutCreatedQuestionsInputSchema } from './UserUncheckedUpdateWithoutCreatedQuestionsInputSchema';

export const UserUpdateOneRequiredWithoutCreatedQuestionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCreatedQuestionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedQuestionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedQuestionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedQuestionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatedQuestionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutCreatedQuestionsInputSchema),z.lazy(() => UserUpdateWithoutCreatedQuestionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedQuestionsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutCreatedQuestionsNestedInputSchema;
