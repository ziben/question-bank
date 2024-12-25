import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionArgsSchema } from "../outputTypeSchemas/QuestionArgsSchema"
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const QuestionTagIncludeSchema: z.ZodType<Prisma.QuestionTagInclude> = z.object({
  question: z.union([z.boolean(),z.lazy(() => QuestionArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  updatedBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export default QuestionTagIncludeSchema;
