import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutCreatedTagCategoriesInputSchema } from './UserUpdateWithoutCreatedTagCategoriesInputSchema';
import { UserUncheckedUpdateWithoutCreatedTagCategoriesInputSchema } from './UserUncheckedUpdateWithoutCreatedTagCategoriesInputSchema';

export const UserUpdateToOneWithWhereWithoutCreatedTagCategoriesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCreatedTagCategoriesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutCreatedTagCategoriesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedTagCategoriesInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutCreatedTagCategoriesInputSchema;
