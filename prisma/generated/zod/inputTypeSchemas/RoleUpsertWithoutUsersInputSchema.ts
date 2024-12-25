import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleUpdateWithoutUsersInputSchema } from './RoleUpdateWithoutUsersInputSchema';
import { RoleUncheckedUpdateWithoutUsersInputSchema } from './RoleUncheckedUpdateWithoutUsersInputSchema';
import { RoleCreateWithoutUsersInputSchema } from './RoleCreateWithoutUsersInputSchema';
import { RoleUncheckedCreateWithoutUsersInputSchema } from './RoleUncheckedCreateWithoutUsersInputSchema';
import { RoleWhereInputSchema } from './RoleWhereInputSchema';

export const RoleUpsertWithoutUsersInputSchema: z.ZodType<Prisma.RoleUpsertWithoutUsersInput> = z.object({
  update: z.union([ z.lazy(() => RoleUpdateWithoutUsersInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutUsersInputSchema) ]),
  create: z.union([ z.lazy(() => RoleCreateWithoutUsersInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUsersInputSchema) ]),
  where: z.lazy(() => RoleWhereInputSchema).optional()
}).strict();

export default RoleUpsertWithoutUsersInputSchema;
