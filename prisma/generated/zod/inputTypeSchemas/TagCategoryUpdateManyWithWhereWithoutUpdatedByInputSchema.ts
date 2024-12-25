import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryScalarWhereInputSchema } from './TagCategoryScalarWhereInputSchema';
import { TagCategoryUpdateManyMutationInputSchema } from './TagCategoryUpdateManyMutationInputSchema';
import { TagCategoryUncheckedUpdateManyWithoutUpdatedByInputSchema } from './TagCategoryUncheckedUpdateManyWithoutUpdatedByInputSchema';

export const TagCategoryUpdateManyWithWhereWithoutUpdatedByInputSchema: z.ZodType<Prisma.TagCategoryUpdateManyWithWhereWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => TagCategoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagCategoryUpdateManyMutationInputSchema),z.lazy(() => TagCategoryUncheckedUpdateManyWithoutUpdatedByInputSchema) ]),
}).strict();

export default TagCategoryUpdateManyWithWhereWithoutUpdatedByInputSchema;
