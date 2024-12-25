import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleWhereInputSchema } from './RoleWhereInputSchema';
import { RoleUpdateWithoutUsersInputSchema } from './RoleUpdateWithoutUsersInputSchema';
import { RoleUncheckedUpdateWithoutUsersInputSchema } from './RoleUncheckedUpdateWithoutUsersInputSchema';

export const RoleUpdateToOneWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.RoleUpdateToOneWithWhereWithoutUsersInput> = z.object({
  where: z.lazy(() => RoleWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RoleUpdateWithoutUsersInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutUsersInputSchema) ]),
}).strict();

export default RoleUpdateToOneWithWhereWithoutUsersInputSchema;
