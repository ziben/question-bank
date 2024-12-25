import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutCreatedByInputSchema } from './TagUpdateWithoutCreatedByInputSchema';
import { TagUncheckedUpdateWithoutCreatedByInputSchema } from './TagUncheckedUpdateWithoutCreatedByInputSchema';

export const TagUpdateWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagUpdateWithoutCreatedByInputSchema),z.lazy(() => TagUncheckedUpdateWithoutCreatedByInputSchema) ]),
}).strict();

export default TagUpdateWithWhereUniqueWithoutCreatedByInputSchema;
