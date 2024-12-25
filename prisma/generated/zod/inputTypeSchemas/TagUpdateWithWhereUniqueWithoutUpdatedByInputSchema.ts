import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutUpdatedByInputSchema } from './TagUpdateWithoutUpdatedByInputSchema';
import { TagUncheckedUpdateWithoutUpdatedByInputSchema } from './TagUncheckedUpdateWithoutUpdatedByInputSchema';

export const TagUpdateWithWhereUniqueWithoutUpdatedByInputSchema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagUpdateWithoutUpdatedByInputSchema),z.lazy(() => TagUncheckedUpdateWithoutUpdatedByInputSchema) ]),
}).strict();

export default TagUpdateWithWhereUniqueWithoutUpdatedByInputSchema;
