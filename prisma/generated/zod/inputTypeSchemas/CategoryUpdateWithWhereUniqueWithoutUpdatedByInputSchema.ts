import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryUpdateWithoutUpdatedByInputSchema } from './CategoryUpdateWithoutUpdatedByInputSchema';
import { CategoryUncheckedUpdateWithoutUpdatedByInputSchema } from './CategoryUncheckedUpdateWithoutUpdatedByInputSchema';

export const CategoryUpdateWithWhereUniqueWithoutUpdatedByInputSchema: z.ZodType<Prisma.CategoryUpdateWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CategoryUpdateWithoutUpdatedByInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutUpdatedByInputSchema) ]),
}).strict();

export default CategoryUpdateWithWhereUniqueWithoutUpdatedByInputSchema;
