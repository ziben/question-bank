import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryCreateManyUpdatedByInputSchema } from './CategoryCreateManyUpdatedByInputSchema';

export const CategoryCreateManyUpdatedByInputEnvelopeSchema: z.ZodType<Prisma.CategoryCreateManyUpdatedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CategoryCreateManyUpdatedByInputSchema),z.lazy(() => CategoryCreateManyUpdatedByInputSchema).array() ]),
}).strict();

export default CategoryCreateManyUpdatedByInputEnvelopeSchema;
