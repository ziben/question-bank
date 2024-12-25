import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';
import { TagUpdateManyMutationInputSchema } from './TagUpdateManyMutationInputSchema';
import { TagUncheckedUpdateManyWithoutUpdatedByInputSchema } from './TagUncheckedUpdateManyWithoutUpdatedByInputSchema';

export const TagUpdateManyWithWhereWithoutUpdatedByInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagUpdateManyMutationInputSchema),z.lazy(() => TagUncheckedUpdateManyWithoutUpdatedByInputSchema) ]),
}).strict();

export default TagUpdateManyWithWhereWithoutUpdatedByInputSchema;
