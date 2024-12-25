import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateManyCreatedByInputSchema } from './QuestionCreateManyCreatedByInputSchema';

export const QuestionCreateManyCreatedByInputEnvelopeSchema: z.ZodType<Prisma.QuestionCreateManyCreatedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => QuestionCreateManyCreatedByInputSchema),z.lazy(() => QuestionCreateManyCreatedByInputSchema).array() ]),
}).strict();

export default QuestionCreateManyCreatedByInputEnvelopeSchema;
