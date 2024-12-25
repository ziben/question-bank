import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutUpdatedTagCategoriesInputSchema } from './UserCreateWithoutUpdatedTagCategoriesInputSchema';
import { UserUncheckedCreateWithoutUpdatedTagCategoriesInputSchema } from './UserUncheckedCreateWithoutUpdatedTagCategoriesInputSchema';

export const UserCreateOrConnectWithoutUpdatedTagCategoriesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUpdatedTagCategoriesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedTagCategoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedTagCategoriesInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutUpdatedTagCategoriesInputSchema;
