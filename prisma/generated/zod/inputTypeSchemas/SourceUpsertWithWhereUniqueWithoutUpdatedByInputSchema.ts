import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SourceWhereUniqueInputSchema } from './SourceWhereUniqueInputSchema';
import { SourceUpdateWithoutUpdatedByInputSchema } from './SourceUpdateWithoutUpdatedByInputSchema';
import { SourceUncheckedUpdateWithoutUpdatedByInputSchema } from './SourceUncheckedUpdateWithoutUpdatedByInputSchema';
import { SourceCreateWithoutUpdatedByInputSchema } from './SourceCreateWithoutUpdatedByInputSchema';
import { SourceUncheckedCreateWithoutUpdatedByInputSchema } from './SourceUncheckedCreateWithoutUpdatedByInputSchema';

export const SourceUpsertWithWhereUniqueWithoutUpdatedByInputSchema: z.ZodType<Prisma.SourceUpsertWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => SourceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SourceUpdateWithoutUpdatedByInputSchema),z.lazy(() => SourceUncheckedUpdateWithoutUpdatedByInputSchema) ]),
  create: z.union([ z.lazy(() => SourceCreateWithoutUpdatedByInputSchema),z.lazy(() => SourceUncheckedCreateWithoutUpdatedByInputSchema) ]),
}).strict();

export default SourceUpsertWithWhereUniqueWithoutUpdatedByInputSchema;
