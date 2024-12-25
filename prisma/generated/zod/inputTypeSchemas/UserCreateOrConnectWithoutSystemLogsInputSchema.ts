import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutSystemLogsInputSchema } from './UserCreateWithoutSystemLogsInputSchema';
import { UserUncheckedCreateWithoutSystemLogsInputSchema } from './UserUncheckedCreateWithoutSystemLogsInputSchema';

export const UserCreateOrConnectWithoutSystemLogsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSystemLogsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSystemLogsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSystemLogsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutSystemLogsInputSchema;
