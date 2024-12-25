import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SourceUpdateManyMutationInputSchema } from '../inputTypeSchemas/SourceUpdateManyMutationInputSchema'
import { SourceUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SourceUncheckedUpdateManyInputSchema'
import { SourceWhereInputSchema } from '../inputTypeSchemas/SourceWhereInputSchema'

export const SourceUpdateManyArgsSchema: z.ZodType<Prisma.SourceUpdateManyArgs> = z.object({
  data: z.union([ SourceUpdateManyMutationInputSchema,SourceUncheckedUpdateManyInputSchema ]),
  where: SourceWhereInputSchema.optional(),
}).strict() ;

export default SourceUpdateManyArgsSchema;
