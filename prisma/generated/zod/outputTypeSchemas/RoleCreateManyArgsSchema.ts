import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleCreateManyInputSchema } from '../inputTypeSchemas/RoleCreateManyInputSchema'

export const RoleCreateManyArgsSchema: z.ZodType<Prisma.RoleCreateManyArgs> = z.object({
  data: z.union([ RoleCreateManyInputSchema,RoleCreateManyInputSchema.array() ]),
}).strict() ;

export default RoleCreateManyArgsSchema;
