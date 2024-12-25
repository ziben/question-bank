import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeCreateManyUpdatedByInputSchema } from './GradeCreateManyUpdatedByInputSchema';

export const GradeCreateManyUpdatedByInputEnvelopeSchema: z.ZodType<Prisma.GradeCreateManyUpdatedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => GradeCreateManyUpdatedByInputSchema),z.lazy(() => GradeCreateManyUpdatedByInputSchema).array() ]),
}).strict();

export default GradeCreateManyUpdatedByInputEnvelopeSchema;
