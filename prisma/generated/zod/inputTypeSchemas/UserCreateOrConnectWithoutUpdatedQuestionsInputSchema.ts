import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutUpdatedQuestionsInputSchema } from './UserCreateWithoutUpdatedQuestionsInputSchema';
import { UserUncheckedCreateWithoutUpdatedQuestionsInputSchema } from './UserUncheckedCreateWithoutUpdatedQuestionsInputSchema';

export const UserCreateOrConnectWithoutUpdatedQuestionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUpdatedQuestionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedQuestionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedQuestionsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutUpdatedQuestionsInputSchema;
