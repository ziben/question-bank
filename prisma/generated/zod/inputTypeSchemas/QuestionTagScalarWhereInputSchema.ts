import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';

export const QuestionTagScalarWhereInputSchema: z.ZodType<Prisma.QuestionTagScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => QuestionTagScalarWhereInputSchema),z.lazy(() => QuestionTagScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuestionTagScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuestionTagScalarWhereInputSchema),z.lazy(() => QuestionTagScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  questionId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  isDeleted: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  creatorId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  updaterId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default QuestionTagScalarWhereInputSchema;
