import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutCreatedCategoriesInputSchema } from './UserUpdateWithoutCreatedCategoriesInputSchema';
import { UserUncheckedUpdateWithoutCreatedCategoriesInputSchema } from './UserUncheckedUpdateWithoutCreatedCategoriesInputSchema';

export const UserUpdateToOneWithWhereWithoutCreatedCategoriesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatedCategoriesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutCreatedCategoriesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedCategoriesInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutCreatedCategoriesInputSchema;
