import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUpdatedSubjectsInputSchema } from './UserCreateWithoutUpdatedSubjectsInputSchema';
import { UserUncheckedCreateWithoutUpdatedSubjectsInputSchema } from './UserUncheckedCreateWithoutUpdatedSubjectsInputSchema';
import { UserCreateOrConnectWithoutUpdatedSubjectsInputSchema } from './UserCreateOrConnectWithoutUpdatedSubjectsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutUpdatedSubjectsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUpdatedSubjectsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedSubjectsInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedSubjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedSubjectsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutUpdatedSubjectsInputSchema;
