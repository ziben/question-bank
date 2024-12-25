import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectCreateManyCreatedByInputSchema } from './SubjectCreateManyCreatedByInputSchema';

export const SubjectCreateManyCreatedByInputEnvelopeSchema: z.ZodType<Prisma.SubjectCreateManyCreatedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SubjectCreateManyCreatedByInputSchema),z.lazy(() => SubjectCreateManyCreatedByInputSchema).array() ]),
}).strict();

export default SubjectCreateManyCreatedByInputEnvelopeSchema;
