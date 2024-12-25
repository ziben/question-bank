import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutUpdatedTagsInputSchema } from './UserUpdateWithoutUpdatedTagsInputSchema';
import { UserUncheckedUpdateWithoutUpdatedTagsInputSchema } from './UserUncheckedUpdateWithoutUpdatedTagsInputSchema';

export const UserUpdateToOneWithWhereWithoutUpdatedTagsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUpdatedTagsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutUpdatedTagsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedTagsInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutUpdatedTagsInputSchema;
