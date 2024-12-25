import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutCategoryInputSchema } from './TagUpdateWithoutCategoryInputSchema';
import { TagUncheckedUpdateWithoutCategoryInputSchema } from './TagUncheckedUpdateWithoutCategoryInputSchema';
import { TagCreateWithoutCategoryInputSchema } from './TagCreateWithoutCategoryInputSchema';
import { TagUncheckedCreateWithoutCategoryInputSchema } from './TagUncheckedCreateWithoutCategoryInputSchema';

export const TagUpsertWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagUpdateWithoutCategoryInputSchema),z.lazy(() => TagUncheckedUpdateWithoutCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutCategoryInputSchema),z.lazy(() => TagUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export default TagUpsertWithWhereUniqueWithoutCategoryInputSchema;
