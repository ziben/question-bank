import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCategoryCreateManyInputSchema } from '../inputTypeSchemas/TagCategoryCreateManyInputSchema'

export const TagCategoryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TagCategoryCreateManyAndReturnArgs> = z.object({
  data: z.union([ TagCategoryCreateManyInputSchema,TagCategoryCreateManyInputSchema.array() ]),
}).strict() ;

export default TagCategoryCreateManyAndReturnArgsSchema;
