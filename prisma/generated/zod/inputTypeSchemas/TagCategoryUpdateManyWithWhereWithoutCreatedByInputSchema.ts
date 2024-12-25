import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryScalarWhereInputSchema } from './TagCategoryScalarWhereInputSchema';
import { TagCategoryUpdateManyMutationInputSchema } from './TagCategoryUpdateManyMutationInputSchema';
import { TagCategoryUncheckedUpdateManyWithoutCreatedByInputSchema } from './TagCategoryUncheckedUpdateManyWithoutCreatedByInputSchema';

export const TagCategoryUpdateManyWithWhereWithoutCreatedByInputSchema: z.ZodType<Prisma.TagCategoryUpdateManyWithWhereWithoutCreatedByInput> = z.object({
  where: z.lazy(() => TagCategoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagCategoryUpdateManyMutationInputSchema),z.lazy(() => TagCategoryUncheckedUpdateManyWithoutCreatedByInputSchema) ]),
}).strict();

export default TagCategoryUpdateManyWithWhereWithoutCreatedByInputSchema;
