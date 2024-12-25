import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PermissionCreateManyInputSchema } from '../inputTypeSchemas/PermissionCreateManyInputSchema'

export const PermissionCreateManyArgsSchema: z.ZodType<Prisma.PermissionCreateManyArgs> = z.object({
  data: z.union([ PermissionCreateManyInputSchema,PermissionCreateManyInputSchema.array() ]),
}).strict() ;

export default PermissionCreateManyArgsSchema;
