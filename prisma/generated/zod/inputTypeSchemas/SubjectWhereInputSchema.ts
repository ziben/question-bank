import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { QuestionListRelationFilterSchema } from './QuestionListRelationFilterSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const SubjectWhereInputSchema: z.ZodType<Prisma.SubjectWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SubjectWhereInputSchema),z.lazy(() => SubjectWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SubjectWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SubjectWhereInputSchema),z.lazy(() => SubjectWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  isDeleted: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  creatorId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  updaterId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  questions: z.lazy(() => QuestionListRelationFilterSchema).optional(),
  createdBy: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  updatedBy: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export default SubjectWhereInputSchema;
