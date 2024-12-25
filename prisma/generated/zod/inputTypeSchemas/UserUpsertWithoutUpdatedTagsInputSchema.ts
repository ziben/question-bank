import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutUpdatedTagsInputSchema } from './UserUpdateWithoutUpdatedTagsInputSchema';
import { UserUncheckedUpdateWithoutUpdatedTagsInputSchema } from './UserUncheckedUpdateWithoutUpdatedTagsInputSchema';
import { UserCreateWithoutUpdatedTagsInputSchema } from './UserCreateWithoutUpdatedTagsInputSchema';
import { UserUncheckedCreateWithoutUpdatedTagsInputSchema } from './UserUncheckedCreateWithoutUpdatedTagsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutUpdatedTagsInputSchema: z.ZodType<Prisma.UserUpsertWithoutUpdatedTagsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutUpdatedTagsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedTagsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedTagsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutUpdatedTagsInputSchema;
