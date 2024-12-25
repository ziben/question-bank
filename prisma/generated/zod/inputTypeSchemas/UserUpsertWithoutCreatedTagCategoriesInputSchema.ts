import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutCreatedTagCategoriesInputSchema } from './UserUpdateWithoutCreatedTagCategoriesInputSchema';
import { UserUncheckedUpdateWithoutCreatedTagCategoriesInputSchema } from './UserUncheckedUpdateWithoutCreatedTagCategoriesInputSchema';
import { UserCreateWithoutCreatedTagCategoriesInputSchema } from './UserCreateWithoutCreatedTagCategoriesInputSchema';
import { UserUncheckedCreateWithoutCreatedTagCategoriesInputSchema } from './UserUncheckedCreateWithoutCreatedTagCategoriesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutCreatedTagCategoriesInputSchema: z.ZodType<Prisma.UserUpsertWithoutCreatedTagCategoriesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutCreatedTagCategoriesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedTagCategoriesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedTagCategoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedTagCategoriesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutCreatedTagCategoriesInputSchema;
