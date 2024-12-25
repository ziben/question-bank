import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutCreatedCategoriesInputSchema } from './UserUpdateWithoutCreatedCategoriesInputSchema';
import { UserUncheckedUpdateWithoutCreatedCategoriesInputSchema } from './UserUncheckedUpdateWithoutCreatedCategoriesInputSchema';
import { UserCreateWithoutCreatedCategoriesInputSchema } from './UserCreateWithoutCreatedCategoriesInputSchema';
import { UserUncheckedCreateWithoutCreatedCategoriesInputSchema } from './UserUncheckedCreateWithoutCreatedCategoriesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutCreatedCategoriesInputSchema: z.ZodType<Prisma.UserUpsertWithoutCreatedCategoriesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutCreatedCategoriesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedCategoriesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedCategoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedCategoriesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutCreatedCategoriesInputSchema;
