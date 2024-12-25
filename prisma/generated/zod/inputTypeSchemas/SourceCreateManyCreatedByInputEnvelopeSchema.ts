import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SourceCreateManyCreatedByInputSchema } from './SourceCreateManyCreatedByInputSchema';

export const SourceCreateManyCreatedByInputEnvelopeSchema: z.ZodType<Prisma.SourceCreateManyCreatedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SourceCreateManyCreatedByInputSchema),z.lazy(() => SourceCreateManyCreatedByInputSchema).array() ]),
}).strict();

export default SourceCreateManyCreatedByInputEnvelopeSchema;
