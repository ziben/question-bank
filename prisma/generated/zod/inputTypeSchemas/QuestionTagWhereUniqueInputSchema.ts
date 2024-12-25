import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagQuestionIdTagIdCompoundUniqueInputSchema } from './QuestionTagQuestionIdTagIdCompoundUniqueInputSchema';
import { QuestionTagWhereInputSchema } from './QuestionTagWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { QuestionScalarRelationFilterSchema } from './QuestionScalarRelationFilterSchema';
import { QuestionWhereInputSchema } from './QuestionWhereInputSchema';
import { TagScalarRelationFilterSchema } from './TagScalarRelationFilterSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { UserNullableScalarRelationFilterSchema } from './UserNullableScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const QuestionTagWhereUniqueInputSchema: z.ZodType<Prisma.QuestionTagWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    questionId_tagId: z.lazy(() => QuestionTagQuestionIdTagIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    questionId_tagId: z.lazy(() => QuestionTagQuestionIdTagIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  questionId_tagId: z.lazy(() => QuestionTagQuestionIdTagIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => QuestionTagWhereInputSchema),z.lazy(() => QuestionTagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuestionTagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuestionTagWhereInputSchema),z.lazy(() => QuestionTagWhereInputSchema).array() ]).optional(),
  questionId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  isDeleted: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  creatorId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  updaterId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  question: z.union([ z.lazy(() => QuestionScalarRelationFilterSchema),z.lazy(() => QuestionWhereInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => TagScalarRelationFilterSchema),z.lazy(() => TagWhereInputSchema) ]).optional(),
  createdBy: z.union([ z.lazy(() => UserNullableScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  updatedBy: z.union([ z.lazy(() => UserNullableScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict());

export default QuestionTagWhereUniqueInputSchema;
