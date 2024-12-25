import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SourceWhereUniqueInputSchema } from './SourceWhereUniqueInputSchema';
import { SourceUpdateWithoutCreatedByInputSchema } from './SourceUpdateWithoutCreatedByInputSchema';
import { SourceUncheckedUpdateWithoutCreatedByInputSchema } from './SourceUncheckedUpdateWithoutCreatedByInputSchema';
import { SourceCreateWithoutCreatedByInputSchema } from './SourceCreateWithoutCreatedByInputSchema';
import { SourceUncheckedCreateWithoutCreatedByInputSchema } from './SourceUncheckedCreateWithoutCreatedByInputSchema';

export const SourceUpsertWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.SourceUpsertWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => SourceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SourceUpdateWithoutCreatedByInputSchema),z.lazy(() => SourceUncheckedUpdateWithoutCreatedByInputSchema) ]),
  create: z.union([ z.lazy(() => SourceCreateWithoutCreatedByInputSchema),z.lazy(() => SourceUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export default SourceUpsertWithWhereUniqueWithoutCreatedByInputSchema;
