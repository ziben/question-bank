import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUpdatedSourcesInputSchema } from './UserCreateWithoutUpdatedSourcesInputSchema';
import { UserUncheckedCreateWithoutUpdatedSourcesInputSchema } from './UserUncheckedCreateWithoutUpdatedSourcesInputSchema';
import { UserCreateOrConnectWithoutUpdatedSourcesInputSchema } from './UserCreateOrConnectWithoutUpdatedSourcesInputSchema';
import { UserUpsertWithoutUpdatedSourcesInputSchema } from './UserUpsertWithoutUpdatedSourcesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutUpdatedSourcesInputSchema } from './UserUpdateToOneWithWhereWithoutUpdatedSourcesInputSchema';
import { UserUpdateWithoutUpdatedSourcesInputSchema } from './UserUpdateWithoutUpdatedSourcesInputSchema';
import { UserUncheckedUpdateWithoutUpdatedSourcesInputSchema } from './UserUncheckedUpdateWithoutUpdatedSourcesInputSchema';

export const UserUpdateOneRequiredWithoutUpdatedSourcesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutUpdatedSourcesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedSourcesInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedSourcesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedSourcesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUpdatedSourcesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutUpdatedSourcesInputSchema),z.lazy(() => UserUpdateWithoutUpdatedSourcesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUpdatedSourcesInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutUpdatedSourcesNestedInputSchema;
