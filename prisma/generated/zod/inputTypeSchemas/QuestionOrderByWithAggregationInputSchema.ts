import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { QuestionCountOrderByAggregateInputSchema } from './QuestionCountOrderByAggregateInputSchema';
import { QuestionAvgOrderByAggregateInputSchema } from './QuestionAvgOrderByAggregateInputSchema';
import { QuestionMaxOrderByAggregateInputSchema } from './QuestionMaxOrderByAggregateInputSchema';
import { QuestionMinOrderByAggregateInputSchema } from './QuestionMinOrderByAggregateInputSchema';
import { QuestionSumOrderByAggregateInputSchema } from './QuestionSumOrderByAggregateInputSchema';

export const QuestionOrderByWithAggregationInputSchema: z.ZodType<Prisma.QuestionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  answer: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  analysis: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  difficulty: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  subjectId: z.lazy(() => SortOrderSchema).optional(),
  gradeId: z.lazy(() => SortOrderSchema).optional(),
  sourceId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  isDeleted: z.lazy(() => SortOrderSchema).optional(),
  creatorId: z.lazy(() => SortOrderSchema).optional(),
  updaterId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => QuestionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => QuestionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => QuestionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => QuestionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => QuestionSumOrderByAggregateInputSchema).optional()
}).strict();

export default QuestionOrderByWithAggregationInputSchema;
