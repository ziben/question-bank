import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCreatedCategoriesInputSchema } from './UserCreateWithoutCreatedCategoriesInputSchema';
import { UserUncheckedCreateWithoutCreatedCategoriesInputSchema } from './UserUncheckedCreateWithoutCreatedCategoriesInputSchema';
import { UserCreateOrConnectWithoutCreatedCategoriesInputSchema } from './UserCreateOrConnectWithoutCreatedCategoriesInputSchema';
import { UserUpsertWithoutCreatedCategoriesInputSchema } from './UserUpsertWithoutCreatedCategoriesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutCreatedCategoriesInputSchema } from './UserUpdateToOneWithWhereWithoutCreatedCategoriesInputSchema';
import { UserUpdateWithoutCreatedCategoriesInputSchema } from './UserUpdateWithoutCreatedCategoriesInputSchema';
import { UserUncheckedUpdateWithoutCreatedCategoriesInputSchema } from './UserUncheckedUpdateWithoutCreatedCategoriesInputSchema';

export const UserUpdateOneRequiredWithoutCreatedCategoriesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCreatedCategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedCategoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedCategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedCategoriesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatedCategoriesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutCreatedCategoriesInputSchema),z.lazy(() => UserUpdateWithoutCreatedCategoriesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedCategoriesInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutCreatedCategoriesNestedInputSchema;
