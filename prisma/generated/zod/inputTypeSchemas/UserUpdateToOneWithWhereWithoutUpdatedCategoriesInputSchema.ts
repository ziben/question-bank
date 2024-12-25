import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutUpdatedCategoriesInputSchema } from './UserUpdateWithoutUpdatedCategoriesInputSchema';
import { UserUncheckedUpdateWithoutUpdatedCategoriesInputSchema } from './UserUncheckedUpdateWithoutUpdatedCategoriesInputSchema';

export const UserUpdateToOneWithWhereWithoutUpdatedCategoriesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUpdatedCategoriesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutUpdatedCategoriesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedCategoriesInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutUpdatedCategoriesInputSchema;
