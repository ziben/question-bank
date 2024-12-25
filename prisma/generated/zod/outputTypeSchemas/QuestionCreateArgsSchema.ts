import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionIncludeSchema } from '../inputTypeSchemas/QuestionIncludeSchema'
import { QuestionCreateInputSchema } from '../inputTypeSchemas/QuestionCreateInputSchema'
import { QuestionUncheckedCreateInputSchema } from '../inputTypeSchemas/QuestionUncheckedCreateInputSchema'
import { CategoryArgsSchema } from "../outputTypeSchemas/CategoryArgsSchema"
import { SubjectArgsSchema } from "../outputTypeSchemas/SubjectArgsSchema"
import { GradeArgsSchema } from "../outputTypeSchemas/GradeArgsSchema"
import { SourceArgsSchema } from "../outputTypeSchemas/SourceArgsSchema"
import { QuestionTagFindManyArgsSchema } from "../outputTypeSchemas/QuestionTagFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { QuestionCountOutputTypeArgsSchema } from "../outputTypeSchemas/QuestionCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const QuestionSelectSchema: z.ZodType<Prisma.QuestionSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  answer: z.boolean().optional(),
  analysis: z.boolean().optional(),
  difficulty: z.boolean().optional(),
  status: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  subjectId: z.boolean().optional(),
  gradeId: z.boolean().optional(),
  sourceId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.boolean().optional(),
  updaterId: z.boolean().optional(),
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  subject: z.union([z.boolean(),z.lazy(() => SubjectArgsSchema)]).optional(),
  grade: z.union([z.boolean(),z.lazy(() => GradeArgsSchema)]).optional(),
  source: z.union([z.boolean(),z.lazy(() => SourceArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => QuestionTagFindManyArgsSchema)]).optional(),
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  updatedBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => QuestionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const QuestionCreateArgsSchema: z.ZodType<Prisma.QuestionCreateArgs> = z.object({
  select: QuestionSelectSchema.optional(),
  include: QuestionIncludeSchema.optional(),
  data: z.union([ QuestionCreateInputSchema,QuestionUncheckedCreateInputSchema ]),
}).strict() ;

export default QuestionCreateArgsSchema;
