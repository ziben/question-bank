import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCreatedSourcesInputSchema } from './UserCreateWithoutCreatedSourcesInputSchema';
import { UserUncheckedCreateWithoutCreatedSourcesInputSchema } from './UserUncheckedCreateWithoutCreatedSourcesInputSchema';
import { UserCreateOrConnectWithoutCreatedSourcesInputSchema } from './UserCreateOrConnectWithoutCreatedSourcesInputSchema';
import { UserUpsertWithoutCreatedSourcesInputSchema } from './UserUpsertWithoutCreatedSourcesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutCreatedSourcesInputSchema } from './UserUpdateToOneWithWhereWithoutCreatedSourcesInputSchema';
import { UserUpdateWithoutCreatedSourcesInputSchema } from './UserUpdateWithoutCreatedSourcesInputSchema';
import { UserUncheckedUpdateWithoutCreatedSourcesInputSchema } from './UserUncheckedUpdateWithoutCreatedSourcesInputSchema';

export const UserUpdateOneRequiredWithoutCreatedSourcesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCreatedSourcesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedSourcesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedSourcesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedSourcesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCreatedSourcesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutCreatedSourcesInputSchema),z.lazy(() => UserUpdateWithoutCreatedSourcesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCreatedSourcesInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutCreatedSourcesNestedInputSchema;
