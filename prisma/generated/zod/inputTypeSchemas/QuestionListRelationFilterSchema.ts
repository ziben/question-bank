import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionWhereInputSchema } from './QuestionWhereInputSchema';

export const QuestionListRelationFilterSchema: z.ZodType<Prisma.QuestionListRelationFilter> = z.object({
  every: z.lazy(() => QuestionWhereInputSchema).optional(),
  some: z.lazy(() => QuestionWhereInputSchema).optional(),
  none: z.lazy(() => QuestionWhereInputSchema).optional()
}).strict();

export default QuestionListRelationFilterSchema;
