import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCategoryIncludeSchema } from '../inputTypeSchemas/TagCategoryIncludeSchema'
import { TagCategoryUpdateInputSchema } from '../inputTypeSchemas/TagCategoryUpdateInputSchema'
import { TagCategoryUncheckedUpdateInputSchema } from '../inputTypeSchemas/TagCategoryUncheckedUpdateInputSchema'
import { TagCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/TagCategoryWhereUniqueInputSchema'
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

export const TagCategoryUpdateArgsSchema: z.ZodType<Prisma.TagCategoryUpdateArgs> = z.object({
  select: TagCategorySelectSchema.optional(),
  include: TagCategoryIncludeSchema.optional(),
  data: z.union([ TagCategoryUpdateInputSchema,TagCategoryUncheckedUpdateInputSchema ]),
  where: TagCategoryWhereUniqueInputSchema,
}).strict() ;

export default TagCategoryUpdateArgsSchema;
