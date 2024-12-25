import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUpdatedCategoriesInputSchema } from './UserCreateWithoutUpdatedCategoriesInputSchema';
import { UserUncheckedCreateWithoutUpdatedCategoriesInputSchema } from './UserUncheckedCreateWithoutUpdatedCategoriesInputSchema';
import { UserCreateOrConnectWithoutUpdatedCategoriesInputSchema } from './UserCreateOrConnectWithoutUpdatedCategoriesInputSchema';
import { UserUpsertWithoutUpdatedCategoriesInputSchema } from './UserUpsertWithoutUpdatedCategoriesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutUpdatedCategoriesInputSchema } from './UserUpdateToOneWithWhereWithoutUpdatedCategoriesInputSchema';
import { UserUpdateWithoutUpdatedCategoriesInputSchema } from './UserUpdateWithoutUpdatedCategoriesInputSchema';
import { UserUncheckedUpdateWithoutUpdatedCategoriesInputSchema } from './UserUncheckedUpdateWithoutUpdatedCategoriesInputSchema';

export const UserUpdateOneRequiredWithoutUpdatedCategoriesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutUpdatedCategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedCategoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedCategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedCategoriesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdatedCategoriesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutUpdatedCategoriesInputSchema),z.lazy(() => UserUpdateWithoutUpdatedCategoriesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedCategoriesInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutUpdatedCategoriesNestedInputSchema;
