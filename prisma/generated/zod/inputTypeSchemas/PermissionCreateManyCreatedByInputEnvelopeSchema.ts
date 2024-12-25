import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PermissionCreateManyCreatedByInputSchema } from './PermissionCreateManyCreatedByInputSchema';

export const PermissionCreateManyCreatedByInputEnvelopeSchema: z.ZodType<Prisma.PermissionCreateManyCreatedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PermissionCreateManyCreatedByInputSchema),z.lazy(() => PermissionCreateManyCreatedByInputSchema).array() ]),
}).strict();

export default PermissionCreateManyCreatedByInputEnvelopeSchema;
