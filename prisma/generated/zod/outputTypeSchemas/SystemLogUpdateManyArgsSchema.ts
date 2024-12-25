import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemLogUpdateManyMutationInputSchema } from '../inputTypeSchemas/SystemLogUpdateManyMutationInputSchema'
import { SystemLogUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SystemLogUncheckedUpdateManyInputSchema'
import { SystemLogWhereInputSchema } from '../inputTypeSchemas/SystemLogWhereInputSchema'

export const SystemLogUpdateManyArgsSchema: z.ZodType<Prisma.SystemLogUpdateManyArgs> = z.object({
  data: z.union([ SystemLogUpdateManyMutationInputSchema,SystemLogUncheckedUpdateManyInputSchema ]),
  where: SystemLogWhereInputSchema.optional(),
}).strict() ;

export default SystemLogUpdateManyArgsSchema;
