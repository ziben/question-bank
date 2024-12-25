import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagIncludeSchema } from '../inputTypeSchemas/TagIncludeSchema'
import { TagWhereUniqueInputSchema } from '../inputTypeSchemas/TagWhereUniqueInputSchema'
import { TagCreateInputSchema } from '../inputTypeSchemas/TagCreateInputSchema'
import { TagUncheckedCreateInputSchema } from '../inputTypeSchemas/TagUncheckedCreateInputSchema'
import { TagUpdateInputSchema } from '../inputTypeSchemas/TagUpdateInputSchema'
import { TagUncheckedUpdateInputSchema } from '../inputTypeSchemas/TagUncheckedUpdateInputSchema'
import { TagCategoryArgsSchema } from "../outputTypeSchemas/TagCategoryArgsSchema"
import { QuestionTagFindManyArgsSchema } from "../outputTypeSchemas/QuestionTagFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { TagCountOutputTypeArgsSchema } from "../outputTypeSchemas/TagCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TagSelectSchema: z.ZodType<Prisma.TagSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  code: z.boolean().optional(),
  description: z.boolean().optional(),
  sortOrder: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.boolean().optional(),
  updaterId: z.boolean().optional(),
  category: z.union([z.boolean(),z.lazy(() => TagCategoryArgsSchema)]).optional(),
  questionTags: z.union([z.boolean(),z.lazy(() => QuestionTagFindManyArgsSchema)]).optional(),
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  updatedBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TagCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TagUpsertArgsSchema: z.ZodType<Prisma.TagUpsertArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
  create: z.union([ TagCreateInputSchema,TagUncheckedCreateInputSchema ]),
  update: z.union([ TagUpdateInputSchema,TagUncheckedUpdateInputSchema ]),
}).strict() ;

export default TagUpsertArgsSchema;
