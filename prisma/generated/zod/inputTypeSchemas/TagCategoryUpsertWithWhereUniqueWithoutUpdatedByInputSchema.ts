import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryWhereUniqueInputSchema } from './TagCategoryWhereUniqueInputSchema';
import { TagCategoryUpdateWithoutUpdatedByInputSchema } from './TagCategoryUpdateWithoutUpdatedByInputSchema';
import { TagCategoryUncheckedUpdateWithoutUpdatedByInputSchema } from './TagCategoryUncheckedUpdateWithoutUpdatedByInputSchema';
import { TagCategoryCreateWithoutUpdatedByInputSchema } from './TagCategoryCreateWithoutUpdatedByInputSchema';
import { TagCategoryUncheckedCreateWithoutUpdatedByInputSchema } from './TagCategoryUncheckedCreateWithoutUpdatedByInputSchema';

export const TagCategoryUpsertWithWhereUniqueWithoutUpdatedByInputSchema: z.ZodType<Prisma.TagCategoryUpsertWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => TagCategoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagCategoryUpdateWithoutUpdatedByInputSchema),z.lazy(() => TagCategoryUncheckedUpdateWithoutUpdatedByInputSchema) ]),
  create: z.union([ z.lazy(() => TagCategoryCreateWithoutUpdatedByInputSchema),z.lazy(() => TagCategoryUncheckedCreateWithoutUpdatedByInputSchema) ]),
}).strict();

export default TagCategoryUpsertWithWhereUniqueWithoutUpdatedByInputSchema;
