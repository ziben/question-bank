import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutUpdatedTagCategoriesInputSchema } from './UserUpdateWithoutUpdatedTagCategoriesInputSchema';
import { UserUncheckedUpdateWithoutUpdatedTagCategoriesInputSchema } from './UserUncheckedUpdateWithoutUpdatedTagCategoriesInputSchema';

export const UserUpdateToOneWithWhereWithoutUpdatedTagCategoriesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUpdatedTagCategoriesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutUpdatedTagCategoriesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedTagCategoriesInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutUpdatedTagCategoriesInputSchema;
