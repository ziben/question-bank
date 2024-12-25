import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionWhereInputSchema } from './QuestionWhereInputSchema';

export const QuestionScalarRelationFilterSchema: z.ZodType<Prisma.QuestionScalarRelationFilter> = z.object({
  is: z.lazy(() => QuestionWhereInputSchema).optional(),
  isNot: z.lazy(() => QuestionWhereInputSchema).optional()
}).strict();

export default QuestionScalarRelationFilterSchema;
