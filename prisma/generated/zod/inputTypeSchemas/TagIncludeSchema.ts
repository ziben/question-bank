import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCategoryArgsSchema } from "../outputTypeSchemas/TagCategoryArgsSchema"
import { QuestionTagFindManyArgsSchema } from "../outputTypeSchemas/QuestionTagFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { TagCountOutputTypeArgsSchema } from "../outputTypeSchemas/TagCountOutputTypeArgsSchema"

export const TagIncludeSchema: z.ZodType<Prisma.TagInclude> = z.object({
  category: z.union([z.boolean(),z.lazy(() => TagCategoryArgsSchema)]).optional(),
  questionTags: z.union([z.boolean(),z.lazy(() => QuestionTagFindManyArgsSchema)]).optional(),
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  updatedBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TagCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default TagIncludeSchema;
