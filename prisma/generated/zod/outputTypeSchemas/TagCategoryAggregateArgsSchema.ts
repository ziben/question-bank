import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCategoryWhereInputSchema } from '../inputTypeSchemas/TagCategoryWhereInputSchema'
import { TagCategoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/TagCategoryOrderByWithRelationInputSchema'
import { TagCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/TagCategoryWhereUniqueInputSchema'

export const TagCategoryAggregateArgsSchema: z.ZodType<Prisma.TagCategoryAggregateArgs> = z.object({
  where: TagCategoryWhereInputSchema.optional(),
  orderBy: z.union([ TagCategoryOrderByWithRelationInputSchema.array(),TagCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: TagCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TagCategoryAggregateArgsSchema;
