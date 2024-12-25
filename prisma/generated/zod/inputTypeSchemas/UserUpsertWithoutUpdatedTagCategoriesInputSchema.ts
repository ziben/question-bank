import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutUpdatedTagCategoriesInputSchema } from './UserUpdateWithoutUpdatedTagCategoriesInputSchema';
import { UserUncheckedUpdateWithoutUpdatedTagCategoriesInputSchema } from './UserUncheckedUpdateWithoutUpdatedTagCategoriesInputSchema';
import { UserCreateWithoutUpdatedTagCategoriesInputSchema } from './UserCreateWithoutUpdatedTagCategoriesInputSchema';
import { UserUncheckedCreateWithoutUpdatedTagCategoriesInputSchema } from './UserUncheckedCreateWithoutUpdatedTagCategoriesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutUpdatedTagCategoriesInputSchema: z.ZodType<Prisma.UserUpsertWithoutUpdatedTagCategoriesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutUpdatedTagCategoriesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedTagCategoriesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedTagCategoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedTagCategoriesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutUpdatedTagCategoriesInputSchema;
