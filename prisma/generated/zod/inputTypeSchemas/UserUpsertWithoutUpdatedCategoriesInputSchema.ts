import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutUpdatedCategoriesInputSchema } from './UserUpdateWithoutUpdatedCategoriesInputSchema';
import { UserUncheckedUpdateWithoutUpdatedCategoriesInputSchema } from './UserUncheckedUpdateWithoutUpdatedCategoriesInputSchema';
import { UserCreateWithoutUpdatedCategoriesInputSchema } from './UserCreateWithoutUpdatedCategoriesInputSchema';
import { UserUncheckedCreateWithoutUpdatedCategoriesInputSchema } from './UserUncheckedCreateWithoutUpdatedCategoriesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutUpdatedCategoriesInputSchema: z.ZodType<Prisma.UserUpsertWithoutUpdatedCategoriesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutUpdatedCategoriesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedCategoriesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedCategoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedCategoriesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutUpdatedCategoriesInputSchema;
