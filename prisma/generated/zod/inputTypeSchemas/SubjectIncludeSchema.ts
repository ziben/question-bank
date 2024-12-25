import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionFindManyArgsSchema } from "../outputTypeSchemas/QuestionFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { SubjectCountOutputTypeArgsSchema } from "../outputTypeSchemas/SubjectCountOutputTypeArgsSchema"

export const SubjectIncludeSchema: z.ZodType<Prisma.SubjectInclude> = z.object({
  questions: z.union([z.boolean(),z.lazy(() => QuestionFindManyArgsSchema)]).optional(),
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  updatedBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SubjectCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default SubjectIncludeSchema;
