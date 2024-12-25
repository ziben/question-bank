import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateWithoutUsersInputSchema } from './RoleCreateWithoutUsersInputSchema';
import { RoleUncheckedCreateWithoutUsersInputSchema } from './RoleUncheckedCreateWithoutUsersInputSchema';
import { RoleCreateOrConnectWithoutUsersInputSchema } from './RoleCreateOrConnectWithoutUsersInputSchema';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';

export const RoleCreateNestedOneWithoutUsersInputSchema: z.ZodType<Prisma.RoleCreateNestedOneWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutUsersInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoleCreateOrConnectWithoutUsersInputSchema).optional(),
  connect: z.lazy(() => RoleWhereUniqueInputSchema).optional()
}).strict();

export default RoleCreateNestedOneWithoutUsersInputSchema;
