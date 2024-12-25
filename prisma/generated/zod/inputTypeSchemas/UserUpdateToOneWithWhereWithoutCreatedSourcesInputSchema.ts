import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutCreatedSourcesInputSchema } from './UserUpdateWithoutCreatedSourcesInputSchema';
import { UserUncheckedUpdateWithoutCreatedSourcesInputSchema } from './UserUncheckedUpdateWithoutCreatedSourcesInputSchema';

export const UserUpdateToOneWithWhereWithoutCreatedSourcesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatedSourcesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutCreatedSourcesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedSourcesInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutCreatedSourcesInputSchema;
