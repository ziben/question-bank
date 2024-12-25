import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryWhereUniqueInputSchema } from './TagCategoryWhereUniqueInputSchema';
import { TagCategoryUpdateWithoutUpdatedByInputSchema } from './TagCategoryUpdateWithoutUpdatedByInputSchema';
import { TagCategoryUncheckedUpdateWithoutUpdatedByInputSchema } from './TagCategoryUncheckedUpdateWithoutUpdatedByInputSchema';

export const TagCategoryUpdateWithWhereUniqueWithoutUpdatedByInputSchema: z.ZodType<Prisma.TagCategoryUpdateWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => TagCategoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagCategoryUpdateWithoutUpdatedByInputSchema),z.lazy(() => TagCategoryUncheckedUpdateWithoutUpdatedByInputSchema) ]),
}).strict();

export default TagCategoryUpdateWithWhereUniqueWithoutUpdatedByInputSchema;
