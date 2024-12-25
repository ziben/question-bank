import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryWhereUniqueInputSchema } from './TagCategoryWhereUniqueInputSchema';
import { TagCategoryCreateWithoutTagsInputSchema } from './TagCategoryCreateWithoutTagsInputSchema';
import { TagCategoryUncheckedCreateWithoutTagsInputSchema } from './TagCategoryUncheckedCreateWithoutTagsInputSchema';

export const TagCategoryCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.TagCategoryCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => TagCategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCategoryCreateWithoutTagsInputSchema),z.lazy(() => TagCategoryUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default TagCategoryCreateOrConnectWithoutTagsInputSchema;
