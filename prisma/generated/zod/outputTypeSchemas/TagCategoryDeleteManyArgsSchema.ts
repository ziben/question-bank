import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCategoryWhereInputSchema } from '../inputTypeSchemas/TagCategoryWhereInputSchema'

export const TagCategoryDeleteManyArgsSchema: z.ZodType<Prisma.TagCategoryDeleteManyArgs> = z.object({
  where: TagCategoryWhereInputSchema.optional(),
}).strict() ;

export default TagCategoryDeleteManyArgsSchema;
