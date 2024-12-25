import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutCreatedSubjectsInputSchema } from './UserCreateWithoutCreatedSubjectsInputSchema';
import { UserUncheckedCreateWithoutCreatedSubjectsInputSchema } from './UserUncheckedCreateWithoutCreatedSubjectsInputSchema';

export const UserCreateOrConnectWithoutCreatedSubjectsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreatedSubjectsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedSubjectsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedSubjectsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutCreatedSubjectsInputSchema;
