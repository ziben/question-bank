import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutSystemLogsInputSchema } from './UserCreateWithoutSystemLogsInputSchema';
import { UserUncheckedCreateWithoutSystemLogsInputSchema } from './UserUncheckedCreateWithoutSystemLogsInputSchema';
import { UserCreateOrConnectWithoutSystemLogsInputSchema } from './UserCreateOrConnectWithoutSystemLogsInputSchema';
import { UserUpsertWithoutSystemLogsInputSchema } from './UserUpsertWithoutSystemLogsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutSystemLogsInputSchema } from './UserUpdateToOneWithWhereWithoutSystemLogsInputSchema';
import { UserUpdateWithoutSystemLogsInputSchema } from './UserUpdateWithoutSystemLogsInputSchema';
import { UserUncheckedUpdateWithoutSystemLogsInputSchema } from './UserUncheckedUpdateWithoutSystemLogsInputSchema';

export const UserUpdateOneRequiredWithoutSystemLogsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSystemLogsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSystemLogsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSystemLogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSystemLogsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSystemLogsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSystemLogsInputSchema),z.lazy(() => UserUpdateWithoutSystemLogsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSystemLogsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutSystemLogsNestedInputSchema;
