import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCreatedCategoriesInputSchema } from './UserCreateWithoutCreatedCategoriesInputSchema';
import { UserUncheckedCreateWithoutCreatedCategoriesInputSchema } from './UserUncheckedCreateWithoutCreatedCategoriesInputSchema';
import { UserCreateOrConnectWithoutCreatedCategoriesInputSchema } from './UserCreateOrConnectWithoutCreatedCategoriesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutCreatedCategoriesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreatedCategoriesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedCategoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedCategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedCategoriesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutCreatedCategoriesInputSchema;
