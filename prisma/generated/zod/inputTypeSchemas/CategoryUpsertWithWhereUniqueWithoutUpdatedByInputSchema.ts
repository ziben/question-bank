import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryUpdateWithoutUpdatedByInputSchema } from './CategoryUpdateWithoutUpdatedByInputSchema';
import { CategoryUncheckedUpdateWithoutUpdatedByInputSchema } from './CategoryUncheckedUpdateWithoutUpdatedByInputSchema';
import { CategoryCreateWithoutUpdatedByInputSchema } from './CategoryCreateWithoutUpdatedByInputSchema';
import { CategoryUncheckedCreateWithoutUpdatedByInputSchema } from './CategoryUncheckedCreateWithoutUpdatedByInputSchema';

export const CategoryUpsertWithWhereUniqueWithoutUpdatedByInputSchema: z.ZodType<Prisma.CategoryUpsertWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CategoryUpdateWithoutUpdatedByInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutUpdatedByInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutUpdatedByInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutUpdatedByInputSchema) ]),
}).strict();

export default CategoryUpsertWithWhereUniqueWithoutUpdatedByInputSchema;
