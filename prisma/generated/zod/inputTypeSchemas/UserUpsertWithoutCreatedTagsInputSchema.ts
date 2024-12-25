import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutCreatedTagsInputSchema } from './UserUpdateWithoutCreatedTagsInputSchema';
import { UserUncheckedUpdateWithoutCreatedTagsInputSchema } from './UserUncheckedUpdateWithoutCreatedTagsInputSchema';
import { UserCreateWithoutCreatedTagsInputSchema } from './UserCreateWithoutCreatedTagsInputSchema';
import { UserUncheckedCreateWithoutCreatedTagsInputSchema } from './UserUncheckedCreateWithoutCreatedTagsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutCreatedTagsInputSchema: z.ZodType<Prisma.UserUpsertWithoutCreatedTagsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutCreatedTagsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedTagsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedTagsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutCreatedTagsInputSchema;
