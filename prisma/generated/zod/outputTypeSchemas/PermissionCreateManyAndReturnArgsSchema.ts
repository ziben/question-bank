import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PermissionCreateManyInputSchema } from '../inputTypeSchemas/PermissionCreateManyInputSchema'

export const PermissionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PermissionCreateManyAndReturnArgs> = z.object({
  data: z.union([ PermissionCreateManyInputSchema,PermissionCreateManyInputSchema.array() ]),
}).strict() ;

export default PermissionCreateManyAndReturnArgsSchema;
