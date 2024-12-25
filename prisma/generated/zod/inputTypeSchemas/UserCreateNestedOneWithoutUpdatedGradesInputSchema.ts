import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUpdatedGradesInputSchema } from './UserCreateWithoutUpdatedGradesInputSchema';
import { UserUncheckedCreateWithoutUpdatedGradesInputSchema } from './UserUncheckedCreateWithoutUpdatedGradesInputSchema';
import { UserCreateOrConnectWithoutUpdatedGradesInputSchema } from './UserCreateOrConnectWithoutUpdatedGradesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutUpdatedGradesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUpdatedGradesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedGradesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedGradesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedGradesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutUpdatedGradesInputSchema;
