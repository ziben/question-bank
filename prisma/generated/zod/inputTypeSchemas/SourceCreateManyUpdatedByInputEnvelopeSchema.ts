import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SourceCreateManyUpdatedByInputSchema } from './SourceCreateManyUpdatedByInputSchema';

export const SourceCreateManyUpdatedByInputEnvelopeSchema: z.ZodType<Prisma.SourceCreateManyUpdatedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SourceCreateManyUpdatedByInputSchema),z.lazy(() => SourceCreateManyUpdatedByInputSchema).array() ]),
}).strict();

export default SourceCreateManyUpdatedByInputEnvelopeSchema;
