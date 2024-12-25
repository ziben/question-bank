import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryUpdateWithoutCreatedByInputSchema } from './CategoryUpdateWithoutCreatedByInputSchema';
import { CategoryUncheckedUpdateWithoutCreatedByInputSchema } from './CategoryUncheckedUpdateWithoutCreatedByInputSchema';
import { CategoryCreateWithoutCreatedByInputSchema } from './CategoryCreateWithoutCreatedByInputSchema';
import { CategoryUncheckedCreateWithoutCreatedByInputSchema } from './CategoryUncheckedCreateWithoutCreatedByInputSchema';

export const CategoryUpsertWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.CategoryUpsertWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CategoryUpdateWithoutCreatedByInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutCreatedByInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutCreatedByInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export default CategoryUpsertWithWhereUniqueWithoutCreatedByInputSchema;
