import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCreatedTagsInputSchema } from './UserCreateWithoutCreatedTagsInputSchema';
import { UserUncheckedCreateWithoutCreatedTagsInputSchema } from './UserUncheckedCreateWithoutCreatedTagsInputSchema';
import { UserCreateOrConnectWithoutCreatedTagsInputSchema } from './UserCreateOrConnectWithoutCreatedTagsInputSchema';
import { UserUpsertWithoutCreatedTagsInputSchema } from './UserUpsertWithoutCreatedTagsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutCreatedTagsInputSchema } from './UserUpdateToOneWithWhereWithoutCreatedTagsInputSchema';
import { UserUpdateWithoutCreatedTagsInputSchema } from './UserUpdateWithoutCreatedTagsInputSchema';
import { UserUncheckedUpdateWithoutCreatedTagsInputSchema } from './UserUncheckedUpdateWithoutCreatedTagsInputSchema';

export const UserUpdateOneWithoutCreatedTagsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutCreatedTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedTagsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatedTagsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutCreatedTagsInputSchema),z.lazy(() => UserUpdateWithoutCreatedTagsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedTagsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutCreatedTagsNestedInputSchema;
