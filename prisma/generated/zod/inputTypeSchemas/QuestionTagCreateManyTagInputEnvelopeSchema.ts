import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagCreateManyTagInputSchema } from './QuestionTagCreateManyTagInputSchema';

export const QuestionTagCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.QuestionTagCreateManyTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => QuestionTagCreateManyTagInputSchema),z.lazy(() => QuestionTagCreateManyTagInputSchema).array() ]),
}).strict();

export default QuestionTagCreateManyTagInputEnvelopeSchema;
