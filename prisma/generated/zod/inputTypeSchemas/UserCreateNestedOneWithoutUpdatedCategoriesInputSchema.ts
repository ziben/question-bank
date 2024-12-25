import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUpdatedCategoriesInputSchema } from './UserCreateWithoutUpdatedCategoriesInputSchema';
import { UserUncheckedCreateWithoutUpdatedCategoriesInputSchema } from './UserUncheckedCreateWithoutUpdatedCategoriesInputSchema';
import { UserCreateOrConnectWithoutUpdatedCategoriesInputSchema } from './UserCreateOrConnectWithoutUpdatedCategoriesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutUpdatedCategoriesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUpdatedCategoriesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedCategoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedCategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedCategoriesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutUpdatedCategoriesInputSchema;
