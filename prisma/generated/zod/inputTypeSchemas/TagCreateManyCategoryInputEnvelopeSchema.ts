import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateManyCategoryInputSchema } from './TagCreateManyCategoryInputSchema';

export const TagCreateManyCategoryInputEnvelopeSchema: z.ZodType<Prisma.TagCreateManyCategoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TagCreateManyCategoryInputSchema),z.lazy(() => TagCreateManyCategoryInputSchema).array() ]),
}).strict();

export default TagCreateManyCategoryInputEnvelopeSchema;
