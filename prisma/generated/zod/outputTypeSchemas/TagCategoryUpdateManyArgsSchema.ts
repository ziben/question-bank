import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCategoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/TagCategoryUpdateManyMutationInputSchema'
import { TagCategoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TagCategoryUncheckedUpdateManyInputSchema'
import { TagCategoryWhereInputSchema } from '../inputTypeSchemas/TagCategoryWhereInputSchema'

export const TagCategoryUpdateManyArgsSchema: z.ZodType<Prisma.TagCategoryUpdateManyArgs> = z.object({
  data: z.union([ TagCategoryUpdateManyMutationInputSchema,TagCategoryUncheckedUpdateManyInputSchema ]),
  where: TagCategoryWhereInputSchema.optional(),
}).strict() ;

export default TagCategoryUpdateManyArgsSchema;
