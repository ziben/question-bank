import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUpdatedSourcesInputSchema } from './UserCreateWithoutUpdatedSourcesInputSchema';
import { UserUncheckedCreateWithoutUpdatedSourcesInputSchema } from './UserUncheckedCreateWithoutUpdatedSourcesInputSchema';
import { UserCreateOrConnectWithoutUpdatedSourcesInputSchema } from './UserCreateOrConnectWithoutUpdatedSourcesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutUpdatedSourcesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUpdatedSourcesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedSourcesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedSourcesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedSourcesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutUpdatedSourcesInputSchema;
