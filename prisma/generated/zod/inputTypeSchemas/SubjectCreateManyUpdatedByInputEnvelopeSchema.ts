import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectCreateManyUpdatedByInputSchema } from './SubjectCreateManyUpdatedByInputSchema';

export const SubjectCreateManyUpdatedByInputEnvelopeSchema: z.ZodType<Prisma.SubjectCreateManyUpdatedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SubjectCreateManyUpdatedByInputSchema),z.lazy(() => SubjectCreateManyUpdatedByInputSchema).array() ]),
}).strict();

export default SubjectCreateManyUpdatedByInputEnvelopeSchema;
