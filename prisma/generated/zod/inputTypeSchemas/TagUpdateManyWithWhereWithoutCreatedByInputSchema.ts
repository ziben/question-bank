import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';
import { TagUpdateManyMutationInputSchema } from './TagUpdateManyMutationInputSchema';
import { TagUncheckedUpdateManyWithoutCreatedByInputSchema } from './TagUncheckedUpdateManyWithoutCreatedByInputSchema';

export const TagUpdateManyWithWhereWithoutCreatedByInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutCreatedByInput> = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagUpdateManyMutationInputSchema),z.lazy(() => TagUncheckedUpdateManyWithoutCreatedByInputSchema) ]),
}).strict();

export default TagUpdateManyWithWhereWithoutCreatedByInputSchema;
