import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateManySourceInputSchema } from './QuestionCreateManySourceInputSchema';

export const QuestionCreateManySourceInputEnvelopeSchema: z.ZodType<Prisma.QuestionCreateManySourceInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => QuestionCreateManySourceInputSchema),z.lazy(() => QuestionCreateManySourceInputSchema).array() ]),
}).strict();

export default QuestionCreateManySourceInputEnvelopeSchema;
