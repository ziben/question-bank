import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SourceWhereUniqueInputSchema } from './SourceWhereUniqueInputSchema';
import { SourceUpdateWithoutCreatedByInputSchema } from './SourceUpdateWithoutCreatedByInputSchema';
import { SourceUncheckedUpdateWithoutCreatedByInputSchema } from './SourceUncheckedUpdateWithoutCreatedByInputSchema';

export const SourceUpdateWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.SourceUpdateWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => SourceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SourceUpdateWithoutCreatedByInputSchema),z.lazy(() => SourceUncheckedUpdateWithoutCreatedByInputSchema) ]),
}).strict();

export default SourceUpdateWithWhereUniqueWithoutCreatedByInputSchema;
