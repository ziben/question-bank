import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryCreateWithoutTagsInputSchema } from './TagCategoryCreateWithoutTagsInputSchema';
import { TagCategoryUncheckedCreateWithoutTagsInputSchema } from './TagCategoryUncheckedCreateWithoutTagsInputSchema';
import { TagCategoryCreateOrConnectWithoutTagsInputSchema } from './TagCategoryCreateOrConnectWithoutTagsInputSchema';
import { TagCategoryUpsertWithoutTagsInputSchema } from './TagCategoryUpsertWithoutTagsInputSchema';
import { TagCategoryWhereUniqueInputSchema } from './TagCategoryWhereUniqueInputSchema';
import { TagCategoryUpdateToOneWithWhereWithoutTagsInputSchema } from './TagCategoryUpdateToOneWithWhereWithoutTagsInputSchema';
import { TagCategoryUpdateWithoutTagsInputSchema } from './TagCategoryUpdateWithoutTagsInputSchema';
import { TagCategoryUncheckedUpdateWithoutTagsInputSchema } from './TagCategoryUncheckedUpdateWithoutTagsInputSchema';

export const TagCategoryUpdateOneRequiredWithoutTagsNestedInputSchema: z.ZodType<Prisma.TagCategoryUpdateOneRequiredWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCategoryCreateWithoutTagsInputSchema),z.lazy(() => TagCategoryUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCategoryCreateOrConnectWithoutTagsInputSchema).optional(),
  upsert: z.lazy(() => TagCategoryUpsertWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => TagCategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TagCategoryUpdateToOneWithWhereWithoutTagsInputSchema),z.lazy(() => TagCategoryUpdateWithoutTagsInputSchema),z.lazy(() => TagCategoryUncheckedUpdateWithoutTagsInputSchema) ]).optional(),
}).strict();

export default TagCategoryUpdateOneRequiredWithoutTagsNestedInputSchema;
