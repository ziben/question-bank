import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SourceWhereUniqueInputSchema } from './SourceWhereUniqueInputSchema';
import { SourceCreateWithoutUpdatedByInputSchema } from './SourceCreateWithoutUpdatedByInputSchema';
import { SourceUncheckedCreateWithoutUpdatedByInputSchema } from './SourceUncheckedCreateWithoutUpdatedByInputSchema';

export const SourceCreateOrConnectWithoutUpdatedByInputSchema: z.ZodType<Prisma.SourceCreateOrConnectWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => SourceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SourceCreateWithoutUpdatedByInputSchema),z.lazy(() => SourceUncheckedCreateWithoutUpdatedByInputSchema) ]),
}).strict();

export default SourceCreateOrConnectWithoutUpdatedByInputSchema;
