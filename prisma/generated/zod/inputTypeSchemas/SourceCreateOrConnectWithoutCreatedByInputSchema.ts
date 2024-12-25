import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SourceWhereUniqueInputSchema } from './SourceWhereUniqueInputSchema';
import { SourceCreateWithoutCreatedByInputSchema } from './SourceCreateWithoutCreatedByInputSchema';
import { SourceUncheckedCreateWithoutCreatedByInputSchema } from './SourceUncheckedCreateWithoutCreatedByInputSchema';

export const SourceCreateOrConnectWithoutCreatedByInputSchema: z.ZodType<Prisma.SourceCreateOrConnectWithoutCreatedByInput> = z.object({
  where: z.lazy(() => SourceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SourceCreateWithoutCreatedByInputSchema),z.lazy(() => SourceUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export default SourceCreateOrConnectWithoutCreatedByInputSchema;
