import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SourceWhereInputSchema } from '../inputTypeSchemas/SourceWhereInputSchema'

export const SourceDeleteManyArgsSchema: z.ZodType<Prisma.SourceDeleteManyArgs> = z.object({
  where: SourceWhereInputSchema.optional(),
}).strict() ;

export default SourceDeleteManyArgsSchema;
