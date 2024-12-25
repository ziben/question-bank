import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { CategoryScalarRelationFilterSchema } from './CategoryScalarRelationFilterSchema';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';
import { SubjectScalarRelationFilterSchema } from './SubjectScalarRelationFilterSchema';
import { SubjectWhereInputSchema } from './SubjectWhereInputSchema';
import { GradeScalarRelationFilterSchema } from './GradeScalarRelationFilterSchema';
import { GradeWhereInputSchema } from './GradeWhereInputSchema';
import { SourceNullableScalarRelationFilterSchema } from './SourceNullableScalarRelationFilterSchema';
import { SourceWhereInputSchema } from './SourceWhereInputSchema';
import { QuestionTagListRelationFilterSchema } from './QuestionTagListRelationFilterSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const QuestionWhereInputSchema: z.ZodType<Prisma.QuestionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => QuestionWhereInputSchema),z.lazy(() => QuestionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuestionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuestionWhereInputSchema),z.lazy(() => QuestionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  answer: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  analysis: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  difficulty: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  subjectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  gradeId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  sourceId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  isDeleted: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  creatorId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  updaterId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  category: z.union([ z.lazy(() => CategoryScalarRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional(),
  subject: z.union([ z.lazy(() => SubjectScalarRelationFilterSchema),z.lazy(() => SubjectWhereInputSchema) ]).optional(),
  grade: z.union([ z.lazy(() => GradeScalarRelationFilterSchema),z.lazy(() => GradeWhereInputSchema) ]).optional(),
  source: z.union([ z.lazy(() => SourceNullableScalarRelationFilterSchema),z.lazy(() => SourceWhereInputSchema) ]).optional().nullable(),
  tags: z.lazy(() => QuestionTagListRelationFilterSchema).optional(),
  createdBy: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  updatedBy: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export default QuestionWhereInputSchema;
