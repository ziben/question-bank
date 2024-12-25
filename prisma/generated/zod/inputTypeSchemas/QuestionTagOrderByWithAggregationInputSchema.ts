import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { QuestionTagCountOrderByAggregateInputSchema } from './QuestionTagCountOrderByAggregateInputSchema';
import { QuestionTagAvgOrderByAggregateInputSchema } from './QuestionTagAvgOrderByAggregateInputSchema';
import { QuestionTagMaxOrderByAggregateInputSchema } from './QuestionTagMaxOrderByAggregateInputSchema';
import { QuestionTagMinOrderByAggregateInputSchema } from './QuestionTagMinOrderByAggregateInputSchema';
import { QuestionTagSumOrderByAggregateInputSchema } from './QuestionTagSumOrderByAggregateInputSchema';

export const QuestionTagOrderByWithAggregationInputSchema: z.ZodType<Prisma.QuestionTagOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  questionId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  isDeleted: z.lazy(() => SortOrderSchema).optional(),
  creatorId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  updaterId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => QuestionTagCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => QuestionTagAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => QuestionTagMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => QuestionTagMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => QuestionTagSumOrderByAggregateInputSchema).optional()
}).strict();

export default QuestionTagOrderByWithAggregationInputSchema;
