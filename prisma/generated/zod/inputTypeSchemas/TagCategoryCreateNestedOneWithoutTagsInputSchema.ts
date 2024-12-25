import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryCreateWithoutTagsInputSchema } from './TagCategoryCreateWithoutTagsInputSchema';
import { TagCategoryUncheckedCreateWithoutTagsInputSchema } from './TagCategoryUncheckedCreateWithoutTagsInputSchema';
import { TagCategoryCreateOrConnectWithoutTagsInputSchema } from './TagCategoryCreateOrConnectWithoutTagsInputSchema';
import { TagCategoryWhereUniqueInputSchema } from './TagCategoryWhereUniqueInputSchema';

export const TagCategoryCreateNestedOneWithoutTagsInputSchema: z.ZodType<Prisma.TagCategoryCreateNestedOneWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => TagCategoryCreateWithoutTagsInputSchema),z.lazy(() => TagCategoryUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCategoryCreateOrConnectWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => TagCategoryWhereUniqueInputSchema).optional()
}).strict();

export default TagCategoryCreateNestedOneWithoutTagsInputSchema;
