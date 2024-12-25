import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutSystemLogsInputSchema } from './UserCreateWithoutSystemLogsInputSchema';
import { UserUncheckedCreateWithoutSystemLogsInputSchema } from './UserUncheckedCreateWithoutSystemLogsInputSchema';
import { UserCreateOrConnectWithoutSystemLogsInputSchema } from './UserCreateOrConnectWithoutSystemLogsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutSystemLogsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSystemLogsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSystemLogsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSystemLogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSystemLogsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutSystemLogsInputSchema;
