import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserRoleUserIdRoleIdCompoundUniqueInputSchema: z.ZodType<Prisma.UserRoleUserIdRoleIdCompoundUniqueInput> = z.object({
  userId: z.number(),
  roleId: z.number()
}).strict();

export default UserRoleUserIdRoleIdCompoundUniqueInputSchema;
