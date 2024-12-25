import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateManyCreatedByInputSchema } from './RoleCreateManyCreatedByInputSchema';

export const RoleCreateManyCreatedByInputEnvelopeSchema: z.ZodType<Prisma.RoleCreateManyCreatedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RoleCreateManyCreatedByInputSchema),z.lazy(() => RoleCreateManyCreatedByInputSchema).array() ]),
}).strict();

export default RoleCreateManyCreatedByInputEnvelopeSchema;
