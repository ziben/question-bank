import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCategoryCreateManyInputSchema } from '../inputTypeSchemas/TagCategoryCreateManyInputSchema'

export const TagCategoryCreateManyArgsSchema: z.ZodType<Prisma.TagCategoryCreateManyArgs> = z.object({
  data: z.union([ TagCategoryCreateManyInputSchema,TagCategoryCreateManyInputSchema.array() ]),
}).strict() ;

export default TagCategoryCreateManyArgsSchema;
