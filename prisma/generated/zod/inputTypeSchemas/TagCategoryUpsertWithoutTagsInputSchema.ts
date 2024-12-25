import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryUpdateWithoutTagsInputSchema } from './TagCategoryUpdateWithoutTagsInputSchema';
import { TagCategoryUncheckedUpdateWithoutTagsInputSchema } from './TagCategoryUncheckedUpdateWithoutTagsInputSchema';
import { TagCategoryCreateWithoutTagsInputSchema } from './TagCategoryCreateWithoutTagsInputSchema';
import { TagCategoryUncheckedCreateWithoutTagsInputSchema } from './TagCategoryUncheckedCreateWithoutTagsInputSchema';
import { TagCategoryWhereInputSchema } from './TagCategoryWhereInputSchema';

export const TagCategoryUpsertWithoutTagsInputSchema: z.ZodType<Prisma.TagCategoryUpsertWithoutTagsInput> = z.object({
  update: z.union([ z.lazy(() => TagCategoryUpdateWithoutTagsInputSchema),z.lazy(() => TagCategoryUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => TagCategoryCreateWithoutTagsInputSchema),z.lazy(() => TagCategoryUncheckedCreateWithoutTagsInputSchema) ]),
  where: z.lazy(() => TagCategoryWhereInputSchema).optional()
}).strict();

export default TagCategoryUpsertWithoutTagsInputSchema;
