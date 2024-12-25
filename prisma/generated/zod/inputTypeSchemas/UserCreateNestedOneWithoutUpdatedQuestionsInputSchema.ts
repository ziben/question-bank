import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUpdatedQuestionsInputSchema } from './UserCreateWithoutUpdatedQuestionsInputSchema';
import { UserUncheckedCreateWithoutUpdatedQuestionsInputSchema } from './UserUncheckedCreateWithoutUpdatedQuestionsInputSchema';
import { UserCreateOrConnectWithoutUpdatedQuestionsInputSchema } from './UserCreateOrConnectWithoutUpdatedQuestionsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutUpdatedQuestionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUpdatedQuestionsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedQuestionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedQuestionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedQuestionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutUpdatedQuestionsInputSchema;
