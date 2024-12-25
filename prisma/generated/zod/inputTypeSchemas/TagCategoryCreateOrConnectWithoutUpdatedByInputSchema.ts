import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryWhereUniqueInputSchema } from './TagCategoryWhereUniqueInputSchema';
import { TagCategoryCreateWithoutUpdatedByInputSchema } from './TagCategoryCreateWithoutUpdatedByInputSchema';
import { TagCategoryUncheckedCreateWithoutUpdatedByInputSchema } from './TagCategoryUncheckedCreateWithoutUpdatedByInputSchema';

export const TagCategoryCreateOrConnectWithoutUpdatedByInputSchema: z.ZodType<Prisma.TagCategoryCreateOrConnectWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => TagCategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCategoryCreateWithoutUpdatedByInputSchema),z.lazy(() => TagCategoryUncheckedCreateWithoutUpdatedByInputSchema) ]),
}).strict();

export default TagCategoryCreateOrConnectWithoutUpdatedByInputSchema;
