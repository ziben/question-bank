import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionFindManyArgsSchema } from "../outputTypeSchemas/QuestionFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { GradeCountOutputTypeArgsSchema } from "../outputTypeSchemas/GradeCountOutputTypeArgsSchema"

export const GradeIncludeSchema: z.ZodType<Prisma.GradeInclude> = z.object({
  questions: z.union([z.boolean(),z.lazy(() => QuestionFindManyArgsSchema)]).optional(),
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  updatedBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => GradeCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default GradeIncludeSchema;
