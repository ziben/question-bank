import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCreatedGradesInputSchema } from './UserCreateWithoutCreatedGradesInputSchema';
import { UserUncheckedCreateWithoutCreatedGradesInputSchema } from './UserUncheckedCreateWithoutCreatedGradesInputSchema';
import { UserCreateOrConnectWithoutCreatedGradesInputSchema } from './UserCreateOrConnectWithoutCreatedGradesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutCreatedGradesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreatedGradesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedGradesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedGradesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedGradesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutCreatedGradesInputSchema;
