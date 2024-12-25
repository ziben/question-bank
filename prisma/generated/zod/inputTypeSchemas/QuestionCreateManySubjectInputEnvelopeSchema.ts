import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateManySubjectInputSchema } from './QuestionCreateManySubjectInputSchema';

export const QuestionCreateManySubjectInputEnvelopeSchema: z.ZodType<Prisma.QuestionCreateManySubjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => QuestionCreateManySubjectInputSchema),z.lazy(() => QuestionCreateManySubjectInputSchema).array() ]),
}).strict();

export default QuestionCreateManySubjectInputEnvelopeSchema;
