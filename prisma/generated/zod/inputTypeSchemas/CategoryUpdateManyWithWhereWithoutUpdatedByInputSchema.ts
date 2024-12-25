import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryScalarWhereInputSchema } from './CategoryScalarWhereInputSchema';
import { CategoryUpdateManyMutationInputSchema } from './CategoryUpdateManyMutationInputSchema';
import { CategoryUncheckedUpdateManyWithoutUpdatedByInputSchema } from './CategoryUncheckedUpdateManyWithoutUpdatedByInputSchema';

export const CategoryUpdateManyWithWhereWithoutUpdatedByInputSchema: z.ZodType<Prisma.CategoryUpdateManyWithWhereWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => CategoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CategoryUpdateManyMutationInputSchema),z.lazy(() => CategoryUncheckedUpdateManyWithoutUpdatedByInputSchema) ]),
}).strict();

export default CategoryUpdateManyWithWhereWithoutUpdatedByInputSchema;
