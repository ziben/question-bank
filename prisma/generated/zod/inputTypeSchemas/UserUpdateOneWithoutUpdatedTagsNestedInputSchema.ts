import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUpdatedTagsInputSchema } from './UserCreateWithoutUpdatedTagsInputSchema';
import { UserUncheckedCreateWithoutUpdatedTagsInputSchema } from './UserUncheckedCreateWithoutUpdatedTagsInputSchema';
import { UserCreateOrConnectWithoutUpdatedTagsInputSchema } from './UserCreateOrConnectWithoutUpdatedTagsInputSchema';
import { UserUpsertWithoutUpdatedTagsInputSchema } from './UserUpsertWithoutUpdatedTagsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutUpdatedTagsInputSchema } from './UserUpdateToOneWithWhereWithoutUpdatedTagsInputSchema';
import { UserUpdateWithoutUpdatedTagsInputSchema } from './UserUpdateWithoutUpdatedTagsInputSchema';
import { UserUncheckedUpdateWithoutUpdatedTagsInputSchema } from './UserUncheckedUpdateWithoutUpdatedTagsInputSchema';

export const UserUpdateOneWithoutUpdatedTagsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutUpdatedTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedTagsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdatedTagsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutUpdatedTagsInputSchema),z.lazy(() => UserUpdateWithoutUpdatedTagsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedTagsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutUpdatedTagsNestedInputSchema;
