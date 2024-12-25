import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutCreatedByInputSchema } from './TagUpdateWithoutCreatedByInputSchema';
import { TagUncheckedUpdateWithoutCreatedByInputSchema } from './TagUncheckedUpdateWithoutCreatedByInputSchema';
import { TagCreateWithoutCreatedByInputSchema } from './TagCreateWithoutCreatedByInputSchema';
import { TagUncheckedCreateWithoutCreatedByInputSchema } from './TagUncheckedCreateWithoutCreatedByInputSchema';

export const TagUpsertWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagUpdateWithoutCreatedByInputSchema),z.lazy(() => TagUncheckedUpdateWithoutCreatedByInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutCreatedByInputSchema),z.lazy(() => TagUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export default TagUpsertWithWhereUniqueWithoutCreatedByInputSchema;
