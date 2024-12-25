import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutSystemLogsInputSchema } from './UserUpdateWithoutSystemLogsInputSchema';
import { UserUncheckedUpdateWithoutSystemLogsInputSchema } from './UserUncheckedUpdateWithoutSystemLogsInputSchema';
import { UserCreateWithoutSystemLogsInputSchema } from './UserCreateWithoutSystemLogsInputSchema';
import { UserUncheckedCreateWithoutSystemLogsInputSchema } from './UserUncheckedCreateWithoutSystemLogsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutSystemLogsInputSchema: z.ZodType<Prisma.UserUpsertWithoutSystemLogsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSystemLogsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSystemLogsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSystemLogsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSystemLogsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutSystemLogsInputSchema;
