import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCreatedQuestionsInputSchema } from './UserCreateWithoutCreatedQuestionsInputSchema';
import { UserUncheckedCreateWithoutCreatedQuestionsInputSchema } from './UserUncheckedCreateWithoutCreatedQuestionsInputSchema';
import { UserCreateOrConnectWithoutCreatedQuestionsInputSchema } from './UserCreateOrConnectWithoutCreatedQuestionsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutCreatedQuestionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreatedQuestionsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedQuestionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedQuestionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedQuestionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutCreatedQuestionsInputSchema;
