import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCreatedTagCategoriesInputSchema } from './UserCreateWithoutCreatedTagCategoriesInputSchema';
import { UserUncheckedCreateWithoutCreatedTagCategoriesInputSchema } from './UserUncheckedCreateWithoutCreatedTagCategoriesInputSchema';
import { UserCreateOrConnectWithoutCreatedTagCategoriesInputSchema } from './UserCreateOrConnectWithoutCreatedTagCategoriesInputSchema';
import { UserUpsertWithoutCreatedTagCategoriesInputSchema } from './UserUpsertWithoutCreatedTagCategoriesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutCreatedTagCategoriesInputSchema } from './UserUpdateToOneWithWhereWithoutCreatedTagCategoriesInputSchema';
import { UserUpdateWithoutCreatedTagCategoriesInputSchema } from './UserUpdateWithoutCreatedTagCategoriesInputSchema';
import { UserUncheckedUpdateWithoutCreatedTagCategoriesInputSchema } from './UserUncheckedUpdateWithoutCreatedTagCategoriesInputSchema';

export const UserUpdateOneWithoutCreatedTagCategoriesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutCreatedTagCategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedTagCategoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedTagCategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedTagCategoriesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatedTagCategoriesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutCreatedTagCategoriesInputSchema),z.lazy(() => UserUpdateWithoutCreatedTagCategoriesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedTagCategoriesInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutCreatedTagCategoriesNestedInputSchema;
