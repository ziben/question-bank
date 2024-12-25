import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUpdatedTagsInputSchema } from './UserCreateWithoutUpdatedTagsInputSchema';
import { UserUncheckedCreateWithoutUpdatedTagsInputSchema } from './UserUncheckedCreateWithoutUpdatedTagsInputSchema';
import { UserCreateOrConnectWithoutUpdatedTagsInputSchema } from './UserCreateOrConnectWithoutUpdatedTagsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutUpdatedTagsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUpdatedTagsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUpdatedTagsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutUpdatedTagsInputSchema;
