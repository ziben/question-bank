import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagCreateManyUpdatedByInputSchema } from './QuestionTagCreateManyUpdatedByInputSchema';

export const QuestionTagCreateManyUpdatedByInputEnvelopeSchema: z.ZodType<Prisma.QuestionTagCreateManyUpdatedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => QuestionTagCreateManyUpdatedByInputSchema),z.lazy(() => QuestionTagCreateManyUpdatedByInputSchema).array() ]),
}).strict();

export default QuestionTagCreateManyUpdatedByInputEnvelopeSchema;
