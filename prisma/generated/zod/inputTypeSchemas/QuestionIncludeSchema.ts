import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryArgsSchema } from "../outputTypeSchemas/CategoryArgsSchema"
import { SubjectArgsSchema } from "../outputTypeSchemas/SubjectArgsSchema"
import { GradeArgsSchema } from "../outputTypeSchemas/GradeArgsSchema"
import { SourceArgsSchema } from "../outputTypeSchemas/SourceArgsSchema"
import { QuestionTagFindManyArgsSchema } from "../outputTypeSchemas/QuestionTagFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { QuestionCountOutputTypeArgsSchema } from "../outputTypeSchemas/QuestionCountOutputTypeArgsSchema"

export const QuestionIncludeSchema: z.ZodType<Prisma.QuestionInclude> = z.object({
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  subject: z.union([z.boolean(),z.lazy(() => SubjectArgsSchema)]).optional(),
  grade: z.union([z.boolean(),z.lazy(() => GradeArgsSchema)]).optional(),
  source: z.union([z.boolean(),z.lazy(() => SourceArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => QuestionTagFindManyArgsSchema)]).optional(),
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  updatedBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => QuestionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default QuestionIncludeSchema;
