import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCreatedSubjectsInputSchema } from './UserCreateWithoutCreatedSubjectsInputSchema';
import { UserUncheckedCreateWithoutCreatedSubjectsInputSchema } from './UserUncheckedCreateWithoutCreatedSubjectsInputSchema';
import { UserCreateOrConnectWithoutCreatedSubjectsInputSchema } from './UserCreateOrConnectWithoutCreatedSubjectsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutCreatedSubjectsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreatedSubjectsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedSubjectsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedSubjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedSubjectsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutCreatedSubjectsInputSchema;
