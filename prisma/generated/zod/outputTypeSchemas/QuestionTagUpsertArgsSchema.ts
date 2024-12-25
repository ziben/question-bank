import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTagIncludeSchema } from '../inputTypeSchemas/QuestionTagIncludeSchema'
import { QuestionTagWhereUniqueInputSchema } from '../inputTypeSchemas/QuestionTagWhereUniqueInputSchema'
import { QuestionTagCreateInputSchema } from '../inputTypeSchemas/QuestionTagCreateInputSchema'
import { QuestionTagUncheckedCreateInputSchema } from '../inputTypeSchemas/QuestionTagUncheckedCreateInputSchema'
import { QuestionTagUpdateInputSchema } from '../inputTypeSchemas/QuestionTagUpdateInputSchema'
import { QuestionTagUncheckedUpdateInputSchema } from '../inputTypeSchemas/QuestionTagUncheckedUpdateInputSchema'
import { QuestionArgsSchema } from "../outputTypeSchemas/QuestionArgsSchema"
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const QuestionTagUpsertArgsSchema: z.ZodType<Prisma.QuestionTagUpsertArgs> = z.object({
  select: QuestionTagSelectSchema.optional(),
  include: QuestionTagIncludeSchema.optional(),
  where: QuestionTagWhereUniqueInputSchema,
  create: z.union([ QuestionTagCreateInputSchema,QuestionTagUncheckedCreateInputSchema ]),
  update: z.union([ QuestionTagUpdateInputSchema,QuestionTagUncheckedUpdateInputSchema ]),
}).strict() ;

export default QuestionTagUpsertArgsSchema;
