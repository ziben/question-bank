import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUpdatedTagCategoriesInputSchema } from './UserCreateWithoutUpdatedTagCategoriesInputSchema';
import { UserUncheckedCreateWithoutUpdatedTagCategoriesInputSchema } from './UserUncheckedCreateWithoutUpdatedTagCategoriesInputSchema';
import { UserCreateOrConnectWithoutUpdatedTagCategoriesInputSchema } from './UserCreateOrConnectWithoutUpdatedTagCategoriesInputSchema';
import { UserUpsertWithoutUpdatedTagCategoriesInputSchema } from './UserUpsertWithoutUpdatedTagCategoriesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutUpdatedTagCategoriesInputSchema } from './UserUpdateToOneWithWhereWithoutUpdatedTagCategoriesInputSchema';
import { UserUpdateWithoutUpdatedTagCategoriesInputSchema } from './UserUpdateWithoutUpdatedTagCategoriesInputSchema';
import { UserUncheckedUpdateWithoutUpdatedTagCategoriesInputSchema } from './UserUncheckedUpdateWithoutUpdatedTagCategoriesInputSchema';

export const UserUpdateOneWithoutUpdatedTagCategoriesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutUpdatedTagCategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedTagCategoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedTagCategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedTagCategoriesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdatedTagCategoriesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutUpdatedTagCategoriesInputSchema),z.lazy(() => UserUpdateWithoutUpdatedTagCategoriesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedTagCategoriesInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutUpdatedTagCategoriesNestedInputSchema;
