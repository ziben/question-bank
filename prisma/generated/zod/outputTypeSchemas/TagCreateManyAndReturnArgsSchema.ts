import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCreateManyInputSchema } from '../inputTypeSchemas/TagCreateManyInputSchema'

export const TagCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TagCreateManyAndReturnArgs> = z.object({
  data: z.union([ TagCreateManyInputSchema,TagCreateManyInputSchema.array() ]),
}).strict() ;

export default TagCreateManyAndReturnArgsSchema;
