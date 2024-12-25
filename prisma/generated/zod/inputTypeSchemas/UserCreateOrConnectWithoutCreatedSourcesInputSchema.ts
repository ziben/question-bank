import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutCreatedSourcesInputSchema } from './UserCreateWithoutCreatedSourcesInputSchema';
import { UserUncheckedCreateWithoutCreatedSourcesInputSchema } from './UserUncheckedCreateWithoutCreatedSourcesInputSchema';

export const UserCreateOrConnectWithoutCreatedSourcesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreatedSourcesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedSourcesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedSourcesInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutCreatedSourcesInputSchema;
