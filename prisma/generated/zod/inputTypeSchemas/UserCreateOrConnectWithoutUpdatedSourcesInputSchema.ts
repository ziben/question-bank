import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutUpdatedSourcesInputSchema } from './UserCreateWithoutUpdatedSourcesInputSchema';
import { UserUncheckedCreateWithoutUpdatedSourcesInputSchema } from './UserUncheckedCreateWithoutUpdatedSourcesInputSchema';

export const UserCreateOrConnectWithoutUpdatedSourcesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUpdatedSourcesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedSourcesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedSourcesInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutUpdatedSourcesInputSchema;
