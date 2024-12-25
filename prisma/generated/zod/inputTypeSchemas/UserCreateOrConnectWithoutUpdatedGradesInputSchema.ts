import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutUpdatedGradesInputSchema } from './UserCreateWithoutUpdatedGradesInputSchema';
import { UserUncheckedCreateWithoutUpdatedGradesInputSchema } from './UserUncheckedCreateWithoutUpdatedGradesInputSchema';

export const UserCreateOrConnectWithoutUpdatedGradesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUpdatedGradesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedGradesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedGradesInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutUpdatedGradesInputSchema;
