import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryCreateManyCreatedByInputSchema } from './TagCategoryCreateManyCreatedByInputSchema';

export const TagCategoryCreateManyCreatedByInputEnvelopeSchema: z.ZodType<Prisma.TagCategoryCreateManyCreatedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TagCategoryCreateManyCreatedByInputSchema),z.lazy(() => TagCategoryCreateManyCreatedByInputSchema).array() ]),
}).strict();

export default TagCategoryCreateManyCreatedByInputEnvelopeSchema;
