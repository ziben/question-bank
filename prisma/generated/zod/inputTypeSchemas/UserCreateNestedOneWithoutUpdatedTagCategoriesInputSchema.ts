import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUpdatedTagCategoriesInputSchema } from './UserCreateWithoutUpdatedTagCategoriesInputSchema';
import { UserUncheckedCreateWithoutUpdatedTagCategoriesInputSchema } from './UserUncheckedCreateWithoutUpdatedTagCategoriesInputSchema';
import { UserCreateOrConnectWithoutUpdatedTagCategoriesInputSchema } from './UserCreateOrConnectWithoutUpdatedTagCategoriesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutUpdatedTagCategoriesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUpdatedTagCategoriesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedTagCategoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedTagCategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedTagCategoriesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutUpdatedTagCategoriesInputSchema;
