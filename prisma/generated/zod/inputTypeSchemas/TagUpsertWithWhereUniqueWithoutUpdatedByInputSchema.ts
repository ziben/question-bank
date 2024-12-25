import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutUpdatedByInputSchema } from './TagUpdateWithoutUpdatedByInputSchema';
import { TagUncheckedUpdateWithoutUpdatedByInputSchema } from './TagUncheckedUpdateWithoutUpdatedByInputSchema';
import { TagCreateWithoutUpdatedByInputSchema } from './TagCreateWithoutUpdatedByInputSchema';
import { TagUncheckedCreateWithoutUpdatedByInputSchema } from './TagUncheckedCreateWithoutUpdatedByInputSchema';

export const TagUpsertWithWhereUniqueWithoutUpdatedByInputSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagUpdateWithoutUpdatedByInputSchema),z.lazy(() => TagUncheckedUpdateWithoutUpdatedByInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutUpdatedByInputSchema),z.lazy(() => TagUncheckedCreateWithoutUpdatedByInputSchema) ]),
}).strict();

export default TagUpsertWithWhereUniqueWithoutUpdatedByInputSchema;
