import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleScalarWhereInputSchema } from './UserRoleScalarWhereInputSchema';
import { UserRoleUpdateManyMutationInputSchema } from './UserRoleUpdateManyMutationInputSchema';
import { UserRoleUncheckedUpdateManyWithoutRoleInputSchema } from './UserRoleUncheckedUpdateManyWithoutRoleInputSchema';

export const UserRoleUpdateManyWithWhereWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleUpdateManyWithWhereWithoutRoleInput> = z.object({
  where: z.lazy(() => UserRoleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserRoleUpdateManyMutationInputSchema),z.lazy(() => UserRoleUncheckedUpdateManyWithoutRoleInputSchema) ]),
}).strict();

export default UserRoleUpdateManyWithWhereWithoutRoleInputSchema;
