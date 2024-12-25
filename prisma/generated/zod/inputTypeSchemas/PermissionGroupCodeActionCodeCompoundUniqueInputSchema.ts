import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PermissionGroupCodeActionCodeCompoundUniqueInputSchema: z.ZodType<Prisma.PermissionGroupCodeActionCodeCompoundUniqueInput> = z.object({
  groupCode: z.string(),
  actionCode: z.string()
}).strict();

export default PermissionGroupCodeActionCodeCompoundUniqueInputSchema;
