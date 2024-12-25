import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemLogWhereInputSchema } from '../inputTypeSchemas/SystemLogWhereInputSchema'

export const SystemLogDeleteManyArgsSchema: z.ZodType<Prisma.SystemLogDeleteManyArgs> = z.object({
  where: SystemLogWhereInputSchema.optional(),
}).strict() ;

export default SystemLogDeleteManyArgsSchema;
