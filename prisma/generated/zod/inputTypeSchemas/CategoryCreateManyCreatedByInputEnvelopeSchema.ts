import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryCreateManyCreatedByInputSchema } from './CategoryCreateManyCreatedByInputSchema';

export const CategoryCreateManyCreatedByInputEnvelopeSchema: z.ZodType<Prisma.CategoryCreateManyCreatedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CategoryCreateManyCreatedByInputSchema),z.lazy(() => CategoryCreateManyCreatedByInputSchema).array() ]),
}).strict();

export default CategoryCreateManyCreatedByInputEnvelopeSchema;
