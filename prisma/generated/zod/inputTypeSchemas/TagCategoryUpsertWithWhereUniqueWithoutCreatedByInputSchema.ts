import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryWhereUniqueInputSchema } from './TagCategoryWhereUniqueInputSchema';
import { TagCategoryUpdateWithoutCreatedByInputSchema } from './TagCategoryUpdateWithoutCreatedByInputSchema';
import { TagCategoryUncheckedUpdateWithoutCreatedByInputSchema } from './TagCategoryUncheckedUpdateWithoutCreatedByInputSchema';
import { TagCategoryCreateWithoutCreatedByInputSchema } from './TagCategoryCreateWithoutCreatedByInputSchema';
import { TagCategoryUncheckedCreateWithoutCreatedByInputSchema } from './TagCategoryUncheckedCreateWithoutCreatedByInputSchema';

export const TagCategoryUpsertWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.TagCategoryUpsertWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => TagCategoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagCategoryUpdateWithoutCreatedByInputSchema),z.lazy(() => TagCategoryUncheckedUpdateWithoutCreatedByInputSchema) ]),
  create: z.union([ z.lazy(() => TagCategoryCreateWithoutCreatedByInputSchema),z.lazy(() => TagCategoryUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export default TagCategoryUpsertWithWhereUniqueWithoutCreatedByInputSchema;
