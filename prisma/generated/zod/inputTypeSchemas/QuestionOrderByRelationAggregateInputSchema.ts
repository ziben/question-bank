import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const QuestionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.QuestionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default QuestionOrderByRelationAggregateInputSchema;
