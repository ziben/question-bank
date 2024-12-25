import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { TagCategoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/TagCategoryCountOutputTypeArgsSchema"

export const TagCategoryIncludeSchema: z.ZodType<Prisma.TagCategoryInclude> = z.object({
  tags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  updatedBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TagCategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default TagCategoryIncludeSchema;
