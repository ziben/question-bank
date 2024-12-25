import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemLogCreateManyInputSchema } from '../inputTypeSchemas/SystemLogCreateManyInputSchema'

export const SystemLogCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SystemLogCreateManyAndReturnArgs> = z.object({
  data: z.union([ SystemLogCreateManyInputSchema,SystemLogCreateManyInputSchema.array() ]),
}).strict() ;

export default SystemLogCreateManyAndReturnArgsSchema;
