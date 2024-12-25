import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutCreatedTagsInputSchema } from './UserCreateWithoutCreatedTagsInputSchema';
import { UserUncheckedCreateWithoutCreatedTagsInputSchema } from './UserUncheckedCreateWithoutCreatedTagsInputSchema';

export const UserCreateOrConnectWithoutCreatedTagsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreatedTagsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedTagsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutCreatedTagsInputSchema;
