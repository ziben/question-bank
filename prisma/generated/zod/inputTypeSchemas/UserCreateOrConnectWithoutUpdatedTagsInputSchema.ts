import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutUpdatedTagsInputSchema } from './UserCreateWithoutUpdatedTagsInputSchema';
import { UserUncheckedCreateWithoutUpdatedTagsInputSchema } from './UserUncheckedCreateWithoutUpdatedTagsInputSchema';

export const UserCreateOrConnectWithoutUpdatedTagsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUpdatedTagsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUpdatedTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutUpdatedTagsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutUpdatedTagsInputSchema;
