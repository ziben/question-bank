import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemLogCreateManyInputSchema } from '../inputTypeSchemas/SystemLogCreateManyInputSchema'

export const SystemLogCreateManyArgsSchema: z.ZodType<Prisma.SystemLogCreateManyArgs> = z.object({
  data: z.union([ SystemLogCreateManyInputSchema,SystemLogCreateManyInputSchema.array() ]),
}).strict() ;

export default SystemLogCreateManyArgsSchema;
