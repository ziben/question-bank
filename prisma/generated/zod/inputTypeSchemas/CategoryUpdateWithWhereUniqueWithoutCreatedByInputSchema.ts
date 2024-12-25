import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryUpdateWithoutCreatedByInputSchema } from './CategoryUpdateWithoutCreatedByInputSchema';
import { CategoryUncheckedUpdateWithoutCreatedByInputSchema } from './CategoryUncheckedUpdateWithoutCreatedByInputSchema';

export const CategoryUpdateWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.CategoryUpdateWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CategoryUpdateWithoutCreatedByInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutCreatedByInputSchema) ]),
}).strict();

export default CategoryUpdateWithWhereUniqueWithoutCreatedByInputSchema;
