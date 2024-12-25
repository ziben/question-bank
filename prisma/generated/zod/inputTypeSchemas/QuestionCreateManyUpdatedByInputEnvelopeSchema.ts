import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateManyUpdatedByInputSchema } from './QuestionCreateManyUpdatedByInputSchema';

export const QuestionCreateManyUpdatedByInputEnvelopeSchema: z.ZodType<Prisma.QuestionCreateManyUpdatedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => QuestionCreateManyUpdatedByInputSchema),z.lazy(() => QuestionCreateManyUpdatedByInputSchema).array() ]),
}).strict();

export default QuestionCreateManyUpdatedByInputEnvelopeSchema;
