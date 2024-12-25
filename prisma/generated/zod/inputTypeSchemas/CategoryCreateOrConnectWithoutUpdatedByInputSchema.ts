import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryCreateWithoutUpdatedByInputSchema } from './CategoryCreateWithoutUpdatedByInputSchema';
import { CategoryUncheckedCreateWithoutUpdatedByInputSchema } from './CategoryUncheckedCreateWithoutUpdatedByInputSchema';

export const CategoryCreateOrConnectWithoutUpdatedByInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutUpdatedByInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutUpdatedByInputSchema) ]),
}).strict();

export default CategoryCreateOrConnectWithoutUpdatedByInputSchema;
