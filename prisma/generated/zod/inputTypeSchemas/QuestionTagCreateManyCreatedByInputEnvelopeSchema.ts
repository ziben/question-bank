import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagCreateManyCreatedByInputSchema } from './QuestionTagCreateManyCreatedByInputSchema';

export const QuestionTagCreateManyCreatedByInputEnvelopeSchema: z.ZodType<Prisma.QuestionTagCreateManyCreatedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => QuestionTagCreateManyCreatedByInputSchema),z.lazy(() => QuestionTagCreateManyCreatedByInputSchema).array() ]),
}).strict();

export default QuestionTagCreateManyCreatedByInputEnvelopeSchema;
