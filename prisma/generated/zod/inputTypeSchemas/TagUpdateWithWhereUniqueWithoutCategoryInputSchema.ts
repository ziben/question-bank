import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutCategoryInputSchema } from './TagUpdateWithoutCategoryInputSchema';
import { TagUncheckedUpdateWithoutCategoryInputSchema } from './TagUncheckedUpdateWithoutCategoryInputSchema';

export const TagUpdateWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagUpdateWithoutCategoryInputSchema),z.lazy(() => TagUncheckedUpdateWithoutCategoryInputSchema) ]),
}).strict();

export default TagUpdateWithWhereUniqueWithoutCategoryInputSchema;
