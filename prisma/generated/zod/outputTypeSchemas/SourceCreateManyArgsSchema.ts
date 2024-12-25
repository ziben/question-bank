import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SourceCreateManyInputSchema } from '../inputTypeSchemas/SourceCreateManyInputSchema'

export const SourceCreateManyArgsSchema: z.ZodType<Prisma.SourceCreateManyArgs> = z.object({
  data: z.union([ SourceCreateManyInputSchema,SourceCreateManyInputSchema.array() ]),
}).strict() ;

export default SourceCreateManyArgsSchema;
