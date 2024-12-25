import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryScalarWhereInputSchema } from './CategoryScalarWhereInputSchema';
import { CategoryUpdateManyMutationInputSchema } from './CategoryUpdateManyMutationInputSchema';
import { CategoryUncheckedUpdateManyWithoutCreatedByInputSchema } from './CategoryUncheckedUpdateManyWithoutCreatedByInputSchema';

export const CategoryUpdateManyWithWhereWithoutCreatedByInputSchema: z.ZodType<Prisma.CategoryUpdateManyWithWhereWithoutCreatedByInput> = z.object({
  where: z.lazy(() => CategoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CategoryUpdateManyMutationInputSchema),z.lazy(() => CategoryUncheckedUpdateManyWithoutCreatedByInputSchema) ]),
}).strict();

export default CategoryUpdateManyWithWhereWithoutCreatedByInputSchema;
