import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const QuestionTagOrderByRelationAggregateInputSchema: z.ZodType<Prisma.QuestionTagOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default QuestionTagOrderByRelationAggregateInputSchema;
