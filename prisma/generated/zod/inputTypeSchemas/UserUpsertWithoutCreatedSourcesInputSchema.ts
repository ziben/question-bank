import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutCreatedSourcesInputSchema } from './UserUpdateWithoutCreatedSourcesInputSchema';
import { UserUncheckedUpdateWithoutCreatedSourcesInputSchema } from './UserUncheckedUpdateWithoutCreatedSourcesInputSchema';
import { UserCreateWithoutCreatedSourcesInputSchema } from './UserCreateWithoutCreatedSourcesInputSchema';
import { UserUncheckedCreateWithoutCreatedSourcesInputSchema } from './UserUncheckedCreateWithoutCreatedSourcesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutCreatedSourcesInputSchema: z.ZodType<Prisma.UserUpsertWithoutCreatedSourcesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutCreatedSourcesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedSourcesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedSourcesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedSourcesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutCreatedSourcesInputSchema;
