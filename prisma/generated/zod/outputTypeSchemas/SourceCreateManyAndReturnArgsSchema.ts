import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SourceCreateManyInputSchema } from '../inputTypeSchemas/SourceCreateManyInputSchema'

export const SourceCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SourceCreateManyAndReturnArgs> = z.object({
  data: z.union([ SourceCreateManyInputSchema,SourceCreateManyInputSchema.array() ]),
}).strict() ;

export default SourceCreateManyAndReturnArgsSchema;
