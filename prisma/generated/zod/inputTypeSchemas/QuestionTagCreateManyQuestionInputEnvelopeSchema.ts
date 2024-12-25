import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagCreateManyQuestionInputSchema } from './QuestionTagCreateManyQuestionInputSchema';

export const QuestionTagCreateManyQuestionInputEnvelopeSchema: z.ZodType<Prisma.QuestionTagCreateManyQuestionInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => QuestionTagCreateManyQuestionInputSchema),z.lazy(() => QuestionTagCreateManyQuestionInputSchema).array() ]),
}).strict();

export default QuestionTagCreateManyQuestionInputEnvelopeSchema;
