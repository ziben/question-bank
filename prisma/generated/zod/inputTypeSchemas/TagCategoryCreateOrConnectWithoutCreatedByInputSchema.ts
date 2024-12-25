import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryWhereUniqueInputSchema } from './TagCategoryWhereUniqueInputSchema';
import { TagCategoryCreateWithoutCreatedByInputSchema } from './TagCategoryCreateWithoutCreatedByInputSchema';
import { TagCategoryUncheckedCreateWithoutCreatedByInputSchema } from './TagCategoryUncheckedCreateWithoutCreatedByInputSchema';

export const TagCategoryCreateOrConnectWithoutCreatedByInputSchema: z.ZodType<Prisma.TagCategoryCreateOrConnectWithoutCreatedByInput> = z.object({
  where: z.lazy(() => TagCategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCategoryCreateWithoutCreatedByInputSchema),z.lazy(() => TagCategoryUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export default TagCategoryCreateOrConnectWithoutCreatedByInputSchema;
