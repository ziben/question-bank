import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const QuestionSumOrderByAggregateInputSchema: z.ZodType<Prisma.QuestionSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  difficulty: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  subjectId: z.lazy(() => SortOrderSchema).optional(),
  gradeId: z.lazy(() => SortOrderSchema).optional(),
  sourceId: z.lazy(() => SortOrderSchema).optional(),
  creatorId: z.lazy(() => SortOrderSchema).optional(),
  updaterId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default QuestionSumOrderByAggregateInputSchema;
