import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutUpdatedSourcesInputSchema } from './UserUpdateWithoutUpdatedSourcesInputSchema';
import { UserUncheckedUpdateWithoutUpdatedSourcesInputSchema } from './UserUncheckedUpdateWithoutUpdatedSourcesInputSchema';

export const UserUpdateToOneWithWhereWithoutUpdatedSourcesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUpdatedSourcesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutUpdatedSourcesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedSourcesInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutUpdatedSourcesInputSchema;
