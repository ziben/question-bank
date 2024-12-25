import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutUpdatedCategoriesInputSchema } from './UserCreateWithoutUpdatedCategoriesInputSchema';
import { UserUncheckedCreateWithoutUpdatedCategoriesInputSchema } from './UserUncheckedCreateWithoutUpdatedCategoriesInputSchema';

export const UserCreateOrConnectWithoutUpdatedCategoriesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUpdatedCategoriesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedCategoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedCategoriesInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutUpdatedCategoriesInputSchema;
