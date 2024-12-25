import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCreatedTagCategoriesInputSchema } from './UserCreateWithoutCreatedTagCategoriesInputSchema';
import { UserUncheckedCreateWithoutCreatedTagCategoriesInputSchema } from './UserUncheckedCreateWithoutCreatedTagCategoriesInputSchema';
import { UserCreateOrConnectWithoutCreatedTagCategoriesInputSchema } from './UserCreateOrConnectWithoutCreatedTagCategoriesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutCreatedTagCategoriesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreatedTagCategoriesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedTagCategoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedTagCategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedTagCategoriesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutCreatedTagCategoriesInputSchema;
