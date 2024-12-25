import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeCreateManyCreatedByInputSchema } from './GradeCreateManyCreatedByInputSchema';

export const GradeCreateManyCreatedByInputEnvelopeSchema: z.ZodType<Prisma.GradeCreateManyCreatedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => GradeCreateManyCreatedByInputSchema),z.lazy(() => GradeCreateManyCreatedByInputSchema).array() ]),
}).strict();

export default GradeCreateManyCreatedByInputEnvelopeSchema;
