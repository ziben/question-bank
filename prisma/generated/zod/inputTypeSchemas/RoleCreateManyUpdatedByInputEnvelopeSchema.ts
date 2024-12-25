import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateManyUpdatedByInputSchema } from './RoleCreateManyUpdatedByInputSchema';

export const RoleCreateManyUpdatedByInputEnvelopeSchema: z.ZodType<Prisma.RoleCreateManyUpdatedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RoleCreateManyUpdatedByInputSchema),z.lazy(() => RoleCreateManyUpdatedByInputSchema).array() ]),
}).strict();

export default RoleCreateManyUpdatedByInputEnvelopeSchema;
