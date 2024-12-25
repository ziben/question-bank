import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';

export const QuestionTagScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.QuestionTagScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => QuestionTagScalarWhereWithAggregatesInputSchema),z.lazy(() => QuestionTagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuestionTagScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuestionTagScalarWhereWithAggregatesInputSchema),z.lazy(() => QuestionTagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  questionId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  isDeleted: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  creatorId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  updaterId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default QuestionTagScalarWhereWithAggregatesInputSchema;
