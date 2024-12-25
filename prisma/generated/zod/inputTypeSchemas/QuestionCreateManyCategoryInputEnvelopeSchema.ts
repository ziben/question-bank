import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateManyCategoryInputSchema } from './QuestionCreateManyCategoryInputSchema';

export const QuestionCreateManyCategoryInputEnvelopeSchema: z.ZodType<Prisma.QuestionCreateManyCategoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => QuestionCreateManyCategoryInputSchema),z.lazy(() => QuestionCreateManyCategoryInputSchema).array() ]),
}).strict();

export default QuestionCreateManyCategoryInputEnvelopeSchema;
