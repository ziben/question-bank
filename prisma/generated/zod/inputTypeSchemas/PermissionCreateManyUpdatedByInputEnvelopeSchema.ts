import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PermissionCreateManyUpdatedByInputSchema } from './PermissionCreateManyUpdatedByInputSchema';

export const PermissionCreateManyUpdatedByInputEnvelopeSchema: z.ZodType<Prisma.PermissionCreateManyUpdatedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PermissionCreateManyUpdatedByInputSchema),z.lazy(() => PermissionCreateManyUpdatedByInputSchema).array() ]),
}).strict();

export default PermissionCreateManyUpdatedByInputEnvelopeSchema;
