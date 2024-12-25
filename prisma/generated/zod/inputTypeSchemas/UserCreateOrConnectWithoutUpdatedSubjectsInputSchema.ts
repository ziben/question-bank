import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutUpdatedSubjectsInputSchema } from './UserCreateWithoutUpdatedSubjectsInputSchema';
import { UserUncheckedCreateWithoutUpdatedSubjectsInputSchema } from './UserUncheckedCreateWithoutUpdatedSubjectsInputSchema';

export const UserCreateOrConnectWithoutUpdatedSubjectsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUpdatedSubjectsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedSubjectsInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedSubjectsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutUpdatedSubjectsInputSchema;
