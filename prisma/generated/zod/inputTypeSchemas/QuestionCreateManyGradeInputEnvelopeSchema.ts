import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateManyGradeInputSchema } from './QuestionCreateManyGradeInputSchema';

export const QuestionCreateManyGradeInputEnvelopeSchema: z.ZodType<Prisma.QuestionCreateManyGradeInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => QuestionCreateManyGradeInputSchema),z.lazy(() => QuestionCreateManyGradeInputSchema).array() ]),
}).strict();

export default QuestionCreateManyGradeInputEnvelopeSchema;
