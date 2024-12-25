import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';
import { TagUpdateManyMutationInputSchema } from './TagUpdateManyMutationInputSchema';
import { TagUncheckedUpdateManyWithoutCategoryInputSchema } from './TagUncheckedUpdateManyWithoutCategoryInputSchema';

export const TagUpdateManyWithWhereWithoutCategoryInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutCategoryInput> = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagUpdateManyMutationInputSchema),z.lazy(() => TagUncheckedUpdateManyWithoutCategoryInputSchema) ]),
}).strict();

export default TagUpdateManyWithWhereWithoutCategoryInputSchema;
