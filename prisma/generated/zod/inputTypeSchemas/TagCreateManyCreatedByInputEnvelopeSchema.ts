import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateManyCreatedByInputSchema } from './TagCreateManyCreatedByInputSchema';

export const TagCreateManyCreatedByInputEnvelopeSchema: z.ZodType<Prisma.TagCreateManyCreatedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TagCreateManyCreatedByInputSchema),z.lazy(() => TagCreateManyCreatedByInputSchema).array() ]),
}).strict();

export default TagCreateManyCreatedByInputEnvelopeSchema;
