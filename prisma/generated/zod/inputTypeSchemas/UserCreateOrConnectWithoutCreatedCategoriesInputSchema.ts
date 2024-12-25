import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutCreatedCategoriesInputSchema } from './UserCreateWithoutCreatedCategoriesInputSchema';
import { UserUncheckedCreateWithoutCreatedCategoriesInputSchema } from './UserUncheckedCreateWithoutCreatedCategoriesInputSchema';

export const UserCreateOrConnectWithoutCreatedCategoriesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreatedCategoriesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedCategoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedCategoriesInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutCreatedCategoriesInputSchema;
