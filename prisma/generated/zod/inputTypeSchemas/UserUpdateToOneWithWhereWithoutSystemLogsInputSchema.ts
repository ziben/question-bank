import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutSystemLogsInputSchema } from './UserUpdateWithoutSystemLogsInputSchema';
import { UserUncheckedUpdateWithoutSystemLogsInputSchema } from './UserUncheckedUpdateWithoutSystemLogsInputSchema';

export const UserUpdateToOneWithWhereWithoutSystemLogsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSystemLogsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSystemLogsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSystemLogsInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutSystemLogsInputSchema;
