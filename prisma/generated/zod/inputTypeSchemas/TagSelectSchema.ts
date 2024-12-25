import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCategoryArgsSchema } from "../outputTypeSchemas/TagCategoryArgsSchema"
import { QuestionTagFindManyArgsSchema } from "../outputTypeSchemas/QuestionTagFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { TagCountOutputTypeArgsSchema } from "../outputTypeSchemas/TagCountOutputTypeArgsSchema"

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

export default TagSelectSchema;
