import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryWhereInputSchema } from './TagCategoryWhereInputSchema';
import { TagCategoryUpdateWithoutTagsInputSchema } from './TagCategoryUpdateWithoutTagsInputSchema';
import { TagCategoryUncheckedUpdateWithoutTagsInputSchema } from './TagCategoryUncheckedUpdateWithoutTagsInputSchema';

export const TagCategoryUpdateToOneWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.TagCategoryUpdateToOneWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => TagCategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TagCategoryUpdateWithoutTagsInputSchema),z.lazy(() => TagCategoryUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default TagCategoryUpdateToOneWithWhereWithoutTagsInputSchema;
