import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SystemLogCreateManyUserInputSchema } from './SystemLogCreateManyUserInputSchema';

export const SystemLogCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SystemLogCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SystemLogCreateManyUserInputSchema),z.lazy(() => SystemLogCreateManyUserInputSchema).array() ]),
}).strict();

export default SystemLogCreateManyUserInputEnvelopeSchema;
