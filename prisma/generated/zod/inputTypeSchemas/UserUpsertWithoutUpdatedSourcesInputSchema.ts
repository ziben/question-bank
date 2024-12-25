import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutUpdatedSourcesInputSchema } from './UserUpdateWithoutUpdatedSourcesInputSchema';
import { UserUncheckedUpdateWithoutUpdatedSourcesInputSchema } from './UserUncheckedUpdateWithoutUpdatedSourcesInputSchema';
import { UserCreateWithoutUpdatedSourcesInputSchema } from './UserCreateWithoutUpdatedSourcesInputSchema';
import { UserUncheckedCreateWithoutUpdatedSourcesInputSchema } from './UserUncheckedCreateWithoutUpdatedSourcesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutUpdatedSourcesInputSchema: z.ZodType<Prisma.UserUpsertWithoutUpdatedSourcesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutUpdatedSourcesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedSourcesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedSourcesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedSourcesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutUpdatedSourcesInputSchema;
