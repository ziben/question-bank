import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagWhereInputSchema } from './QuestionTagWhereInputSchema';

export const QuestionTagListRelationFilterSchema: z.ZodType<Prisma.QuestionTagListRelationFilter> = z.object({
  every: z.lazy(() => QuestionTagWhereInputSchema).optional(),
  some: z.lazy(() => QuestionTagWhereInputSchema).optional(),
  none: z.lazy(() => QuestionTagWhereInputSchema).optional()
}).strict();

export default QuestionTagListRelationFilterSchema;
