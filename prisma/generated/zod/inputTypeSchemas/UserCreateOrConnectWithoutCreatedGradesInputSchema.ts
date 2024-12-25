import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutCreatedGradesInputSchema } from './UserCreateWithoutCreatedGradesInputSchema';
import { UserUncheckedCreateWithoutCreatedGradesInputSchema } from './UserUncheckedCreateWithoutCreatedGradesInputSchema';

export const UserCreateOrConnectWithoutCreatedGradesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreatedGradesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedGradesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedGradesInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutCreatedGradesInputSchema;
