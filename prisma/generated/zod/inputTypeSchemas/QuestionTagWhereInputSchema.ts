import type { Prisma } from '@prisma/client';

import { z } from 'zod';
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

export const QuestionTagWhereInputSchema: z.ZodType<Prisma.QuestionTagWhereInput> = z.object({
  AND: z.union([ z.lazy(() => QuestionTagWhereInputSchema),z.lazy(() => QuestionTagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuestionTagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuestionTagWhereInputSchema),z.lazy(() => QuestionTagWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  questionId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  isDeleted: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  creatorId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  updaterId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  question: z.union([ z.lazy(() => QuestionScalarRelationFilterSchema),z.lazy(() => QuestionWhereInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => TagScalarRelationFilterSchema),z.lazy(() => TagWhereInputSchema) ]).optional(),
  createdBy: z.union([ z.lazy(() => UserNullableScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  updatedBy: z.union([ z.lazy(() => UserNullableScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict();

export default QuestionTagWhereInputSchema;
