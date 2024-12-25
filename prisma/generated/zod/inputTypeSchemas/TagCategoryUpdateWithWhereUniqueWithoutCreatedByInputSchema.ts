import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryWhereUniqueInputSchema } from './TagCategoryWhereUniqueInputSchema';
import { TagCategoryUpdateWithoutCreatedByInputSchema } from './TagCategoryUpdateWithoutCreatedByInputSchema';
import { TagCategoryUncheckedUpdateWithoutCreatedByInputSchema } from './TagCategoryUncheckedUpdateWithoutCreatedByInputSchema';

export const TagCategoryUpdateWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.TagCategoryUpdateWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => TagCategoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagCategoryUpdateWithoutCreatedByInputSchema),z.lazy(() => TagCategoryUncheckedUpdateWithoutCreatedByInputSchema) ]),
}).strict();

export default TagCategoryUpdateWithWhereUniqueWithoutCreatedByInputSchema;
