import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCategoryIncludeSchema } from '../inputTypeSchemas/TagCategoryIncludeSchema'
import { TagCategoryWhereInputSchema } from '../inputTypeSchemas/TagCategoryWhereInputSchema'
import { TagCategoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/TagCategoryOrderByWithRelationInputSchema'
import { TagCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/TagCategoryWhereUniqueInputSchema'
import { TagCategoryScalarFieldEnumSchema } from '../inputTypeSchemas/TagCategoryScalarFieldEnumSchema'
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { TagCategoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/TagCategoryCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TagCategorySelectSchema: z.ZodType<Prisma.TagCategorySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  code: z.boolean().optional(),
  description: z.boolean().optional(),
  allowMultiple: z.boolean().optional(),
  sortOrder: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.boolean().optional(),
  updaterId: z.boolean().optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  updatedBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TagCategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TagCategoryFindManyArgsSchema: z.ZodType<Prisma.TagCategoryFindManyArgs> = z.object({
  select: TagCategorySelectSchema.optional(),
  include: TagCategoryIncludeSchema.optional(),
  where: TagCategoryWhereInputSchema.optional(),
  orderBy: z.union([ TagCategoryOrderByWithRelationInputSchema.array(),TagCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: TagCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TagCategoryScalarFieldEnumSchema,TagCategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default TagCategoryFindManyArgsSchema;
