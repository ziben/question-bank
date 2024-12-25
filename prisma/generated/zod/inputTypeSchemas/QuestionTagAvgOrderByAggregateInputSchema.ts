import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const QuestionTagAvgOrderByAggregateInputSchema: z.ZodType<Prisma.QuestionTagAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  questionId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  creatorId: z.lazy(() => SortOrderSchema).optional(),
  updaterId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default QuestionTagAvgOrderByAggregateInputSchema;
