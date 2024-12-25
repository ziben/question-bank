import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryCreateManyUpdatedByInputSchema } from './TagCategoryCreateManyUpdatedByInputSchema';

export const TagCategoryCreateManyUpdatedByInputEnvelopeSchema: z.ZodType<Prisma.TagCategoryCreateManyUpdatedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TagCategoryCreateManyUpdatedByInputSchema),z.lazy(() => TagCategoryCreateManyUpdatedByInputSchema).array() ]),
}).strict();

export default TagCategoryCreateManyUpdatedByInputEnvelopeSchema;
