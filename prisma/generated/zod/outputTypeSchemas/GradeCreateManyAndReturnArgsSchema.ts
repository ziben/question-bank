import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GradeCreateManyInputSchema } from '../inputTypeSchemas/GradeCreateManyInputSchema'

export const GradeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.GradeCreateManyAndReturnArgs> = z.object({
  data: z.union([ GradeCreateManyInputSchema,GradeCreateManyInputSchema.array() ]),
}).strict() ;

export default GradeCreateManyAndReturnArgsSchema;
