import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutCreatedQuestionsInputSchema } from './UserCreateWithoutCreatedQuestionsInputSchema';
import { UserUncheckedCreateWithoutCreatedQuestionsInputSchema } from './UserUncheckedCreateWithoutCreatedQuestionsInputSchema';

export const UserCreateOrConnectWithoutCreatedQuestionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreatedQuestionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedQuestionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedQuestionsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutCreatedQuestionsInputSchema;
