import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutCreatedTagsInputSchema } from './UserUpdateWithoutCreatedTagsInputSchema';
import { UserUncheckedUpdateWithoutCreatedTagsInputSchema } from './UserUncheckedUpdateWithoutCreatedTagsInputSchema';

export const UserUpdateToOneWithWhereWithoutCreatedTagsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatedTagsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutCreatedTagsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedTagsInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutCreatedTagsInputSchema;
