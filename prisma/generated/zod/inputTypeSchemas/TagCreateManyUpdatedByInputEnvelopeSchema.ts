import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateManyUpdatedByInputSchema } from './TagCreateManyUpdatedByInputSchema';

export const TagCreateManyUpdatedByInputEnvelopeSchema: z.ZodType<Prisma.TagCreateManyUpdatedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TagCreateManyUpdatedByInputSchema),z.lazy(() => TagCreateManyUpdatedByInputSchema).array() ]),
}).strict();

export default TagCreateManyUpdatedByInputEnvelopeSchema;
