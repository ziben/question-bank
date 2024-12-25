import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCategoryWhereInputSchema } from '../inputTypeSchemas/TagCategoryWhereInputSchema'
import { TagCategoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TagCategoryOrderByWithAggregationInputSchema'
import { TagCategoryScalarFieldEnumSchema } from '../inputTypeSchemas/TagCategoryScalarFieldEnumSchema'
import { TagCategoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TagCategoryScalarWhereWithAggregatesInputSchema'

export const TagCategoryGroupByArgsSchema: z.ZodType<Prisma.TagCategoryGroupByArgs> = z.object({
  where: TagCategoryWhereInputSchema.optional(),
  orderBy: z.union([ TagCategoryOrderByWithAggregationInputSchema.array(),TagCategoryOrderByWithAggregationInputSchema ]).optional(),
  by: TagCategoryScalarFieldEnumSchema.array(),
  having: TagCategoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TagCategoryGroupByArgsSchema;
