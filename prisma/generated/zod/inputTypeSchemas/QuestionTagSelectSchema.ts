import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionArgsSchema } from "../outputTypeSchemas/QuestionArgsSchema"
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const QuestionTagSelectSchema: z.ZodType<Prisma.QuestionTagSelect> = z.object({
  id: z.boolean().optional(),
  questionId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.boolean().optional(),
  updaterId: z.boolean().optional(),
  question: z.union([z.boolean(),z.lazy(() => QuestionArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  updatedBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export default QuestionTagSelectSchema;
