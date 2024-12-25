import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCreatedTagsInputSchema } from './UserCreateWithoutCreatedTagsInputSchema';
import { UserUncheckedCreateWithoutCreatedTagsInputSchema } from './UserUncheckedCreateWithoutCreatedTagsInputSchema';
import { UserCreateOrConnectWithoutCreatedTagsInputSchema } from './UserCreateOrConnectWithoutCreatedTagsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutCreatedTagsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreatedTagsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCreatedTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCreatedTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCreatedTagsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutCreatedTagsInputSchema;
