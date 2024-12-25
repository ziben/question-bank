import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SourceWhereUniqueInputSchema } from './SourceWhereUniqueInputSchema';
import { SourceUpdateWithoutUpdatedByInputSchema } from './SourceUpdateWithoutUpdatedByInputSchema';
import { SourceUncheckedUpdateWithoutUpdatedByInputSchema } from './SourceUncheckedUpdateWithoutUpdatedByInputSchema';

export const SourceUpdateWithWhereUniqueWithoutUpdatedByInputSchema: z.ZodType<Prisma.SourceUpdateWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => SourceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SourceUpdateWithoutUpdatedByInputSchema),z.lazy(() => SourceUncheckedUpdateWithoutUpdatedByInputSchema) ]),
}).strict();

export default SourceUpdateWithWhereUniqueWithoutUpdatedByInputSchema;
