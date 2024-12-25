import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionFindManyArgsSchema } from "../outputTypeSchemas/QuestionFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { SourceCountOutputTypeArgsSchema } from "../outputTypeSchemas/SourceCountOutputTypeArgsSchema"

export const SourceIncludeSchema: z.ZodType<Prisma.SourceInclude> = z.object({
  questions: z.union([z.boolean(),z.lazy(() => QuestionFindManyArgsSchema)]).optional(),
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  updatedBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SourceCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default SourceIncludeSchema;
