import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutCreatedTagCategoriesInputSchema } from './UserCreateWithoutCreatedTagCategoriesInputSchema';
import { UserUncheckedCreateWithoutCreatedTagCategoriesInputSchema } from './UserUncheckedCreateWithoutCreatedTagCategoriesInputSchema';

export const UserCreateOrConnectWithoutCreatedTagCategoriesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreatedTagCategoriesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedTagCategoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedTagCategoriesInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutCreatedTagCategoriesInputSchema;
