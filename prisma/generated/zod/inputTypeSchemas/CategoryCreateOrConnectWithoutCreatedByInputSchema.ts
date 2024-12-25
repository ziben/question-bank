import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryCreateWithoutCreatedByInputSchema } from './CategoryCreateWithoutCreatedByInputSchema';
import { CategoryUncheckedCreateWithoutCreatedByInputSchema } from './CategoryUncheckedCreateWithoutCreatedByInputSchema';

export const CategoryCreateOrConnectWithoutCreatedByInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutCreatedByInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutCreatedByInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export default CategoryCreateOrConnectWithoutCreatedByInputSchema;
