import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCreatedSourcesInputSchema } from './UserCreateWithoutCreatedSourcesInputSchema';
import { UserUncheckedCreateWithoutCreatedSourcesInputSchema } from './UserUncheckedCreateWithoutCreatedSourcesInputSchema';
import { UserCreateOrConnectWithoutCreatedSourcesInputSchema } from './UserCreateOrConnectWithoutCreatedSourcesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutCreatedSourcesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreatedSourcesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedSourcesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedSourcesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedSourcesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutCreatedSourcesInputSchema;
